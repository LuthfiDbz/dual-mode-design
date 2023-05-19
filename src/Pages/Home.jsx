import React, { useEffect, useState } from "react";
import rosaceaeImg from "../assets/image/rosaceae.png"
import darkIcon from "../assets/icon/ic-dark.png"
import lightIcon from "../assets/icon/ic-light.png"
import moment from "moment"

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAM, setIsAM] = useState(false)
  const [currentHours, setCurrentHours] = useState("")

  const handleClickDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleLocalTime = () => {
    setIsAM(!isAM)
  }

  

  setInterval(() => {
    formatAMPM(new Date())
    const currentTime = new Date().getMinutes()
    currentTime >= 12 ? setIsAM(false) : setIsAM(true)
  }, 1000);


  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    setCurrentHours(strTime)
  }

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <div 
        className="leftSide"
        style={{
          padding: "3rem",
          height: "100vh",
          width: "50vw",
          boxSizing: "border-box",
          backgroundColor: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
          borderRight: `1px solid ${isDarkMode ? "black" : "white"}`
        }}
      >
        <h2>Dark and Light Mode</h2>
        <div 
          style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem"
          }}
        >
          <h3>Click icon to change mode</h3>
          <img src={isDarkMode ? darkIcon : lightIcon} alt="" style={{width: "2rem", cursor: "pointer"}} onClick={handleClickDarkMode}/>
        </div>
        <div 
          className="imageLeft"
          style={{
            backgroundImage: `url(${rosaceaeImg})`,
            backgroundSize: "cover",
            height: "80%",
            width: "80%",
            margin: "auto",
            border: `1px solid ${isDarkMode ? "black" : "white"}`
          }}
        ></div>
      </div>
      <div 
        className="leftSide"
        style={{
          padding: "3rem",
          height: "100vh",
          width: "50vw",
          boxSizing: "border-box",
          backgroundColor: isAM ? "black" : "white",
          color: isAM ? "white" : "black",
          borderRight: `1px solid ${isAM ? "white" : "black"}`
        }}
      >
        <h2>Day and Night Mode</h2>
        <div 
          style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem"
          }}
        >
          <h3>Current Time : {currentHours}</h3>
        </div>
        <div 
          className="imageLeft"
          style={{
            backgroundImage: `url(${rosaceaeImg})`,
            backgroundSize: "cover",
            height: "80%",
            width: "80%",
            margin: "auto",
            border: `1px solid ${isAM ? "white" : "black"}`
          }}
        ></div>
      </div>
    </div>
  )
}