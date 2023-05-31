import React from "react";
import iphone13 from "../components/iphone13.jpg";
import iphone132 from "../components/iphone132.jpg";
import iphone133 from "../components/iphone133.jpg";

export default function Home() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="#contact">Contact Us For any query!!!</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <h3>Iphone 13-Black variant MRP-80,000</h3>
      <img src={iphone13} alt="iPhone 13" width="20%" height="auto" /><br></br>
      <h4>Iphone 13-White variant MRP-79,000</h4>
      <img src={iphone132} alt="iPhone 13.2" width="20%" height="auto" /><br></br>
      <h5>Iphone 13-Blue variant MRP-70,000</h5>
      <img src={iphone133} alt="iPhone 13.3" width="20%" height="auto" />
    </div>
  );
}
