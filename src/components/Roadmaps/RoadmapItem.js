import React, {Component} from 'react';

class RoadmapItem extends Component {
  constructor(props) {
      super(props);
      
  }
  renderItem(style){
    return (
      <div>
        <div className="image" style={style}></div>
        <div className="caption">
          <h2 className="title-1-thumb" 
            dangerouslySetInnerHTML={{
                  __html: this.props.roadmap.title.rendered
              }}
          >

          </h2>
          <h2 className="title-1-thumb">{this.props.roadmap.acf.date}</h2>
        </div>
      </div>
    )
  }
  renderItemWithLink(slug,style){
    return (
      <a href={slug} title="" >
        {this.renderItem(style)}
      </a>
    )
  }
  render(){
    const roadMapStyle = {
      backgroundImage: 'url('+this.props.roadmap.acf.image+')'
    }
    const slug = '/'+this.props.mainSlug+'/'+this.props.roadmap.slug;

    let roadMapItem;
    if(this.props.roadmap.content.rendered != ""){
      roadMapItem = this.renderItemWithLink(slug,roadMapStyle);
    }else{
      roadMapItem = this.renderItem(roadMapStyle);
    }
    return (
      <article className="roadmap">
        {roadMapItem}
      </article>
    )
  }
}

export default RoadmapItem;