import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Roadmap from './components/Roadmap.js';
import PostSubComponents from './components/Posts/PostSubComponents.js';
import './assets/styles/libs.css';
import './assets/styles/style.css';

const Main = () => (
	<div className="root responsivegrid">
	  	<main>
	    	<Route path="/" exact component={Home} />
	    	<Route path="/roadmap" component={Roadmap} />
	    	<Route path="/whats-in" component={PostSubComponents} />
	    	<Route path="/news" component={PostSubComponents} />
	    </main>
	</div>
)

export default Main;