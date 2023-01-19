import React from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import profile from "../images/profile-1.jpg";

function navbar() {
  return (
    <div>
      <div className="top">
        {/* <h1>Dashboard</h1> */}
        <div className="theme-toggler">
          <span>
            <MdDarkMode className="icon" />
          </span>
          <span>
            <MdLightMode className="icon" />
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              <b>
                fahad <br />
              </b>
              <span className="text-muted-admin">admin</span>
            </p>
            <div className="profile-photo">
              <img className="profile-photo " src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
