import "./Launches.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Sidebar from "../../Components/Sidebar/Sidebar";
import LaunchTable from "../../Components/LaunchesTable/LaunchesTable";
export default function Dashboard() {
  return (
    <>
      <div className="bg-page-launches">
        <div className="bg-sidebar-area">
          <Sidebar></Sidebar>
        </div>

        <div className="bg-tables-area">
            <LaunchTable></LaunchTable>
        </div>
      </div>
    </>
  );
}
