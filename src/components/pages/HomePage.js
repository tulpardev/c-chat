import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import CardBox from "../cssComponents/Card";
import "../../styles/HomePage.css";
import historical_pic from "../../utils/historical_pic.jpg";
import sport_pic from "../../utils/sport_pic.jpg";
import movie_pic from "../../utils/movie_pic.jpg";
import sofware_pic from "../../utils/sofware_pic.jpg"
import ChatPage from "./ChatPage";
function HomePage() {
  const { currentuser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Çıkış yapılamadı");
    }
  }
  return (
    <div className="homepage">
        <CardBox picture={historical_pic} roomName="TARİH" path={"historical-room"} />
        <CardBox picture={sport_pic} roomName="SPOR" path={"sport-room"}/>
        <CardBox picture={movie_pic} roomName="FİLM" path={"movie-room"} />
        <CardBox picture={sofware_pic} roomName="YAZILIM" path={"software-room"} />
    </div>
  );
}

export default HomePage;
