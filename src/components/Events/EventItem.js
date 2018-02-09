import React, { Component } from 'react';

const EventItem = function(props){
  var startMonth = props.event.startMonth.substr(0,3);
  var endMonth = props.event.endMonth.substr(0,3);

  if(startMonth != endMonth){
    startMonth = startMonth + "/" + endMonth;
  }
  var dateStart = props.event.acf.date_start.split('/');
  var dateEnd = props.event.acf.date_end.split('/');

  return(
    <li className="event">
      <div className="event-date">
          <h2 className="title txt-black">{dateStart[0]}-{dateEnd[0]}</h2>
          <p className="text-medium txt-black">{startMonth.toUpperCase()}</p>
      </div>
      <div className="event-group">
          <p className="text-large txt-black"
            dangerouslySetInnerHTML={{
                __html: props.event.title.rendered
            }} />
          {props.event.acf.full_event_name != "" &&
            <p className="text-large txt-black">{props.event.acf.full_event_name}</p>
          }
          <p className="text-mediumer txt-black">{props.event.acf.location}</p>
          <p className="text-medium txt-black">
          {props.event.acf.tel != "" &&
            <span>Tel: {props.event.acf.tel}</span>
          }
          {props.event.acf.email != "" &&
            <span> Email: {props.event.acf.email}</span>
          }
          </p>
          
          {props.event.acf.website != "" &&
            <p className="text-medium txt-black">
              Website: <a href={props.event.acf.website}>{props.event.acf.website}</a>
            </p>
          }
      </div>
    </li>
  )
	
}

export default EventItem;