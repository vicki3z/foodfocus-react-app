import React from 'react';

const PostItem = (props) => (
	<a href={`/${props.slug}/${props.post.slug}`}>
        <div className="row list mar-bot">
          	<div className="col-md-2">
            	<span className="visual-img">
              		<img src={props.post.better_featured_image.source_url} alt="" />
            	</span>
          	</div>
          	<div className="col-md-10 content-item">
            	<h3 className="text txt-black"
              		dangerouslySetInnerHTML={{
            			__html: props.post.title.rendered
            		}}
            	/>
          	</div>
        </div>
    </a>
)

export default PostItem;