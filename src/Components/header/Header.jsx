import logo1 from "./logo.jpg";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo1} />
      </div>
      <div className="help">
        <p>Help</p>
      </div>
    </div>
  );
}
