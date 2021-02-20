import React from "react";

const Advertisement = ({
  link,
  media
}) => (
  <div className="col-lg-4 col-sm-12" style={{ textAlign: "center", marginBottom: "2.5em" }}>
    <a href={link} target="__blank">
      <center>
        <h4 style={{color: "black"}}>-Advertisement- </h4>
      </center>
      <br />
      <img
        src={media.src}
        width={media.width}
        height={media.height}
      />
    </a>
  </div>
);

export default Advertisement;
