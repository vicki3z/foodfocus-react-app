import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import RoadmapSubComponents from './components/Roadmaps/RoadmapSubComponents.js';
import PostSubComponents from './components/Posts/PostSubComponents.js';
import SearchList from './components/Posts/SearchList.js';
import Magazine from './components/Magazines/Magazine.js';
import EventListWrapper from './components/Events/EventListWrapper.js';

const Main = () => (
	<div className="root responsivegrid">
	  	<main>
	    	<Route path="/index.html" exact component={Home} />
	    	<Route path="/roadmaps" component={RoadmapSubComponents} />
	    	<Route path="/roadshows" component={RoadmapSubComponents} />
	    	<Route path="/seminars" component={RoadmapSubComponents} />
	    	<Route path="/event-exhibition" exact component={EventListWrapper} />
	    	
	    	<Route path="/whats-in" component={PostSubComponents} />
	    	<Route path="/news" component={PostSubComponents} />
	    	<Route path="/ushare" component={PostSubComponents} />

			<Route path="/magazines" exact component={Magazine} />
	    	<Route path="/magazines/:slug" component={Magazine} />

	    	<Route path="/search/:word" component={SearchList} />
	    </main>
	</div>
)

export default Main;