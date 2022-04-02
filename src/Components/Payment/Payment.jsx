import Header from "../header/Header";
import {
  MdOutlinePersonalInjury,
  MdOutlinePolicy,
  MdOutlineFamilyRestroom,
} from "react-icons/md";
import "./Payment.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const naviget = useNavigate();

  return (
    <>
      <Header />
      <div className="container my-3">
        <h1 className="my-2">Third Party Only</h1>
        <div className="firstDiv d-flex align-items-center p-2">
          <MdOutlinePolicy />{" "}
          <p className="nomanp m-0 mx-2">
            Death, injury or property damage to any third party <br /> arising
            from your car
          </p>
        </div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: " 700",
            color: "rgb(40, 46, 51)",
            lineFeight: "12px",
          }}
          className="my-2"
        >
          Additional Covers
        </p>
        <div>
          <div
            className="addDivFirst"
            style={{ display: "flex", width: "450px" }}
          >
            <div className="d-flex align-items-center">
              <MdOutlinePersonalInjury className="mx-2" />{" "}
              <div>
                <p className="pPrice my-0">
                  Personal Accident Cover @ <span className="green">₹399</span>
                </p>
                <p className="bPprice my-0">
                  Rs. 15 lakh coverage against accidental injury or death
                </p>
              </div>
            </div>
            <button className="btnAddFirst addBtn btn btn-outline-primary">
              Add
            </button>
          </div>
          <div></div>

          <div className="addDivSecond">
            <div className="d-flex align-items-center">
              <MdOutlineFamilyRestroom className="mx-2" />{" "}
              <div>
                <p className="pPrice my-0">
                  Personal Accident Cover for Passengers @{" "}
                  <span className="green">₹250</span>{" "}
                </p>
                <p className="bPprice my-0">
                  Protect your loved ones in case of unfortunate accidents.
                  Coverage upto <br /> INR 1 Lakh per passenger.
                </p>
              </div>
            </div>
            <button className="addBtn btn btn-outline-primary">Add</button>
          </div>
          <div></div>
          <div className="price">
            <p className="amount">₹3,221 + GST</p>
            <button
              className="buyBtn "
              onClick={() =>
                window.open("https://ackobackend.herokuapp.com/pay/paynow")
              }
            >
              Buy Now
            </button>
          </div>
          <div className="lastEmi">
            <span className="emi">EMI</span> <span>starting from ₹184</span>{" "}
            <span>
              <a style={{ textDecoration: "none" }} href="">
                View plans{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
