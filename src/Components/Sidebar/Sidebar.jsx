import React from 'react'
import './Sidebar.css';


const Sidebar =() => {
    return (
      <div className='bg-sidebar'>
        <div className='logo-sidebar'></div>
        <div >
        <ul className='navigate-sidebar'>
          <button  className='sidebar-button'><li>Dashboard</li></button>
          <button className='sidebar-button'><li>Launches</li></button>
          <button className='sidebar-button'><li>Satellites</li></button>
          <button className='sidebar-button'><li>Stations</li></button>
          <button className='sidebar-button'><li>Vehicles</li></button>
          <button className='sidebar-button'><li>Engines</li></button>
          <button className='sidebar-button'><li>Companies</li></button>
          <button className='sidebar-button'><li>About</li></button>
        </ul>
        </div>
        <div className='year-sidebar'>
          2022
        </div>
      </div>
    );
  }
  
  export default Sidebar;