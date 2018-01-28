import React from 'react';

const PostHighlight = function(props){
    var styleSetting = {
        backgroundImage: 'url(' + props.post.better_featured_image.source_url + ')'
    }
    return (
        <a href={`/${props.slug}/${props.post.slug}`} title={props.post.title.rendered} className="story">
            <div style={styleSetting} className="thumb"></div>
            <div className="caption">
                <div className="desc">
                    <h2 className="title-1-thumb">{props.post.title.rendered}</h2>
                    <p className="text-mediumer-thumb">{props.post.acf.summary}</p>
                </div>
            </div>
        </a>
    )
}

export default PostHighlight;