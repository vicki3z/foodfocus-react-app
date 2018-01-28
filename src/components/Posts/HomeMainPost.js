import React from 'react';

const HomeMainPost = function(props){
    var styleSetting = {
        backgroundImage: 'url(' + props.post.better_featured_image.source_url + ')'
    }
    return (
        <div className="col-sm-6 col-md-4 mar-top">
            <a href={`/${props.slug}/${props.post.slug}`} title={props.post.title.rendered} className="product thumb-default">
                <figure>
                    <div style={styleSetting} className="thumb"></div>
                </figure>
                <figcaption>
                    <h3 class="title-3-thumb txt-black" 
                        dangerouslySetInnerHTML={{
                        __html: props.post.title.rendered}} />
                </figcaption>
            </a>
        </div>
    )
}

export default HomeMainPost;