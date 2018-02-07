import React from 'react';

const HomePostItem = function(props){
    let imagePost;
    if(props.index == 0){
        if(props.post.better_featured_image != null){
            imagePost = <img src={props.post.better_featured_image.source_url} alt={props.post.title.rendered} />
        }else{
            imagePost = <img src={props.post.acf.image} alt={props.post.title.rendered} />
        }
        
    }else{
        imagePost = null
    }

    let summary;
    if(props.post.acf.summary != "" && props.slug != "news"){
        summary = props.post.acf.summary
    }else{
        summary = props.post.title.rendered
    }
    return (
        <li>
            <a href={`/${props.slug}/${props.post.slug}`}>
                {imagePost}
                <span className="title-3-thumb" 
                    dangerouslySetInnerHTML={{
                        __html: summary}} />
            </a>
        </li>
    )
}

export default HomePostItem;