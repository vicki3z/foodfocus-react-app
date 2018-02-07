import React, { Component } from 'react';
import { Config } from "../../config.js";

class EventList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
          eventList: []
	    }
  	}
  	componentDidMount() {
  		/* get page info */
      fetch(`${Config.apiUrl}/wp-json/wp/v2/events`)
        .then(res => res.json())
        .then(res => {
          this.modifyList(res);
        })
  	}

    modifyList(eventList){
      var newList = []

      if(eventList.length > 0){
        var currentMonth = "";
        var index = null;
        eventList.map((event) => {
          const dateStart = event.acf.date_start.split("/");
          let month = this.getMonth(dateStart[1]);
          if(month != currentMonth){
            currentMonth = month;
            newList.push({month: currentMonth, list: []});
            index = (index != null) ? index+1 : 0;

          }
          newList[index].list.push(event)
        })

        this.setState({eventList: newList});
      }
    }

    getMonth(month){
      switch(month){
        case "01":
          return "January";
        case "02":
          return "February";
        case "03":
          return "March"
        case "04":
          return "April"
        case "05":
          return "May"
        case "06":
          return "June"
        case "07":
          return "July"
        case "08":
          return "August"
        case "09":
          return "September"
        case "10":
          return "October"
        case "11":
          return "November"
        case "12":
          return "December"
      }
    }

  	render() {
      var eventList = this.state.eventList.map((eventObj) => (
        <div className="col-xs-12">
          <p className="text-large txt-black mar-bot">{eventObj.month.toUpperCase()}</p>
          <ul>
          </ul>
        </div>
      ))
  		return (
        <div>
    			{eventList}
        </div>
  		)
  	}

}

export default EventList;