import WebWorkLogo from "../Images/WebWorkLogo.png";
import Navbar from "../Component/Navbar";
import { Button } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="HomeSection">
        <div className="WebIntro">
          <h1 style={{ fontSize: "2.8vh", fontWeight: "600"  }}>Web and Mobile App Development</h1>
          <h2 style={{ fontSize: "2.4vh", fontWeight: "lighter" }}>
            Empower your business with secure, decentralized, and immutable
            website solutions. We help start-ups, businesses and enterprise
            level organizations to design more transparent, efficient and
            automated solutions to augment their processes with our wide
            spectrum of web & mobile app development services
          </h2>
          <Button className="OrderButton" variant="contained">
            Order Now
          </Button>
        </div>
        <img className="WebWorkLogo" src={WebWorkLogo} alt="" />
      </div>
    </div>
  );
}
