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
      filterYear: "",
      eventYears: [],
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
    this.fetchEvents(this.state.filterYear, this.state.filterMonth);
  }

  fetchEvents(year, month) {
     /* get all event_year */
     fetch(`${Config.apiUrl}/wp-json/wp/v2/event_year?order=desc`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          eventYears: res
        });

        fetch(
          `${
            Config.apiUrl
          }/wp-json/wp/v2/foodfocus_events?${Config.acfFormat}filter[meta_query][relation]=AND&filter[meta_query][0][key]=year&filter[meta_query][0][value]=${year}&filter[meta_query][0][compare]==&filter[meta_query][1][key]=month&filter[meta_query][1][value]=${this.getMonth(
            month.toString()
          )}&filter[meta_query][1][compare]==`
        )
          .then(res => res.json())
          .then(res => {
            this.setState({ eventList: res });
          });
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
        if (month != currentMonth) {
          currentMonth = month;
          newList.push({ month: currentMonth, list: [] });
          index = index != null ? index + 1 : 0;
        }
        newList[index].list.push(event);
      });


      this.setState({ eventList: newList });
    } else {
      this.setState({ eventList: [] });
    }
  }
  updateMonth(event) {
    var month = event.target.value;
    this.setState({ eventList: [], filterMonth: month });
    this.fetchEvents(this.state.filterYear, month);
  }
  updateYear(event) {
    var year = event.target.value;
    this.setState({ eventList: [], filterYear: year });
    this.fetchEvents(year, this.state.filterMonth);
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

  renderEventItem(event) {
    return <EventItem key={`event-${event.id}`} event={event} />
  }

  render() {
    var eventList = this.state.eventList.map((eventObj, index) => (
      <div className="col-xs-12" key={`event-obj-${index}`}>
        <p className="text-large txt-black mar-bot">
          {eventObj.acf && eventObj.acf.month.toUpperCase()}
        </p>
        <ul>{this.renderEventItem(eventObj)}</ul>
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
                    {this.state.eventYears.map((year) => (
                      <option key={`event-year-${year.id}`} value={year.name}>
                        {year.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
          {eventList}
          {this.state.eventList.length == 0 && (
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
