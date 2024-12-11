import React from "react";
import { MarqueeData } from "../data/MarqueeData";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {MarqueeData.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} className="marquee-image" />
        ))}
        {/* Duplicate images for seamless scrolling */}
        {MarqueeData.map((item, index) => (
          <img key={`duplicate-${index}`} src={item.src} alt={item.alt} className="marquee-image" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
