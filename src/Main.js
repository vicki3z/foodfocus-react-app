import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Roadmap from './components/Roadmap.js';

const Main = () => (
	<div>
	  	<main>
	    	<Route path="/" exact component={Home} />
	    	<Route path="/roadmap" component={Roadmap} />
	    </main>
	</div>
)

export default Main;