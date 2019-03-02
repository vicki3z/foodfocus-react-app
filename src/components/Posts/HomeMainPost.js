import React from "react";

const HomeMainPost = function(props) {
  var imgSource = "";
  if (props.post.better_featured_image === null) {
    imgSource = props.post.acf.image;
  } else {
    imgSource = props.post.better_featured_image.source_url;
  }
  var styleSetting = {
    backgroundImage: "url(" + imgSource + ")"
  };
  var slug = "";
  if (props.slug === undefined) {
    if (props.post.type !== "post") {
      slug = props.post.type + "s";
    } else {
      const categoryId = props.post.categories[0];
      if (categoryId === 6) {
        slug = "news";
      } else if (categoryId === 7 || categoryId === 13) {
        slug = "whats-in";
      } else if (categoryId === 12) {
        slug = "ushare";
      }
    }
  } else {
    slug = props.slug;
  }
  return (
    <div className="col-sm-6 col-md-4 mar-top">
      <a
        href={`/${slug}/${props.post.slug}`}
        title={props.post.title.rendered}
        className="product thumb-default"
      >
        <figure>
          <div style={styleSetting} className="thumb" />
        </figure>
        <figcaption>
          <h3
            className="title-3-thumb txt-black"
            dangerouslySetInnerHTML={{
              __html: props.post.title.rendered
            }}
          />
          <p className="text-mediumer-thumb txt-black">
            {props.post.acf.summary}
          </p>
        </figcaption>
      </a>
    </div>
  );
};

export default HomeMainPost;
