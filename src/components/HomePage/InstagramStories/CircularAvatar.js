import React from "react";

import { statusCircular } from "../../../data";
import AvatarComponent from "./AvatarComponent";
import { Container } from "@mui/material";

function CircularAvatar() {
  return (
    <Container >
      <div style={{ display: "flex" , marginLeft:"auto" ,marginTop: "20px" }}>
        {statusCircular.map((item) => {
          return <AvatarComponent key={item.id} image={item} />;
        })}
      </div>
    </Container>
  );
}

export default CircularAvatar;
