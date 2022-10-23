import React from "react";
import "./Pill.css";

export default function Pill() {
  return (
    <div className="pill__wrapper">
      <span className="ticker">TSLA <span className="price">217.14</span></span>
    </div>
  );
}
