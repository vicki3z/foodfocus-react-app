import React, { Component } from "react";

const EventItem = function(props) {
  const eventStartDate = {
    year: props.event.acf.date_start.substr(0, 4),
    month: props.event.acf.date_start.substr(4, 2),
    date: props.event.acf.date_start.substr(6, 2)
  }
  const eventEndDate = {
    year: props.event.acf.date_end.substr(0, 4),
    month: props.event.acf.date_end.substr(4, 2),
    date: props.event.acf.date_end.substr(6, 2)
  }

  const startDateObj = new Date(`${eventStartDate.year}/${eventStartDate.month}/${eventStartDate.date}`);
  const endDateObj = new Date(`${eventEndDate.year}/${eventEndDate.month}/${eventEndDate.date}`);
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
  let month = formatter.format(startDateObj);

  if (startDateObj.getMonth() !== endDateObj.getMonth()) {
    month = month + "/" + formatter.format(endDateObj);;
  }
  
  var dateStart = props.event.acf.date_start.substr(6, 2);
  var dateEnd = props.event.acf.date_end.substr(6, 2);

  return (
    <li className="event">
      <div className="event-date">
        <p className="text-medium txt-white">{props.event.acf.year}</p>
        <h2 className="title txt-black">
          {dateStart}-{dateEnd}
        </h2>
        <p className="text-medium txt-black">{month.toUpperCase()}</p>
      </div>
      <div className="event-group">
        <p
          className="text-large txt-black"
          dangerouslySetInnerHTML={{
            __html: props.event.post_title
          }}
        />
        {props.event.acf.full_event_name != "" && (
          <p className="text-large txt-black">
            {props.event.acf.full_event_name}
          </p>
        )}
        <p className="text-mediumer txt-black">{props.event.acf.location}</p>
        <p className="text-medium txt-black">
          {props.event.acf.tel != "" && <span>Tel: {props.event.acf.tel}</span>}
          {props.event.acf.email != "" && (
            <span> Email: {props.event.acf.email}</span>
          )}
        </p>

        {props.event.acf.website != "" && (
          <p className="text-medium txt-black">
            Website:{" "}
            <a href={props.event.acf.website}>{props.event.acf.website}</a>
          </p>
        )}
      </div>
    </li>
  );
};

export default EventItem;
