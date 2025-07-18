import React from "react";

export const Image = ({ title, largeImage, smallImage, style}) => {
  return (
    <div className="portfolio-item" style={style}>
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} 
            style={{
          width: "100%",        // fill container width
          height: "350px",      // set fixed height
          objectFit: "cover",   // crop & center nicely
          borderRadius: "10px",
          // display: "block"
            }}
          />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
