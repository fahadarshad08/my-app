import React from "react";
import { SlGraph } from "react-icons/sl";
import { BiBarChart } from "react-icons/bi";
// import { HiMenu } from "react-icons/hi";
import { BsBarChartLine } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import profile from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import "./media.css";
import Table from "./table";
import "./Dashboard.css";
// import Navbar from "./navbar";

function Dashboard() {
  return (
    <div>
      {/* <Navbar tittle="dashbord" /> */}
      <div className="container ">
        <main>
          <div className="date">
            <input type="date" className="date_transparent" />
          </div>
          <div className="insights">
            <div className="sale">
              <span>
                <BsBarChartLine className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total sale </h3>
                  <h1> $5690 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="number">
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">last 24 hours</small>
            </div>
            {/* end of slae */}

            <div className="expenses">
              <span>
                <BiBarChart className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total Expenses</h3>
                  <h1> $5690 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="number">
                    <p>62%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">last 24 hours</small>
            </div>

            <div className="income">
              <span>
                <SlGraph className="icon" />
              </span>
              <div className=" middle">
                <div className="left">
                  <h3> Total Income </h3>
                  <h1> $5690 </h1>
                </div>
                <div className=" progress">
                  <svg className="circle">
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="number">
                    <p>81%</p>
                  </div>
                </div>
              </div>
              <small className="text-muted">last 24 hours</small>
            </div>
          </div>
        </main>

        <div className="right">
          <div className="top" style={{ height: "fit-content" }}>
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
          <div className="recent-update">
            <h2>recent update </h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img className="profile-photo " src={profile2} alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>fahad</b> recive is order of night lion
                  </p>
                  <small className="text-muted">2 mint ago</small>
                </div>
              </div>
            </div>
          </div>
          {/* end of top  */}
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Dashboard;
