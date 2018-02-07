import React, { Component } from 'react';

const EventItem = (props) => (
	<li className="event">
		<div className="event-date">
          	<h2 className="title txt-black">16-18</h2>
          	<p className="text-medium txt-black">JAN</p>
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

export default EventItem;