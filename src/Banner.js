import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <header className="banner" 
    style={{
        backgroundSize: "cover",
        backgroundImage: 'url("https://linitiative.ca/wp-content/uploads/2018/02/netflix-banner.jpg")',
        backgroundPosition: "center center",
      
      }}
    ></header>
  );
}

export default Banner;