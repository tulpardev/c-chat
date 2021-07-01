import React from "react";
import CardBox from "../cssComponents/Card";
import "../../styles/HomePage.css";
import historical_pic from "../../utils/historical_pic.jpg";
import sport_pic from "../../utils/sport_pic.jpg";
import movie_pic from "../../utils/movie_pic.jpg";
import sofware_pic from "../../utils/sofware_pic.jpg";

function HomePage() {
  return (
    <div className="homepage">
      <CardBox
        picture={historical_pic}
        roomName="TARİH"
        path={"historical-room"}
      />
      <CardBox picture={sport_pic} roomName="SPOR" path={"sport-room"} />
      <CardBox picture={movie_pic} roomName="FİLM" path={"movie-room"} />
      <CardBox
        picture={sofware_pic}
        roomName="YAZILIM"
        path={"software-room"}
      />
    </div>
  );
}

export default HomePage;
