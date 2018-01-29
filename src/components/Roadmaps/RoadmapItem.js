import React from 'react';

const RoadmapItem = function(props) {
  const roadMapStyle = {
    backgroundImage: 'url('+props.roadmap.acf.image+')'
  }
  const slug = '/'+props.mainSlug+'/'+props.roadmap.slug;
  return (
    <article className="roadmap">
      <a href={slug} title="" >
        <div className="image" style={roadMapStyle}></div>
        <div className="caption">
          <h2 className="title-1-thumb" 
            dangerouslySetInnerHTML={{
                  __html: props.roadmap.title.rendered
              }}
          >

          </h2>
          <h2 className="title-1-thumb">{props.roadmap.acf.date}</h2>
        </div>
      </a>
    </article>
  )
}

export default RoadmapItem;