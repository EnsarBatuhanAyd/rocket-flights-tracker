import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";
import "./NextLaunch.css";
import sunny from "./../../Images/sunny.png";

const NextLaunch = () => {
  const [NextMission, setNextMission] = useState("");
  const [NextTime, setNextTime] = useState("");
  const [NextDate, setNextDate] = useState("");
  const [NextWeather, setNextWeather] = useState("");
  const [NextCompany, setNextCompany] = useState("");
  const [NextVehicle, setNextVehicle] = useState("");
  const [NextLocation, setNextLocation] = useState("");
  const [NextDescription, setNextDescription] = useState("");

  const config = {
    databaseURL: "https://rocketflightdates-default-rtdb.firebaseio.com",
    projectId: "rocketflightdates",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const doc_ref = db.collection("Launches");

  const doc_ref1 = doc_ref.doc("next-launches");

  const doc_ref2 = doc_ref1.collection("data");
  console.log("Data Pulling!");
  doc_ref2.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);

    setNextMission(data[0].Mission);
    setNextDate(data[0].Date);
    setNextTime(data[0].Time);
    setNextWeather(data[0].Weather);
    setNextCompany(data[0].Company);
    setNextVehicle(data[0].Vehicle);
    setNextLocation(data[0].Location);
    setNextDescription(data[0].Description);
  });

  return (
    <div className="bg-NextLaunch">
      <div className="next-title">
        <p>Next Launch</p>
      </div>
      <div className="next-content">
        <ul className="next-values">
          <li className="next-weather">
            {" "}
            <img className="next-weather-icons" src={sunny}></img>
            {NextWeather}
          </li>
          <li className="next-date">{NextDate}</li>
          <li className="next-time">{NextTime}</li>

          <li className="next-mission">{NextMission}</li>
          <li className="next-provider-vehicle">
            {NextCompany}-{NextVehicle}
          </li>
          <li className="next-location">{NextLocation}</li>
          <li className="next-description">{NextDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default NextLaunch;
