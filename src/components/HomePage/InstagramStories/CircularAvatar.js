import React from "react";

import { statusCarousel } from "../../../data";
import AvatarComponent from "./AvatarComponent";

function CircularAvatar() {
  return (
    <section style={{ display: "flex" }}>
      <div style={{ display: "flex", marginLeft: "250px", marginTop: "20px" }}>
        {statusCarousel.map((item) => {
          return <AvatarComponent key={item.id} image={item} />;
        })}
      </div>
    </section>
  );
}

export default CircularAvatar;
