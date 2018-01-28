import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoadmapDetail from '../Roadmaps/RoadmapDetail.js';
import '../../assets/styles/post.css';

const RoadmapSubComponents = (props) => (
	<section className="content pad-top-lg pad-bot-lg">
		<div className="inner-container">
			<Switch>
				<Route path={`${props.match.path}/:slug`} component={RoadmapDetail} />
			</Switch>
		</div>
	</section>
)

export default RoadmapSubComponents;