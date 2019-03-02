import React from "react";

const MagazineItem = function(props) {
  let magazine = {
    title: null,
    link: null,
    magazine_no: null,
    image: null
  };
  if (props.magazine.title !== undefined) {
    magazine = {
      title: props.magazine.title.rendered,
      link: props.magazine.acf.link,
      image: props.magazine.acf.image,
      magazine_no: props.magazine.acf.magazine_no
    };
  }

  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      <article className="book">
        <a href={magazine.link} target="_blank">
          <img src={magazine.image} alt={magazine.title} />
        </a>
        <div className="caption">
          <h2 className="title-1-thumb">No. {magazine.magazine_no}</h2>
          <h2
            className="title-1-thumb"
            dangerouslySetInnerHTML={{
              __html: magazine.title
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default MagazineItem;
