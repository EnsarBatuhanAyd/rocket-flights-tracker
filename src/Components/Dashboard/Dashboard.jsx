import "./Dashboard.css";
import sat from "./../../Images/sat.png";
import antenna from "./../../Images/antenna.png";
import launchpad from "./../../Images/launchpad.png";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
// import firebase from "./../Firestore/Firestore";


export default function Dashboard() {
  const config = {
    
    databaseURL: "https://rocketflightdates-default-rtdb.firebaseio.com",
    projectId: "rocketflightdates",
   
 };
 firebase.initializeApp(config);
  const db = firebase.firestore();
  const doc_ref = db.collection("Launches");

  // const doc_ref1 = doc_ref.doc("next-launches");
  const doc_ref1 = doc_ref.doc("all-launches");
  // const doc_ref1 = doc_ref.doc("recent-launches");
  
  
  const doc_ref2 = doc_ref1.collection("data");
  console.log("Data Pulling!");
  doc_ref2.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    console.log(data);
  });



  return (
    <>
      <div className="bg-dashboard">
        <div className="left-dashboard">
          <div className="recent-launches">
            <div className="recent-title">
              <p>Recent Launches</p>
            </div>
            <div className="recent-values-area">
              <ul className="recent-values">
                <li className="recent-date">JUN 12</li>
                <li className="recent-name">TROPICS Flight 1</li>
                <li className="recent-date">JUN 12</li>
                <li className="recent-name">Nilesat 301</li>
                <li className="recent-date">JUN 12</li>
                <li className="recent-name">Shenzhou-14</li>
                <li className="recent-date">JUN 12</li>
                <li className="recent-name">NS-21</li>
              </ul>
            </div>
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
            <div className="next-title">
              <p>Next Launch</p>
            </div>
            <div className="next-content">
              <ul className="next-values">
                <li className="next-weather">sun</li>
                <li className="next-date">JUN 17</li>
                <li className="next-time">04.50 PM</li>

                <li className="next-mission">MEASAT-3D</li>
                <li className="next-provider-vehicle">
                  Arianespace - Ariane 5
                </li>
                <li className="next-location">
                  ELA-3, Guiana Space Centre French Guiana
                </li>
                <li className="next-description">
                  Sierra Nevada confirms ULA will launch first two Dream Chaser
                  cargo missions (SpaceflightNow)
                </li>
              </ul>
            </div>
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
