import Dashboard from "./Components/Dashboard/Dashboard"
import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar"
export default function App() {
  return (
    
    <>
      <div className="App-header">
      <Sidebar/>
      <Dashboard />
      </div>
    </>
  )
}