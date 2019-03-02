import React, { Component } from "react";
import { Config } from "../../config.js";
import EventItem from "./EventItem.js";
import "../../assets/styles/event.css";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      allEventList: [],
      filterMonth: "",
      filterYear: ""
    };

    this.updateMonth = this.updateMonth.bind(this);
    this.updateYear = this.updateYear.bind(this);
  }
  componentWillMount() {
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    const year = today.getFullYear();

    this.setState({ filterMonth: month });
    this.setState({ filterYear: year });
  }
  componentDidMount() {
    /* get page info */
    fetch(`${Config.apiUrl}/wp-json/wp/v2/events?order=asc&per_page=100`)
      .then(res => res.json())
      .then(res => {
        this.setState({ allEventList: res });
        this.modifyList(res, this.state.filterMonth, this.state.filterYear);
      });
  }

  modifyList(eventList, filterMonth, filterYear) {
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
        if (month === this.getMonth(filterMonth) && year === filterYear) {
          if (month !== currentMonth) {
            currentMonth = month;
            newList.push({ month: currentMonth, list: [] });
            index = index !== null ? index + 1 : 0;
          }
          newList[index].list.push(event);
        }
      });

      this.setState({ eventList: newList });
    }
  }
  updateMonth(event) {
    var month = event.target.value;
    this.setState({ filterMonth: month });
    this.modifyList(this.state.allEventList, month, this.state.filterYear);
  }
  updateYear(event) {
    var year = event.target.value;
    this.setState({ filterYear: year });
    this.modifyList(this.state.allEventList, this.state.filterMonth, year);
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
      <div>
        <div className="row">
          <div className="col-md-offset-5 col-md-7 col-sm-12">
            <form>
              <div className="row">
                <label className="title-uppercase">MONTH:</label>
                <div className="form-group half mar-top-xs">
                  <select
                    className="form-control"
                    value={this.state.filterMonth}
                    onChange={this.updateMonth}
                  >
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div className="form-group half">
                  <select
                    className="form-control"
                    value={this.state.filterYear}
                    onChange={this.updateYear}
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          {eventList}
          {this.state.eventList.length === 0 && (
            <div className="col-md-offset-5 col-sm-offset-4 col-xs-offset-1 mar-top">
              <p className="text-large txt-black">------ No events -------</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EventList;
