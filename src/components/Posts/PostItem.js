import React from 'react';

const PostItem = function(props) {
  var imgSource = "";
  if(props.post.better_featured_image == null){
    imgSource = props.post.acf.image
  }else{
    imgSource = props.post.better_featured_image.source_url
  }
  return(
  	   <a href={`/${props.slug}/${props.post.slug}`}>
          <div className="row list mar-bot">
            	<div className="col-md-2">
              	<span className="visual-img">
                		<img src={imgSource} alt="" />
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
}

export default PostItem;