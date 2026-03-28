import React, { useEffect, useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import "./Darkmode.css"
function Darkmode() {
  const [mode, setMode] = useState("darkmode");

  function toggle() {
    setMode(prev => prev === "darkmode" ? "lightmode" : "darkmode");
  }

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return <button className="darkmodebtn" onClick={()=>{
    toggle()
  console.log(mode);
  }}>{mode==="darkmode"?<IoSunnyOutline />:<LuMoon />}</button>;
}

export default Darkmode;