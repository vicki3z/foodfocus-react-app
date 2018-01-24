import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import RoadmapSubComponents from './components/Roadmaps/RoadmapSubComponents.js';
import PostSubComponents from './components/Posts/PostSubComponents.js';

const Main = () => (
	<div className="root responsivegrid">
	  	<main>
	    	<Route path="/" exact component={Home} />
	    	<Route path="/roadmaps" component={RoadmapSubComponents} />
	    	<Route path="/roadshows" component={RoadmapSubComponents} />
	    	<Route path="/seminars" component={RoadmapSubComponents} />
	    	
	    	<Route path="/whats-in" component={PostSubComponents} />
	    	<Route path="/news" component={PostSubComponents} />
	    	<Route path="/ushare" component={PostSubComponents} />
	    </main>
	</div>
)

export default Main;