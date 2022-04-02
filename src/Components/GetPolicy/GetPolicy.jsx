import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./GetPolicy.css";
export default function PageSeven() {
  const naviget = useNavigate();
  const [first, setfirst] = useState({ stage: 0 });
  useEffect(() => {
    if (first.stage == 5) {
      naviget("/Payment");
    }
  }, [first]);
  const param = useParams();
  let inputValue;
  function handleIn(e) {
    inputValue = e.target.value;
  }

  return (
    <div>
      <div className="heading-part">
        <p className="h1 d-none d-lg-block">
          Upto 85%* Off on Comprehensive Car Insurance
        </p>
        <p className="small-heading">Insure your car in 2 minutes</p>
      </div>
      <div className="row m-4">
        {first.stage == 0 && (
          <div className="col">
            <div className="loading-bar-container">
              <div className="status-bar">
                <div className="green-status" style={{ width: "10%" }} />
                <div className="grey-status" style={{ width: "80%" }} />
              </div>
              <p className="page-number">01/06</p>
            </div>
            <div className="boxForform">
              <div className="getPolicyFormTile">How do you use your car?</div>
              <div className="m-3">
                <div>
                  <button
                    id="privateCarSelected"
                    className="btn btn-outline-success"
                    onClick={() =>
                      setfirst({ ...first, type: "personal", stage: 1 })
                    }
                  >
                    <div className="d-flex">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <svg
                          width={48}
                          height={22}
                          viewBox="0 0 48 22"
                          fill="none"
                        >
                          <path
                            d="M6.13 17.1H3.36A2.36 2.36 0 011 14.74v-3.4A2.35 2.35 0 013 9l2.64-.37L8.84 4a7.06 7.06 0 015.8-3h8.21a7.08 7.08 0 014.59 1.65l4.55 3.86 10.22 2.46a2.71 2.71 0 012.08 2.66v1.79h1.35a1 1 0 011 1.23l-.8 3h-2.46"
                            stroke="#020202"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            clipRule="evenodd"
                            d="M37.06 20.97a3.87 3.87 0 100-7.74 3.87 3.87 0 000 7.74zM11.73 20.97a3.87 3.87 0 100-7.74 3.87 3.87 0 000 7.74z"
                            stroke="#020202"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M33.19 17.1h-17.6M19.02 8.63V4.12M5.61 8.63h21.86"
                            stroke="#020202"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ marginTop: "1rem" }}>Personal Use</p>
                          <div>
                            <svg
                              width={10}
                              height={10}
                              viewBox="0 0 14 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.84503 10.8062L0.0377474 4.00128L3.44018 0.596436L13.6499 10.8062L3.44018 21.0159L0.0377474 17.611L6.84503 10.8062Z"
                                fill="#343758"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    style={{ border: "none" }}
                    onClick={() =>
                      setfirst({ ...first, type: "taxi", stage: 1 })
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <svg
                          width={47}
                          height={25}
                          viewBox="0 0 47 25"
                          fill="none"
                        >
                          <g opacity="0.5">
                            <path
                              d="M6.7 20.19H3.35A2.35 2.35 0 011 17.84V14.5a2.34 2.34 0 012-2.32l2.57-.37L8.8 7.15a7 7 0 015.78-3h8.17a7.06 7.06 0 014.56 1.67l4.52 3.85 10.18 2.43a2.7 2.7 0 012.07 2.65v1.77h1.33a1 1 0 01.94 1.23l-.85 2.94h-2.33"
                              fill="#FDD940"
                            />
                            <path
                              d="M36.88 24.04a3.85 3.85 0 100-7.7 3.85 3.85 0 000 7.7zM12.91 24.04a3.85 3.85 0 100-7.7 3.85 3.85 0 000 7.7z"
                              fill="#fff"
                              stroke="#020202"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M33.03 20.19H16.76"
                              stroke="#020202"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M29.78 11.76H7.31"
                              stroke="#020202"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray="1.58"
                            />
                            <path
                              d="M6.7 20.19H3.35A2.35 2.35 0 011 17.84V14.5a2.34 2.34 0 012-2.32l2.57-.37L8.8 7.15a7 7 0 015.78-3h8.17a7.06 7.06 0 014.56 1.67l4.52 3.85 10.18 2.43a2.7 2.7 0 012.07 2.65v1.77h1.33a1 1 0 01.94 1.23l-.85 2.94h-2.33M24.1 4.14V1.83a.83.83 0 00-.83-.83H20.5a.83.83 0 00-.82.83v2.31"
                              stroke="#020202"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <p style={{ marginTop: "1rem" }}>Taxi</p>
                          <div>
                            <svg
                              width={10}
                              height={10}
                              viewBox="0 0 14 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.84503 10.8062L0.0377474 4.00128L3.44018 0.596436L13.6499 10.8062L3.44018 21.0159L0.0377474 17.611L6.84503 10.8062Z"
                                fill="#343758"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="boxForbtn">
                <div>
                  <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#car-with-hand_svg__clip0)">
                      <path
                        d="M4.4 23.7c-1 .9-1.8 2-2.2 2.5-.2.2-.2.5 0 .7 1.9 2.4 6.6 6.6 8 7.8.2.2.5.2.8 0l2.6-2.6c-3.4-2.7-6.6-5.3-9.2-8.4z"
                        fill="#A2F3CB"
                      />
                      <path
                        d="M34.6 15.8c-.3-.1-.6-.1-1 0-.7.3-3.6 4.5-6.6 5 .2.4.3 1 .3 1.5 0 .6-.2 1.1-.6 1.4-.6.6-1.5.6-1.7.6h-5.2c-.2 0-.3-.1-.3-.3 0-.2.1-.3.3-.3H25s.8 0 1.3-.4c.2-.2.4-.6.4-1 0-.7-.2-1.4-.5-1.6-.1-.1-.3-.2-.4-.2-.3-.1-.6-.2-.9-.2-3.7 0-5.1-.7-9.3-1.4-4.1-.6-8.6 5.2-8.6 5.2l6.5 6.1s1.8-1.9 2.4-1.9h9c1.3 0 5.6-4.5 7.2-6.3 1.2-1.4 2.4-4.1 2.9-5.3.2-.4 0-.8-.4-.9z"
                        fill="#FFC400"
                      />
                      <path
                        d="M5.9 23l8.1 7.7c.2.2.2.6 0 .8l-3.2 3.2c-.2.2-.5.2-.8 0-1.4-1.2-6.1-5.4-8-7.8-.2-.2-.2-.5 0-.7.5-.7 1.8-2.3 3.1-3.3.4-.1.7-.1.8.1z"
                        fill="#5A68E7"
                      />
                      <path
                        d="M5.5 26.7a.5.5 0 100-1 .5.5 0 000 1z"
                        fill="#fff"
                      />
                      <path
                        d="M27 15.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM13.7 15.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
                        fill="#5A68E7"
                      />
                      <path
                        d="M31.1 12h-.3v-.9c0-.7-.4-1.2-1.1-1.4l-5.4-1.3-2.4-2c-.7-.6-1.5-.9-2.4-.9h-4.3c-1.2 0-2.4.6-3.1 1.6l-1.6 2.4-1.3.2c-.7.1-1.1.6-1.1 1.2v1.8c0 .7.6 1.2 1.2 1.2h2.1c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3h8.7c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3h1.5c.2 0 .5-.2.5-.4l.3-.9c.1-.3-.1-.6-.5-.6zM17.2 9.5h-4.5c-.3 0-.4-.3-.3-.5l1-1.4c.5-.7 1.3-1.1 2.2-1.1h1.6v3zm5.7 0h-5.1v-3h1.8c.7 0 1.4.3 1.9.8L23.2 9c.2.1 0 .5-.3.5z"
                        fill="#6CCAFF"
                      />
                      <path
                        d="M28.7 2.4a.7.7 0 100-1.4.7.7 0 000 1.4z"
                        fill="#FFC400"
                      />
                      <path
                        d="M5.3 17.345l-2.17-.761-.761 2.17 2.17.762.761-2.17z"
                        fill="#CBF9BB"
                      />
                    </g>
                    <defs>
                      <clipPath id="car-with-hand_svg__clip0">
                        <path fill="#fff" d="M2 1h33.1v33.8H2z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="btmLogodetail">
                  We've insured more than 5 Lakh cars in India till date
                </p>
              </div>
            </div>
          </div>
        )}
        {first.stage == 1 && (
          <div className="col">
            <div className="loading-bar-container">
              <div className="status-bar">
                <div className="green-status" style={{ width: "40%" }} />
                <div className="grey-status" style={{ width: "60%" }} />
              </div>
              <p className="page-number">2/06</p>
            </div>
            <div className="boxForform">
              <div className="getPolicyFormTile">
                Enter current address pincode
              </div>
              <div className="input-group my-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pincode"
                  aria-label="Pincode"
                  aria-describedby="basic-addon1"
                  onChange={handleIn}
                />
              </div>
              <button
                className="btn-green"
                onClick={() =>
                  setfirst({ ...first, pincode: inputValue, stage: 2 })
                }
              >
                Continue
              </button>
              <div className="boxForbtn">
                <div>
                  <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#colored-location_svg__clip0)">
                      <path
                        d="M1.6 16.4h11.5s-1.9-3.5-4.8-3.6c-2.9-.1-4.1 2.4-4.1 2.4s-1.5-.5-2.6 1.2z"
                        fill="#AEE2FF"
                      />
                      <path
                        d="M0 32.5h35.4c-4.3-5-10.6-8.2-17.7-8.2S4.3 27.5 0 32.5z"
                        fill="#CBF9BB"
                      />
                      <path
                        d="M17.4 3.5c-5 0-9.1 4.1-9.1 9.1 0 3.9 5.4 11.8 7.9 15.2.6.8 1.8.8 2.4 0 2.5-3.4 7.9-11.3 7.9-15.2 0-5-4.1-9.1-9.1-9.1zm0 11.9c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.3 3.1-3.1 3.1z"
                        fill="#FF7268"
                      />
                      <path
                        d="M29.4 20.2h5.7s-.9-1.7-2.3-1.8c-1.4 0-2 1.2-2 1.2s-.9-.2-1.4.6z"
                        fill="#AEE2FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="colored-location_svg__clip0">
                        <path fill="#fff" d="M0 3.5h35.4v29H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="btmLogodetail">
                  Your pincode helps us check our service availablity in your
                  region.
                </p>
              </div>
            </div>
          </div>
        )}
        {first.stage == 2 && (
          <div className="col">
            <div className="loading-bar-container">
              <div className="status-bar">
                <div className="green-status" style={{ width: "50%" }} />
                <div className="grey-status" style={{ width: "50%" }} />
              </div>
              <p className="page-number">03/06</p>
            </div>
            <div className="boxForform">
              <div className="getPolicyFormTile">Here’s your car</div>
              <div className="text-image">
                <div className="text-image-left">
                  <p className="car-number">
                    <span>{first.carNumber}</span>
                  </p>
                  <p className="car-name">
                    {first.carName}
                    <svg
                      width={12}
                      height={13}
                      viewBox="0 0 12 13"
                      className="sc-hzDEsm hClheK"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M7.858 1.407L1.678 7.84l2.744 2.857 6.169-6.446c.25-.258.39-.61.39-.977s-.14-.718-.39-.977l-.857-.891A1.297 1.297 0 008.796 1c-.352 0-.69.146-.938.407h0z"
                          stroke="#373737"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M.262 10.772l-.258 1.383a.235.235 0 00.06.206.214.214 0 00.198.063l1.328-.263a.223.223 0 00.168-.16.235.235 0 00-.058-.229L.63 10.63a.213.213 0 00-.226-.047.227.227 0 00-.142.19z"
                          fill="#373737"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </p>
                  <p className="car-type">1.2 E MT (1198cc) - Petrol</p>
                </div>
                <div className="text-image-right">
                  <div>
                    <svg
                      width={146}
                      height={87}
                      viewBox="0 0 146 87"
                      fill="none"
                      style={{
                        width: "200px",
                        height: "auto",
                        maxHeight: "80px",
                        margin: "0px",
                      }}
                    >
                      <path
                        d="M108.128 48.678c-.643-3.78-1.002-7.956-1.002-12.34 0-4.044.303-7.88.851-11.414 3.042-.17 5.234-.643 5.234-1.19 0-.53-1.984-.965-4.818-1.154 1.927-9.958 5.895-16.78 10.469-16.78 2.645 0 5.083 2.267 7.029 6.104-3.326.566-5.933 1.474-5.82 2.003.113.529 2.91.491 6.255-.076.151-.019.283-.057.435-.075 2.286 5.404 3.741 13.133 3.836 21.731-2.948.19-5.046.643-5.046 1.172 0 .529 2.079.983 5.027 1.172-.284 15.646-5.102 28.194-11.112 29.007v12.34h-1.247v-12.34c-4.214-.567-7.823-6.917-9.713-16.044 2.079-.227 3.439-.605 3.439-1.04.019-.453-1.512-.869-3.817-1.076z"
                        fill="#F6F7FB"
                      />
                      <path
                        d="M114.175 73.281c.68 1.399 1.436 2.344 1.757 2.212.322-.152.133-1.323-.396-2.76a7.564 7.564 0 012.078-.302 7.4 7.4 0 014.762 1.739 11.803 11.803 0 014.611-5.046c.567 1.72 1.323 3.005 1.701 2.891.397-.132.246-1.7-.34-3.496 0-.019-.019-.037-.019-.075a11.192 11.192 0 014.365-.888c3.156 0 6.028 1.323 8.107 3.439-1.02 1.474-1.606 2.816-1.285 3.042.302.208 1.266-.604 2.268-1.89a12.098 12.098 0 012.437 7.03h-33.939a7.34 7.34 0 013.893-5.896z"
                        fill="#F6F7FB"
                      />
                      <path
                        d="M56.5 81.634c-29.702 0-53.78-.71-53.78-1.587S26.798 78.46 56.5 78.46c29.704 0 53.782.71 53.782 1.587s-24.078 1.587-53.781 1.587z"
                        fill="#E4EAF1"
                      />
                      <path
                        d="M52.91 80.198h-5.083c-4.12 0-7.445-4.309-7.445-9.638s3.326-9.637 7.445-9.637h5.083s4.139 9.637 0 19.275zM101.23 80.198h-4.762c-3.855 0-6.992-4.384-6.992-9.77 0-5.386 3.137-9.77 6.992-9.77h4.762s3.874 9.77 0 19.54z"
                        fill="#707F8C"
                      />
                      <path
                        d="M108.525 70.428c0 5.405-3.307 9.77-7.389 9.77-4.082 0-7.389-4.384-7.389-9.77 0-5.385 3.326-9.996 7.389-9.77 4.932.265 7.389 4.366 7.389 9.77z"
                        fill="#8A99A9"
                      />
                      <path
                        d="M24.47 80.198h-4.8c-3.893 0-7.389-4.025-7.861-9.222-.491-5.442 2.532-10.053 6.784-10.053h5.235s4.403 10.053.642 19.275z"
                        fill="#707F8C"
                      />
                      <path
                        d="M31.519 70.976c0 5.197-3.156 9.222-7.03 9.222s-7.294-4.025-7.653-9.222c-.36-5.442 2.759-10.053 7.01-10.053 4.233 0 7.673 4.61 7.673 10.053z"
                        fill="#8A99A9"
                      />
                      <path
                        d="M75.153 80.198h-4.838c-3.912 0-7.087-4.309-7.087-9.638s3.175-9.637 7.087-9.637h4.838s3.93 9.637 0 19.275z"
                        fill="#707F8C"
                      />
                      <path
                        d="M75.152 80.198c-3.913 0-7.086-4.315-7.086-9.638 0-5.322 3.173-9.637 7.086-9.637 3.914 0 7.087 4.315 7.087 9.637 0 5.323-3.173 9.638-7.087 9.638z"
                        fill="#8A99A9"
                      />
                      <path
                        d="M101.212 76.494c-2.547 0-4.611-2.758-4.611-6.16 0-3.403 2.064-6.16 4.611-6.16 2.546 0 4.611 2.757 4.611 6.16 0 3.402-2.065 6.16-4.611 6.16z"
                        fill="#D9DAE8"
                      />
                      <path
                        d="M52.91 80.198c-4.111 0-7.445-4.315-7.445-9.638 0-5.322 3.333-9.637 7.445-9.637 4.113 0 7.446 4.315 7.446 9.637 0 5.323-3.334 9.638-7.446 9.638z"
                        fill="#8A99A9"
                      />
                      <path
                        d="M2.303 72.412a75.287 75.287 0 01-.113-8.466 8.744 8.744 0 014.932-7.502c3.685-1.795 9.883-4.025 19.597-5.48l10.96-5.726a28.15 28.15 0 0112.472-3.194c6.784-.15 18.141-.32 31.256-.245a28.117 28.117 0 0114.324 3.987c2.608 1.569 5.575 3.496 8.334 5.631.264.208.567.36.869.473l5.253 1.814s1.569.718 2.117 3.912c.567 3.326.094 14.267-2.684 14.267l-1.171.057s1.171-10.224-6.784-11.168c-7.276-.85-9.808 7.785-9.865 12.774 0 .718-.566 1.285-1.285 1.285H61.546a1.283 1.283 0 01-1.285-1.323c.132-3.363-.151-11.716-6.916-12.472-7.276-.813-9.638 5.896-9.997 11.376a2.583 2.583 0 01-2.57 2.42H4.855c-1.342 0-2.457-1.06-2.552-2.42z"
                        fill="#E4EAF1"
                      />
                      <path
                        d="M45.54 57.748l-1.152 4.422c-3.42 3.023-3.969 9.524-3.969 9.524H2.247c.019.246.019.473.038.737a2.582 2.582 0 002.57 2.419h35.923a2.582 2.582 0 002.57-2.419c.378-5.48 2.722-12.188 9.997-11.376 6.765.756 7.049 9.108 6.916 12.472a1.272 1.272 0 001.285 1.323h28.989c.718 0 1.266-.567 1.285-1.285.056-4.989 2.589-13.625 9.864-12.774 7.937.925 6.784 11.168 6.784 11.168l1.172-.057c2.796 0 3.25-10.922 2.683-14.267a9.85 9.85 0 00-.34-1.342c-1.096.189-1.833.416-1.833.416-27.118-1.323-64.61 1.039-64.61 1.039z"
                        fill="#C8D0DB"
                      />
                      <path
                        d="M25.49 63.946l-2.55-2.89a3.599 3.599 0 00-2.665-1.21H8.143c-1.304 0-2.494.699-3.118 1.833L3.76 63.927l.208.53a2.786 2.786 0 002.608 1.795h15.57c.795 0 1.532-.34 2.06-.926l1.286-1.38z"
                        fill="#707F8C"
                      />
                      <path
                        d="M27.135 59.657c2.985-.548 11.98-2.098 18.009-2.041.15 0 .283.038.397.113l1.285.832a.74.74 0 01.113 1.171l-2.551 2.42a.72.72 0 01-.491.207l-14.835.34c-.151 0-.321-.057-.416-.17l-1.814-1.928c-.302-.32-.132-.869.303-.944zM5.309 57.635l-.34 2.305S2.87 63.096 2.19 63.946c0 0-.227-3.666 3.118-6.311z"
                        fill="#fff"
                      />
                      <path
                        d="M18.669 71.675H9.107a2.661 2.661 0 01-2.665-2.664h14.891c.02 1.474-1.19 2.664-2.664 2.664z"
                        fill="#707F8C"
                      />
                      <path
                        opacity="0.2"
                        d="M55.48 50.662s-1.965 1.55-4.384 2.324c-2.418.794-20.125 6.047-35.961 5.688 0 0 11.13-5.82 21.108-7.71l19.237-.302z"
                        fill="#fff"
                      />
                      <path
                        d="M60.64 51.72h40.08c.435 0 .605-.567.246-.813l-5.67-3.911a22.603 22.603 0 00-12.85-3.988h-9.882a7.302 7.302 0 00-4.214 1.342l-8.202 5.84c-.661.472-.321 1.53.491 1.53zM65.515 43.008h-22.11a27.451 27.451 0 00-5.726 2.23l-10.96 5.726H54.44c.378 0 .737-.113 1.04-.302l10.317-6.671c.454-.283.246-.983-.283-.983z"
                        fill="#8A99A9"
                      />
                      <path
                        d="M52.91 76.494c-2.546 0-4.61-2.758-4.61-6.16 0-3.403 2.064-6.16 4.61-6.16 2.547 0 4.611 2.757 4.611 6.16 0 3.402-2.064 6.16-4.61 6.16zM61.509 51.72l1.303-1.077c.53-.435 1.21-.68 1.89-.68h1.928c.472 0 .869.377.869.869v1.02c0 .473-.378.87-.87.87h-5.12V51.72zM78.422 42.479l.585 10.242h2.684L80.066 42.48h-1.644z"
                        fill="#D9DAE8"
                      />
                      <path
                        opacity="0.2"
                        d="M45.144 57.635s39.854-3.175 66.234-2.703l-1.228 1.777s-42.991-.416-65.006.925z"
                        fill="#fff"
                      />
                      <path
                        d="M111.378 54.933l-1.228 1.776s.605 2.343 1.039 2.816c.435.472 1.342.302 1.342.302s.019-3.685-1.153-4.894z"
                        fill="#E4EAF1"
                      />
                      <path
                        opacity="0.2"
                        d="M60.3 72.941l29.951-.264-29.97-1.134c.037.491.037.983.018 1.398z"
                        fill="#fff"
                      />
                      <path
                        d="M19.689 28.628a5.801 5.801 0 110-11.603 5.801 5.801 0 010 11.603zM78.667 24.602H39.474s12.718-5.574 16.006-3.628c1.493.888 1.852 2.136 1.852 2.136s5.14-7.956 13.512-8.107c8.371-.151 10.431 5.933 7.823 9.6z"
                        fill="#F6F7FB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="heading-checkbox">
                <p className="getPolicyFormsub">Do you have external CNG kit</p>
                <div className="d-flex my-3">
                  <input type="radio" id="yes" name="yes" defaultValue="yes" />
                  <p className="radioP">Yes</p>
                  <input type="radio" id="no" name="yes" defaultValue="no" />
                  <p className="radioP">No</p>
                </div>
              </div>
              <button
                className="btn-green"
                onClick={() => setfirst({ ...first, stage: 3 })}
              >
                Continue
              </button>
              <div className="boxForbtn">
                <div>
                  <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#car-green_svg__clip0)">
                      <path
                        d="M7.089 34H3.174C2.587 34 2 33.51 2 32.825V29.4h6.263v3.425c0 .588-.587 1.175-1.174 1.175zM32.03 34.293h-4.28c-.643 0-1.285-.52-1.285-1.249V29.4h6.85v3.644c-.107.625-.642 1.25-1.284 1.25z"
                        fill="#555A68"
                      />
                      <path
                        d="M33.315 30.379H2V23.58c0-3.302 2.676-5.924 6.045-5.924H27.27c3.37 0 6.045 2.622 6.045 5.924v6.798z"
                        fill="#3FB752"
                      />
                      <path
                        d="M6.991 25.095a2.25 2.25 0 100-4.501 2.25 2.25 0 000 4.501zM28.129 25.095a2.25 2.25 0 100-4.501 2.25 2.25 0 000 4.501z"
                        fill="#fff"
                      />
                      <path
                        d="M21.866 25.584h-8.71a.98.98 0 01-.979-.979.98.98 0 01.98-.978h8.709a.98.98 0 01.978.979c0 .587-.391.978-.978.978z"
                        fill="#A2EA93"
                      />
                      <path
                        d="M26.856 13.45c-.587-1.566-2.153-2.642-3.914-2.74H12.178c-1.762 0-3.328 1.076-3.915 2.74l-1.761 4.404 1.565-.196 1.664-4.208c.294-.783 1.076-1.37 1.957-1.37h11.743c.881 0 1.664.587 1.958 1.37l1.663 4.208 1.566.196-1.762-4.404zM28.618 17.755l.685-.88c.391-.49 1.076-.783 1.663-.783h.98c.488 0 .88.391.88.88 0 .49-.392.881-.88.881h-1.762l-.392.49-1.174-.588zM6.502 17.755l-.685-.88c-.392-.49-1.077-.783-1.664-.783h-.979c-.489 0-.88.391-.88.88 0 .49.391.881.88.881h1.762l.391.49 1.175-.588z"
                        fill="#3FB752"
                      />
                      <path
                        d="M33.021 27.541H2.098"
                        stroke="#CBF9BB"
                        strokeWidth="0.275"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M3.174 11.688l.196.49c0 .097.098.097.098.097h.49c.097 0 .195.196.097.196l-.391.293s-.098.098 0 .098l.196.49c0 .097-.098.195-.196.097l-.392-.293h-.098l-.391.293c-.098.098-.196 0-.196-.098l.196-.489v-.098l-.391-.293c-.098-.098 0-.196.097-.196h.49c.098 0 .098 0 .098-.098l-.098-.49c0-.195.195-.195.195 0zM27.933 2.49l.979 3.033c.097.294.39.49.684.49h3.23c.685 0 .978.88.391 1.272l-2.544 1.859c-.294.196-.391.587-.294.88l.979 3.034c.196.685-.587 1.175-1.076.783l-2.545-1.86c-.293-.195-.587-.195-.88 0l-2.545 1.86c-.587.392-1.37-.098-1.076-.783l.978-3.033c.098-.294 0-.588-.293-.783l-2.545-1.86c-.587-.391-.293-1.272.392-1.272h3.23a.736.736 0 00.684-.49l.979-3.033c.195-.783 1.076-.783 1.272-.098z"
                        fill="#FFC400"
                      />
                      <path
                        d="M34.685 20.496a.392.392 0 100-.783.392.392 0 000 .783z"
                        fill="#FFE662"
                      />
                    </g>
                    <defs>
                      <clipPath id="car-green_svg__clip0">
                        <path fill="#fff" d="M2 2h33.174v32H2z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="btmLogodetail">
                  Great Car! Now let us offer you really great insurance for it.
                </p>
              </div>
            </div>
          </div>
        )}
        {first.stage == 3 && (
          <div className="col">
            <div className="loading-bar-container">
              <div className="status-bar">
                <div className="green-status" style={{ width: "60%" }} />
                <div className="grey-status" style={{ width: "40%" }} />
              </div>
              <p className="page-number">04/06</p>
            </div>
            <div className="boxForform">
              <div className="getPolicyFormTile">
                Has your current policy expired?
              </div>
              <div
                className="btn-group my-4"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setfirst({ ...first, stage: 4 })}
                >
                  policy not expired?
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setfirst({ ...first, stage: 4 })}
                >
                  policy expired?
                </button>
              </div>
              <div className="boxForbtn">
                <div>
                  <svg width={38} height={36} viewBox="0 0 38 36" fill="none">
                    <path
                      d="M32.605 20.27L25.97 8.763a1.801 1.801 0 00-1.486-.87H11.163a1.67 1.67 0 00-1.468.87L3.043 20.27a1.72 1.72 0 000 1.722l6.634 11.509c.308.544.87.87 1.504.87h13.304c.616 0 1.196-.326 1.504-.87l6.616-11.51a1.72 1.72 0 000-1.721zm-14.772 6.635a5.767 5.767 0 01-5.764-5.764 5.767 5.767 0 015.764-5.764 5.767 5.767 0 015.764 5.764 5.767 5.767 0 01-5.764 5.764z"
                      fill="#FFBF74"
                    />
                    <path
                      d="M7.196 35.084a6.489 6.489 0 100-12.977 6.489 6.489 0 000 12.977z"
                      fill="#9364ED"
                    />
                    <path
                      d="M7.201 29.53a.535.535 0 01-.321-.108l-3.268-2.625a.51.51 0 01-.072-.715.51.51 0 01.715-.071l2.982 2.393 2.929-1.947a.518.518 0 01.714.143c.161.232.09.554-.143.715l-3.25 2.143c-.09.035-.178.071-.286.071z"
                      fill="#fff"
                    />
                    <circle cx="29.224" cy="9.16" fill="#fff" r="5.582" />
                    <path
                      d="M18.405 19.576a.3.3 0 01-.018-.42l4.708-5.22a7.65 7.65 0 01-1.698-4.463c-.27-4.293 3.066-7.938 7.312-8.157a7.758 7.758 0 018.159 7.36 7.758 7.758 0 01-7.36 8.159 7.649 7.649 0 01-4.614-1.23l-4.703 5.213a.3.3 0 01-.427.019l-1.359-1.26zm10.977-5.181a5.339 5.339 0 005.045-5.593 5.339 5.339 0 00-5.593-5.046A5.339 5.339 0 0023.79 9.35a5.339 5.339 0 005.593 5.046z"
                      fill="#F75276"
                    />
                  </svg>
                </div>
                <p className="btmLogodetail">
                  Policy Expired? Don't worry, we take less than 60 minutes to
                  inspect your car.
                </p>
              </div>
            </div>
          </div>
        )}
        {first.stage == 4 && (
          <div className="col">
            <div className="loading-bar-container">
              <div className="status-bar">
                <div className="green-status" style={{ width: "80%" }} />
                <div className="grey-status" style={{ width: "20%" }} />
              </div>
              <p className="page-number">05/06</p>
            </div>
            <div className="boxForform">
              <div className="getPolicyFormTile">
                Did you file a claim in your last policy period?
              </div>
              <div
                className="btn-group my-4"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setfirst({ ...first, stage: 5 })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setfirst({ ...first, stage: 5 })}
                >
                  No
                </button>
              </div>

              <div className="boxForbtn">
                <div>
                  <svg width={35} height={32} viewBox="0 0 35 32" fill="none">
                    <path
                      d="M25.082 31.918H2.79a2.36 2.36 0 01-2.359-2.36V2.442a2.36 2.36 0 012.36-2.36h22.291a2.36 2.36 0 012.36 2.36v27.151c0 1.303-1.057 2.325-2.36 2.325z"
                      fill="#A892F7"
                    />
                    <path
                      d="M17.034 10.049H7.122A1.112 1.112 0 016.03 8.957c0-.588.504-1.092 1.092-1.092h9.912c.588 0 1.092.504 1.092 1.092 0 .63-.504 1.092-1.092 1.092zM9.852 16.634h-2.73a1.112 1.112 0 01-1.092-1.092c0-.588.504-1.092 1.092-1.092h2.73c.588 0 1.092.504 1.092 1.092 0 .588-.504 1.092-1.092 1.092zM9.852 23.431h-2.73A1.112 1.112 0 016.03 22.34c0-.588.504-1.092 1.092-1.092h2.73c.588 0 1.092.504 1.092 1.092 0 .588-.504 1.092-1.092 1.092z"
                      fill="#9364ED"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.801 14.13s-4.723 1.247-5.317 2.138c-.624.892-.119 6.684 3.09 9.357.92.772 5.346-1.634 5.346-1.634L18.8 14.13z"
                      fill="#FFDA12"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.603 14.16s-.861-.357-1.515.415c-.653.802-.475 3.624 1.01 7.01 1.456 3.387 3.327 2.614 3.565 1.485l-3.06-8.91z"
                      fill="#0B0E34"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.098 14.961c1.129-2.079 2.822-4.96 3.505-7.663.119-.505.505-.92 1.01-1.04.505-.119 1.04.06 1.366.476.149.178.268.415.357.683.416 1.247.178 3.06 0 4.04-.03.148.03.267.148.386.12.089.268.118.386.059 1.367-.505 4.367-1.515 5.406-.564 1.783 1.604 1.308 8.881 0 10.277-1.306 1.396-8.732 2.376-10.366.802-1.545-1.515-2.584-6.06-1.812-7.456z"
                      fill="#70D4F9"
                    />
                    <path
                      d="M32.442 5.877a.775.775 0 100-1.549.775.775 0 000 1.55z"
                      fill="#F6F7FB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.126 27.41h1.866a.542.542 0 00.528-.528v-1.867a.542.542 0 00-.528-.528h-1.866a.542.542 0 00-.529.528v1.867c0 .281.212.528.529.528z"
                      fill="#F6F7FB"
                    />
                  </svg>
                </div>
                <p className="btmLogodetail">
                  You can get amazing discounts basis your claim history
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="col right d-none d-sm-block">
          <div className="box p-4">
            <div className="row1">
              <div className="row1-left">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <path
                    d="M13 4.5l-.334-1.914C12.386 1.653 11.64 1 10.613 1H5.386c-.933 0-1.773.653-2.053 1.586L3 4.5M15 11H1V6.861C1 5.827 1.746 5 2.68 5h10.64c.933 0 1.68.827 1.68 1.862V10.999zM13.891 13h-1.167c-.414 0-.724-.283-.724-.66V11h3v1.01c0 1.01-.695.99-1.109.99zM2.891 13H1.724C1.31 13 1 12.716 1 12.34V11h3v1.01c0 1.01-.695.99-1.109.99z"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.173 8h-.84c-.467 0-.747-.28-.747-.747 0-.467.374-.747.747-.747h.84c.467 0 .747.374.747.747.093.467-.28.747-.747.747zM12.76 8h-.84a.736.736 0 01-.747-.747c0-.467.373-.747.746-.747h.84c.467 0 .747.374.747.747.094.467-.28.747-.747.747zM6.6 7.16h2.8"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>Private Car</p>
              </div>
            </div>
            <div className="emtyLine"></div>
            <div className="row1">
              <div className="row1-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2.37 14.25h11.26M8 11.5S4.49 9.07 4.49 5.26a3.51 3.51 0 117 0C11.51 9.07 8 11.5 8 11.5z"
                    stroke="#373737"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8 6.41a.99.99 0 100-1.98.99.99 0 000 1.98z"
                    fill="#373737"
                  ></path>
                </svg>{" "}
                <p>110001</p>
              </div>
            </div>
            <div className="emtyLine"></div>
            <div className="row1">
              <div className="row1-left">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <path
                    d="M13 4.5l-.334-1.914C12.386 1.653 11.64 1 10.613 1H5.386c-.933 0-1.773.653-2.053 1.586L3 4.5M15 11H1V6.861C1 5.827 1.746 5 2.68 5h10.64c.933 0 1.68.827 1.68 1.862V10.999zM13.891 13h-1.167c-.414 0-.724-.283-.724-.66V11h3v1.01c0 1.01-.695.99-1.109.99zM2.891 13H1.724C1.31 13 1 12.716 1 12.34V11h3v1.01c0 1.01-.695.99-1.109.99z"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.173 8h-.84c-.467 0-.747-.28-.747-.747 0-.467.374-.747.747-.747h.84c.467 0 .747.374.747.747.093.467-.28.747-.747.747zM12.76 8h-.84a.736.736 0 01-.747-.747c0-.467.373-.747.746-.747h.84c.467 0 .747.374.747.747.094.467-.28.747-.747.747zM6.6 7.16h2.8"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>DL13C5271</p>
              </div>
            </div>
            <div className="emtyLine"></div>
            <div className="row1">
              <div className="row1-left">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.22 1.867h7.298c.596 0 1.043.447 1.043 1.043v7.298c0 .595-.447 1.042-1.043 1.042H2.221a1.018 1.018 0 01-1.043-1.042V2.91c-.074-.596.447-1.043 1.043-1.043zM7.88.75v2.16M3.71.75v2.16M1.252 4.92h9.234"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>Registration Year - 2013</p>
              </div>
            </div>
            <div className="emtyLine"></div>
            <div className="row1">
              <div className="row1-left">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.22 1.867h7.298c.596 0 1.043.447 1.043 1.043v7.298c0 .595-.447 1.042-1.043 1.042H2.221a1.018 1.018 0 01-1.043-1.042V2.91c-.074-.596.447-1.043 1.043-1.043zM7.88.75v2.16M3.71.75v2.16M1.252 4.92h9.234"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>Registration Month - Jan</p>
              </div>
            </div>
            <div className="emtyLine"></div>
            <div className="row1">
              <div className="row1-left">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <path
                    d="M13 4.5l-.334-1.914C12.386 1.653 11.64 1 10.613 1H5.386c-.933 0-1.773.653-2.053 1.586L3 4.5M15 11H1V6.861C1 5.827 1.746 5 2.68 5h10.64c.933 0 1.68.827 1.68 1.862V10.999zM13.891 13h-1.167c-.414 0-.724-.283-.724-.66V11h3v1.01c0 1.01-.695.99-1.109.99zM2.891 13H1.724C1.31 13 1 12.716 1 12.34V11h3v1.01c0 1.01-.695.99-1.109.99z"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.173 8h-.84c-.467 0-.747-.28-.747-.747 0-.467.374-.747.747-.747h.84c.467 0 .747.374.747.747.093.467-.28.747-.747.747zM12.76 8h-.84a.736.736 0 01-.747-.747c0-.467.373-.747.746-.747h.84c.467 0 .747.374.747.747.094.467-.28.747-.747.747zM6.6 7.16h2.8"
                    stroke="#373737"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>Honda Brio 1.2E MT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
