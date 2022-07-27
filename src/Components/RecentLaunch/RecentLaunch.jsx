import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";
import "./RecentLaunch.css";

const RecentLaunch = () => {
  const [Mis1, setMis1] = useState("");
  const [Tim1, setTim1] = useState("");

  const [Mis2, setMis2] = useState("");
  const [Tim2, setTim2] = useState("");

  const [Mis3, setMis3] = useState("");
  const [Tim3, setTim3] = useState("");

  const [Mis4, setMis4] = useState("");
  const [Tim4, setTim4] = useState("");

  const [Mis5, setMis5] = useState("");
  const [Tim5, setTim5] = useState("");

  const config = {
    databaseURL: "https://rocketflightdates-default-rtdb.firebaseio.com",
    projectId: "rocketflightdates",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const doc_ref = db.collection("Launches");

  const doc_ref1 = doc_ref.doc("recent-launches");

  const doc_ref2 = doc_ref1.collection("data").orderBy("Date", "desc");
  console.log("Data Pulling!");
  doc_ref2.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);

    setMis1(data[0].Mission);
    setTim1(data[0].Date);

    setMis2(data[1].Mission);
    setTim2(data[1].Date);

    setMis3(data[2].Mission);
    setTim3(data[2].Date);

    setMis4(data[3].Mission);
    setTim4(data[3].Date);

    setMis5(data[4].Mission);
    setTim5(data[4].Date);
  });

  return (
    <div className="bg-RecentLaunch">
      <div className="recent-title">Recent Launches</div>
      <div className="recent-values-area">
        <ul className="recent-values">
          <li className="recent-date">{Tim1}</li>
          <li className="recent-name">{Mis1}</li>
          <li className="recent-date">{Tim2}</li>
          <li className="recent-name">{Mis2}</li>
          <li className="recent-date">{Tim3}</li>
          <li className="recent-name">{Mis3}</li>
          <li className="recent-date">{Tim4}</li>
          <li className="recent-name">{Mis4}</li>
          <li className="recent-date">{Tim5}</li>
          <li className="recent-name">{Mis5}</li>
        </ul>
      </div>
    </div>
  );
};

export default RecentLaunch;
