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
        <p>
          <p className="text-large txt-black"
            dangerouslySetInnerHTML={{
                __html: props.event.title.rendered
            }} />
          <p className="text-mediumer txt-black">{props.event.acf.location}</p>
          <p className="text-medium txt-black">www.horeca-kuwait.com</p>
        </p>
      </div>
    </li>
  )
	
}

export default EventItem;