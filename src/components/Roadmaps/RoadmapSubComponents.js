import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoadmapDetail from '../Roadmaps/RoadmapDetail.js';
import RoadmapListWrapper from '../Roadmaps/RoadmapListWrapper.js';
import '../../assets/styles/post.css';

const RoadmapSubComponents = (props) => (
	<Switch>
		<Route path={`${props.match.path}`} exact component={RoadmapListWrapper} />
		<Route path={`${props.match.path}/:slug`} component={RoadmapDetail} />
	</Switch>
)

export default RoadmapSubComponents;