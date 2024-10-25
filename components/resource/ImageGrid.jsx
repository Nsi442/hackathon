// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from './youmatter.jpg'; // Replace with your image paths
import img2 from './selfcare.jpg';
import img3 from './motherkid.jpg';
const ImageGrid = () => {
  return (
    <div>
      <img src={img1} alt="Image 1" className="grid-image img1" />
      <img src={img2} alt="Image 2" className="grid-image img2" />
      <img src={img3} alt="Image 3" className="grid-image img3" />
    </div>
  );
};

export default ImageGrid;
