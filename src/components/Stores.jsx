import React from "react";

const Stores = () => {
  return (
    <div className="container py-14">
      <iframe
        src="https://my.atlist.com/map/ec9020bf-c1e3-40b6-871b-8801109213d7?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="400px"
        loading="lazy"
        frameborder="0"
        scrolling="no"
        allowfullscreen
        id="atlist-embed"
      ></iframe>
    </div>
  );
};

export default Stores;
