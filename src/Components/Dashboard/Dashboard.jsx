import "./Dashboard.css";
import sat from "./../../Images/sat.png";
import antenna from "./../../Images/antenna.png";
import launchpad from "./../../Images/launchpad.png";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

import RecentLaunch from "../RecentLaunch/RecentLaunch";
import NextLaunch from "../NextLaunch/NextLaunch"
export default function Dashboard() {
 

  return (
    <>
      <div className="bg-dashboard">
        <div className="left-dashboard">
          <div className="recent-launches">
            <RecentLaunch></RecentLaunch>
          </div>
          <div className="activity">
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
                  <li className="activity-label">Active</li>
                  <li className="activity-num">3,372</li>
                  <li className="activity-label">Inactive</li>
                  <li className="activity-num">3,170</li>
                  <li className="activity-num">12</li>
                  <li className="activity-label">Ground Stations</li>
                  <li className="activity-num">72</li>
                  <li className="activity-label">Launch Pads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right-dashboard">
          <div className="next-launches">
            <NextLaunch></NextLaunch>
          </div>
          <div className="upcoming">
            <div className="upcoming-title">
              <p>Upcoming</p>
            </div>
            <div className="upcoming-content">
              <ul className="upcoming-values">
                <li className="upcoming-date">JUN 17</li>
                <li className="upcoming-provider">Arianespace - Ariane 5</li>
                <li className="upcoming-mission">MEASAT-3D</li>
              </ul>
              <ul className="upcoming-values">
                <li className="upcoming-date">JUN 18</li>
                <li className="upcoming-provider">Arianespace - Ariane 5</li>
                <li className="upcoming-mission">MEASAT-3D</li>
              </ul>
              <ul className="upcoming-values">
                <li className="upcoming-date">JUN 19</li>
                <li className="upcoming-provider">Arianespace - Ariane 5</li>
                <li className="upcoming-mission">MEASAT-3D</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
