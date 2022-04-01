import "./PageSeven.css";
import React from "react";
import { ReactComponent as PencilLogo } from "./pencilLogo.svg";

import { ReactComponent as CarImg } from "./car.svg";
import { ReactComponent as CarImg1 } from "./row-icons/car1.svg";
import { ReactComponent as LocImg } from "./row-icons/location.svg";
import { ReactComponent as CalImg } from "./row-icons/calender.svg";

export default function PageSeven() {
  return (
    <div>
      <div className="heading-part">
        <p className="h1">Upto 85%* Off on Comprehensive Car Insurance</p>
        <p className="small-heading">Insure your car in 2 minutes</p>
      </div>
      <div className="main-content">
        <div className="left">
          <div className="loading-bar-container">
            <div className="status-bar">
              <div className="green-status"></div>
              <div className="grey-status"></div>
            </div>
            <p className="page-number">6/10</p>
          </div>
          <div className="h2">Here’s your car</div>
          <div className="text-image">
            <div className="text-image-left">
              <p className="car-number">
                {" "}
                <span>DL 13 C 5271</span>
              </p>
              <p className="car-name">
                Honda Brio <PencilLogo />
              </p>
              <p className="car-type">1.2 E MT (1198cc) - Petrol</p>
            </div>
            <div className="text-image-right">
              <div>
                <CarImg />
              </div>
            </div>
          </div>
          <div className="heading-checkbox">
            <p>Do you have external CNG kit</p>
            <input type="checkbox" id="yes" name="yes" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="checkbox" id="no" name="no" value="no" />
            <label htmlFor="no">No</label>
          </div>
          <button className="btn-green">Continue</button>
        </div>

        <div className="right">
          <div className="box">
            <div className="row1">
              <div className="row1-left">
                <CarImg1 /> <p>Private Car</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
            <div className="row1">
              <div className="row1-left">
                <LocImg /> <p>110001</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
            <div className="row1">
              <div className="row1-left">
                <CarImg1 /> <p>DL13C5271</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
            <div className="row1">
              <div className="row1-left">
                <CalImg /> <p>Registration Year - 2013</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
            <div className="row1">
              <div className="row1-left">
                <CalImg /> <p>Registration Month - Jan</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
            <div className="row1">
              <div className="row1-left">
                <CarImg1 /> <p>Honda Brio 1.2E MT</p>
              </div>
              <div className="row1-right">
                <PencilLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
