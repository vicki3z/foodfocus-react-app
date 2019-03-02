import React, { Component } from "react";
import HomeMainPost from "../Posts/HomeMainPost.js";
import { Config } from "../../config.js";
import EventItem from "../Events/EventItem.js";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      eventList: []
    };
  }

  componentDidMount() {
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?search=${
        this.props.match.params.word
      }&per_page=20`
    )
      .then(res => res.json())
      .then(res => {
        if (this.state.postList.length > 0) {
          this.setState({ postList: this.state.postList.concat(res) });
        } else {
          this.setState({ postList: res });
        }
      });
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/roadmap?search=${
        this.props.match.params.word
      }&per_page=20`
    )
      .then(res => res.json())
      .then(res => {
        if (this.state.postList.length > 0) {
          this.setState({ postList: this.state.postList.concat(res) });
        } else {
          this.setState({ postList: res });
        }
      });
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/roadshow?search=${
        this.props.match.params.word
      }&per_page=20`
    )
      .then(res => res.json())
      .then(res => {
        if (this.state.postList.length > 0) {
          this.setState({ postList: this.state.postList.concat(res) });
        } else {
          this.setState({ postList: res });
        }
      });
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/seminar?search=${
        this.props.match.params.word
      }&per_page=20`
    )
      .then(res => res.json())
      .then(res => {
        if (this.state.postList.length > 0) {
          this.setState({ postList: this.state.postList.concat(res) });
        } else {
          this.setState({ postList: res });
        }
      });

    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/events?search=${
        this.props.match.params.word
      }&order=asc&per_page=60`
    )
      .then(res => res.json())
      .then(res => {
        this.modifyEvent(res);
      });
  }
  modifyEvent(eventList) {
    var newList = [];

    if (eventList.length > 0) {
      var currentMonth = "";
      var index = null;
      eventList.map(event => {
        const dateStart = event.acf.date_start.split("/");
        const dateEnd = event.acf.date_end.split("/");
        let month = this.getMonth(dateStart[1]);
        let endMonth = this.getMonth(dateEnd[1]);
        event.startMonth = month;
        event.endMonth = endMonth;
        let year = dateStart[2];
        if (month !== currentMonth) {
          currentMonth = month;
          newList.push({ month: currentMonth, list: [] });
          index = index !== null ? index + 1 : 0;
        }
        newList[index].list.push(event);
      });

      this.setState({ eventList: newList });
    }
  }
  getMonth(month) {
    switch (month) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  }
  renderPostItem() {
    if (this.state.postList.length > 0) {
      return this.state.postList.map((post, index) => (
        <HomeMainPost post={post} key={`post-${post.id}`} />
      ));
    } else {
      return null;
    }
  }
  renderEventItem(events) {
    return events.map(event => (
      <EventItem key={`event-${event.id}`} event={event} />
    ));
  }
  render() {
    var eventList = this.state.eventList.map((eventObj, index) => (
      <div className="col-xs-12" key={`event-obj-${index}`}>
        <p className="text-large txt-black mar-bot">
          {eventObj.month.toUpperCase()}
        </p>
        <ul>{this.renderEventItem(eventObj.list)}</ul>
      </div>
    ));
    return (
      <section className="content pad-top-lg pad-bot-lg">
        <div className="inner-container">
          <div className="row list">
            <div className="col-md-12 col-sm-12">
              <div className="content-header mar-bot">
                <h3 className="title light txt-black">
                  Search for "{this.props.match.params.word}"
                </h3>
              </div>
              {this.renderPostItem()}
            </div>
          </div>
          <div className="row mar-top">{eventList}</div>
        </div>
      </section>
    );
  }
}

export default SearchList;
