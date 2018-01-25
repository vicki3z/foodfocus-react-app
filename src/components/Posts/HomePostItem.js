import React from 'react';

const HomePostItem = function(props){
    let imagePost;
    if(props.index == 0){
        imagePost = <img src={props.post.better_featured_image.source_url} alt={props.post.title.rendered} />
    }else{
        imagePost = null
    }
    return (
        <li>
            <a href={`/${props.slug}/${props.post.slug}`}>
                {imagePost}
                <span className="title-3-thumb">{props.post.title.rendered}</span>
            </a>
        </li>
    )
}

export default HomePostItem;