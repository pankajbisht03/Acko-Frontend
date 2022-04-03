import logo1 from "./logo.jpg";
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const naviget = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => naviget("/")}>
        <img src={logo1} />
      </div>
      <div className="help">
        <p>Help</p>
      </div>
    </div>
  );
}
