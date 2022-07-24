import "./Dashboard.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import RecentLaunch from "../../Components/RecentLaunch/RecentLaunch";
import NextLaunch from "../../Components/NextLaunch/NextLaunch";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Activity from "../../Components/Activity/Activity";
export default function Dashboard() {
  return (
    <>
      <div className="bg-page">
        <div className="bg-sidebar-area">
          <Sidebar></Sidebar>
        </div>

        <div className="bg-dashboard">
          <div className="left-dashboard">
            <div className="recent-launches">
              <RecentLaunch></RecentLaunch>
            </div>
            <div className="activity">
              <Activity></Activity>
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
      </div>
    </>
  );
}
