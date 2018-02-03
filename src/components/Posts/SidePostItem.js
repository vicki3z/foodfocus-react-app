import React, { Component } from 'react';

const SidePostItem = function(props) {
  const imgSrc = (props.post.better_featured_image != null) ? 
                    props.post.better_featured_image.source_url : props.post.acf.image
  return(
    <div className="col-md-12 col-sm-6">
      <div className="content-item">
        <a href={`/${props.postTypeSlug}/${props.post.slug}`} title={props.post.title.rendered}>
          <span className="visual-img">
            <img src={imgSrc} alt={props.post.title.rendered} />
          </span>
          <span className="text txt-black" 
            dangerouslySetInnerHTML={{
              __html: props.post.title.rendered
            }} />
        </a>
      </div>
    </div>
  )
}

export default SidePostItem;