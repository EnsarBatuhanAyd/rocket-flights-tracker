import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";
import "./LaunchesTable.css";

const LaunchTable = () => {
  const [AllMission, setAllMission] = useState("");
  const [AllTags, setAllTags] = useState("");
  const [AllDate, setAllDate] = useState("");
  const [AllCompany, setAllCompany] = useState("");
  const [AllVehicle, setAllVehicle] = useState("");
  const [AllLocation, setAllLocation] = useState("");

  const [AllMission1, setAllMission1] = useState("");
  const [AllTags1, setAllTags1] = useState("");
  const [AllDate1, setAllDate1] = useState("");
  const [AllCompany1, setAllCompany1] = useState("");
  const [AllVehicle1, setAllVehicle1] = useState("");
  const [AllLocation1, setAllLocation1] = useState("");

  const [AllMission2, setAllMission2] = useState("");
  const [AllTags2, setAllTags2] = useState("");
  const [AllDate2, setAllDate2] = useState("");
  const [AllCompany2, setAllCompany2] = useState("");
  const [AllVehicle2, setAllVehicle2] = useState("");
  const [AllLocation2, setAllLocation2] = useState("");

  const [AllMission3, setAllMission3] = useState("");
  const [AllTags3, setAllTags3] = useState("");
  const [AllDate3, setAllDate3] = useState("");
  const [AllCompany3, setAllCompany3] = useState("");
  const [AllVehicle3, setAllVehicle3] = useState("");
  const [AllLocation3, setAllLocation3] = useState("");

  const [AllMission4, setAllMission4] = useState("");
  const [AllTags4, setAllTags4] = useState("");
  const [AllDate4, setAllDate4] = useState("");
  const [AllCompany4, setAllCompany4] = useState("");
  const [AllVehicle4, setAllVehicle4] = useState("");
  const [AllLocation4, setAllLocation4] = useState("");

  const config = {
    databaseURL: "https://rocketflightdates-default-rtdb.firebaseio.com",
    projectId: "rocketflightdates",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const doc_ref = db.collection("Launches");

  const doc_ref1 = doc_ref.doc("all-launches");

  const doc_ref2 = doc_ref1.collection("data");
  console.log("Data Pulling!");
  doc_ref2.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);

    setAllMission(data[0].Mission);
    setAllDate(data[0].Date);
    setAllTags(data[0].Tags);
    setAllCompany(data[0].Company);
    setAllVehicle(data[0].Vehicle);
    setAllLocation(data[0].Location);

    setAllMission1(data[1].Mission);
    setAllDate1(data[1].Date);
    setAllTags1(data[1].Tags);
    setAllCompany1(data[1].Company);
    setAllVehicle1(data[1].Vehicle);
    setAllLocation1(data[1].Location);

    setAllMission2(data[2].Mission);
    setAllDate2(data[2].Date);
    setAllTags2(data[2].Tags);
    setAllCompany2(data[2].Company);
    setAllVehicle2(data[2].Vehicle);
    setAllLocation2(data[2].Location);

    setAllMission3(data[3].Mission);
    setAllDate3(data[3].Date);
    setAllTags3(data[3].Tags);
    setAllCompany3(data[3].Company);
    setAllVehicle3(data[3].Vehicle);
    setAllLocation3(data[3].Location);

    setAllMission4(data[4].Mission);
    setAllDate4(data[4].Date);
    setAllTags4(data[4].Tags);
    setAllCompany4(data[4].Company);
    setAllVehicle4(data[4].Vehicle);
    setAllLocation4(data[4].Location);
  });
  return (
    <div className="table-frame">
      <div className="table-title-area">
        <ul className="table-titles">
          <li>Date</li>
          <li>Mission</li>
          <li>Company</li>
          <li>Vehicle</li>
          <li>Location</li>

          <li>Tags/Modified</li>
        </ul>
      </div>
      <hr></hr>
      <div className="table-content-area">
        <ul className="table-data">
          <li>{AllDate}</li>
          <li>{AllMission}</li>
          <li>{AllCompany}</li>
          <li>{AllVehicle}</li>
          <li>{AllLocation}</li>
          <li>{AllTags}</li>
        </ul>
        <ul className="table-data">
          <li>{AllDate1}</li>
          <li>{AllMission1}</li>
          <li>{AllCompany1}</li>
          <li>{AllVehicle1}</li>
          <li>{AllLocation1}</li>
          <li>{AllTags1}</li>
        </ul>{" "}
        <ul className="table-data">
          <li>{AllDate2}</li>
          <li>{AllMission2}</li>
          <li>{AllCompany2}</li>
          <li>{AllVehicle2}</li>
          <li>{AllLocation2}</li>
          <li>{AllTags2}</li>
        </ul>{" "}
        <ul className="table-data">
          <li>{AllDate3}</li>
          <li>{AllMission3}</li>
          <li>{AllCompany3}</li>
          <li>{AllVehicle3}</li>
          <li>{AllLocation3}</li>
          <li>{AllTags3}</li>
        </ul>{" "}
        <ul className="table-data">
          <li>{AllDate4}</li>
          <li>{AllMission4}</li>
          <li>{AllCompany4}</li>
          <li>{AllVehicle4}</li>
          <li>{AllLocation4}</li>
          <li>{AllTags4}</li>
        </ul>
        
      </div>
    </div>
  );
};

export default LaunchTable;
