import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from '../Posts/PostList.js';
import PostDetail from '../Posts/PostDetail.js';
import '../../assets/styles/post.css';

const PostSubComponents = (props) => (
	<section className="content pad-top-lg pad-bot-lg">
		<div className="inner-container">
			<Switch>
				<Route path={props.match.path} exact component={PostList} />
				<Route path={`${props.match.path}/:slug`} component={PostDetail} />
			</Switch>
		</div>
	</section>
)

export default PostSubComponents;