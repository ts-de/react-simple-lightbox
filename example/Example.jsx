import React from "react";
import Lightbox from "../src/index";
import uniqueId from "lodash/uniqueId";

export default ({ images = [] }) => {
  return (
    <>
      {images.map(image => (
        <div
          style={{
            float: "left",
            maxWidth: "25%",
            padding: "0.2rem 0.5rem",
            position: "relative"
          }}
          key={uniqueId()}
        >
          <Lightbox
            style={{
              maxHeight: "5rem",
              overflow: "hidden",
              minHeight: "5rem",
              backgroundColor: "#f8f8f8",
              border: "2px solid #f8f8f8"
            }}
          >
            <img src={image} alt="" />
          </Lightbox>
        </div>
      ))}
    </>
  );
};
