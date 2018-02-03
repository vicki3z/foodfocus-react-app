import React from 'react';

const PostItem = function(props) {
  var imgSource = "";
  if(props.post.better_featured_image == null){
    imgSource = props.post.acf.image
  }else{
    imgSource = props.post.better_featured_image.source_url
  }

  var slug = "";
  if(props.slug == undefined){
    if(props.post.type != 'post'){
      slug = props.post.type + 's';
    }else{
      const categoryId = props.post.categories[0];
      if(categoryId == 6){
        slug = 'news'
      }else if(categoryId == 7 || categoryId == 13){
        slug = 'whats-in'
      }else if(categoryId == 12){
        slug = 'ushare'
      }
    }
  }else{
    slug = props.slug
  }
  return(
  	   <a href={`/${slug}/${props.post.slug}`}>
          <div className="row list mar-bot">
            	<div className="col-md-2 img-wrapper">
              	<span className="visual-img">
                		<img src={imgSource} alt="" />
              	</span>
            	</div>
            	<div className="col-md-10 content-item">
                {props.slug == undefined &&
                  <h3 className="sub-title-bg txt-white">{slug.toUpperCase()}</h3>
                }
              	<h3 className="text txt-black"
                		dangerouslySetInnerHTML={{
              			__html: props.post.title.rendered
              		}}
              	/>
                <p className="text-mediumer-thumb txt-black">{props.post.acf.summary}</p>
            	</div>
          </div>
      </a>
  )
}

export default PostItem;