import React from "react";
import "./table.css";
// import profile2 from "../images/profile-2.jpg";
import { BsCartFill } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./media.css";

function table() {
  return (
    <div className="tabel" style={{ margin: " 1rem" }}>
      {/* recent-oder */}
      <h2>recent oder</h2>
      <div className="recent-oder">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product number</th>
              <th>payment</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>foldable mini drone</td>
              <td>68455</td>
              <td>due</td>
              <td className="warning">pending</td>
              <td className="priamry"> Details</td>
            </tr>
            <tr>
              <td>foldable mini drone</td>
              <td>68455</td>
              <td>due</td>
              <td className="warning">pending</td>
              <td className="priamry"> Details</td>
            </tr>
            <tr>
              <td>foldable mini drone</td>
              <td>68455</td>
              <td>due</td>
              <td className="warning">pending</td>
              <td className="priamry"> Details</td>
            </tr>
            <tr>
              <td>foldable mini drone</td>
              <td>68455</td>
              <td>due</td>
              <td className="warning">pending</td>
              <td className="priamry"> Details</td>
            </tr>
          </tbody>
        </table>
        <div className="sale-analytics">
          <h2>sale Analytics</h2>
          <div className="item-offline  " style={{ display: "flex" }}>
            <div className="icon">
              <span className="item-online-icon">
                <BsCartFill />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>online oder</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>

          <div className="item-offline " style={{ display: "flex" }}>
            <div className="icon">
              <span className="Offline-oder-icon">
                <HiShoppingBag />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>Offline oder</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>

          <div className="item-offline" style={{ display: "flex" }}>
            <div className="icon">
              <span className="new-customers-icon">
                <FaUserAlt />
              </span>
            </div>
            <div className="right-sale">
              <div className="info-sale" style={{ display: "grid" }}>
                <h3>new customers</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className=" success" style={{ display: "flex" }}>
                +39%
              </h5>
              <h3 style={{ display: "flex" }}>3849 </h3>
            </div>
          </div>
          <div className="item add-product">
            <div>
              <span>+</span>
              <h3>add product</h3>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Link className="link" to="/Dashboard">
        <div className="show-all ">
          <span className="text">show all</span>
        </div>
      </Link>
    </div>
  );
}

export default table;
