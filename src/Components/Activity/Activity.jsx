import React, { Component } from "react";
import sat from "./../../Images/sat.png";
import antenna from "./../../Images/antenna.png";
import launchpad from "./../../Images/launchpad.png";
import "./Activity.css"



export default class Activity extends Component {
  render() {
    return (
      <div className="activity-area">
        {" "}
        <div className="activity-title">
          <p>Activity</p>
        </div>
        <div className="activity-content">
          <div className="activity-left">
            <img className="activity-icons" src={sat}></img>
            <img className="activity-icons" src={antenna}></img>
            <img className="activity-icons" src={launchpad}></img>
          </div>
          <div className="activity-right">
            <ul className="activity-values">
              <li className="activity-label"><div className="point-green"></div>Active</li>
              <li className="activity-num">3,372</li>
              <li className="activity-label"><div className="point-red"></div>Inactive</li>
              <li className="activity-num">3,170</li>
              <li className="activity-num">12</li>
              <li className="activity-label">Ground Stations</li>
              <li className="activity-num">72</li>
              <li className="activity-label">Launch Pads</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
