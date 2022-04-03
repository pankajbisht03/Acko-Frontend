import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Navbar.css";
export default function Navbar() {
  const naviget = useNavigate();
  const [first, setfirst] = useState({
    pro: false,
    reso: false,
    logM: false,
    mMenu: false,
    logPart: false,
  });
  const userLog = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <header>
      <nav
        className="navbar navbar-expand-md"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => naviget("/")}>
            <svg
              width={63}
              height={20}
              viewBox="0 0 63 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={63}
                height={20}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H62.5V20H0L0 0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.5014 -0.00012207H9.99866C4.47639 -0.00012207 0 4.50311 0 10.0582C0 15.6133 4.36015 20.0002 9.88241 20.0002H52.3852C57.9071 20.0002 62.5 15.6133 62.5 10.0582C62.5 4.50311 58.0237 -0.00012207 52.5014 -0.00012207Z"
                  fill="#7C47E1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.1117 17.5277C48.0028 17.5277 44.6602 14.165 44.6602 10.0314C44.6602 5.89785 48.0028 2.53516 52.1117 2.53516C56.2204 2.53516 59.5633 5.89785 59.5633 10.0314C59.5633 14.165 56.2204 17.5277 52.1117 17.5277Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.1103 15.1439C49.3033 15.1439 47.028 12.8546 47.028 10.0311C47.028 7.20719 49.3033 4.91821 52.1103 4.91821C54.917 4.91821 57.1927 7.20719 57.1927 10.0311C57.1927 12.8546 54.917 15.1439 52.1103 15.1439Z"
                  fill="#44CB86"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3785 15.1144C7.59197 15.1144 5.3254 12.834 5.3254 10.0311C5.3254 7.22785 7.59197 4.94738 10.3785 4.94738C13.1647 4.94738 15.4315 7.22785 15.4315 10.0311C15.4315 12.834 13.1647 15.1144 10.3785 15.1144ZM17.8225 10.0311C17.8225 5.90177 14.4832 2.54211 10.3785 2.54211C6.27374 2.54211 2.93442 5.90177 2.93442 10.0311C2.93442 14.1601 6.27374 17.5198 10.3785 17.5198C12.3274 17.5198 14.103 16.7623 15.4315 15.5248V16.3173C15.4315 16.9813 15.9669 17.5198 16.6272 17.5198C17.2872 17.5198 17.8225 16.9813 17.8225 16.3173V10.2714C17.8225 10.2477 17.8216 10.2252 17.8204 10.2039C17.8216 10.1465 17.8225 10.0888 17.8225 10.0311Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.879 17.5272C22.7459 17.5272 19.383 14.1441 19.383 9.98624C19.383 5.82775 22.7459 2.44531 26.879 2.44531C28.7325 2.44531 30.5121 3.13115 31.8892 4.37679C32.3831 4.82359 32.4236 5.5884 31.9798 6.08532C31.5356 6.58254 30.7751 6.62294 30.2814 6.17614C29.346 5.33053 28.1377 4.8649 26.879 4.8649C24.0719 4.8649 21.7882 7.16207 21.7882 9.98624C21.7882 12.8101 24.0719 15.1076 26.879 15.1076C28.1386 15.1076 29.3475 14.6413 30.2829 13.7945C30.7766 13.3474 31.5371 13.3878 31.9813 13.8844C32.4257 14.381 32.3855 15.1459 31.8922 15.593C30.5142 16.8401 28.734 17.5272 26.879 17.5272Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.762 15.3304L38.311 9.88587L44.762 4.55403C45.2705 4.13032 45.3408 3.37219 44.9193 2.86069C44.4978 2.3495 43.7439 2.27873 43.2358 2.70275L36.2464 8.53332V3.62854C36.2464 2.96426 35.7111 2.42604 35.0508 2.42604C34.3908 2.42604 33.8555 2.96426 33.8555 3.62854V16.2559C33.8555 16.9202 34.3908 17.4587 35.0508 17.4587C35.7111 17.4587 36.2464 16.9202 36.2464 16.2559V11.3511L43.2358 17.1817C43.4592 17.3679 43.7294 17.4587 43.9985 17.4587C44.3417 17.4587 44.6829 17.3105 44.9193 17.0237C45.3408 16.5125 45.2705 15.7544 44.762 15.3304Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setfirst({ mMenu: true })}
          >
            <span className="navbar-toggler-icon">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 18L4 18"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12L4 12"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6L4 6"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li
                className="nav-item"
                onMouseEnter={() => setfirst({ pro: true })}
              >
                <a aria-current="page" href="#">
                  Products
                </a>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setfirst({ reso: true })}
                onMouseLeave={() => setfirst({ reso: false })}
              >
                <a
                  href="#"
                  id="dropdown04"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                {first.reso && (
                  <ul
                    className="dropdown-menu animated swing"
                    style={{ display: "block" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.6725 6H5.32847C5.14733 6 5.00049 6.14684 5.00049 6.32798V18.672C5.00049 18.8532 5.14733 19 5.32847 19H17.6725C17.8536 19 18.0005 18.8532 18.0005 18.672V6.32798C18.0005 6.14684 17.8536 6 17.6725 6Z"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M18.0003 13.0176H14.1638C13.9531 13.5591 13.5888 14.0273 13.1156 14.3645C12.6424 14.7018 12.0809 14.8934 11.5003 14.9158C10.9196 14.8934 10.3582 14.7018 9.88498 14.3645C9.41176 14.0273 9.04732 13.5591 8.83662 13.0176H5.00024"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                        </svg>
                        All Resources
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.8205 12.1708V20.5829H5.41675V5.25165H12.5253"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.32495 13.0613H15.712"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M8.32495 16.4933H15.712"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M8.32495 9.30566H12.4029"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M17.9292 3.63545L18.4082 5.08368C18.442 5.1994 18.5124 5.30106 18.6088 5.37338C18.7053 5.44571 18.8225 5.48491 18.943 5.48491H20.4694C20.5917 5.48231 20.7116 5.51926 20.8112 5.59018C20.9108 5.6611 20.9849 5.76215 21.0225 5.87852C21.06 5.99489 21.059 6.1202 21.0196 6.23596C20.9802 6.35171 20.9045 6.45171 20.8038 6.52103L19.5782 7.41244C19.4793 7.4841 19.4055 7.58527 19.3675 7.70132C19.3295 7.81738 19.3291 7.94248 19.3664 8.05876L19.8344 9.50726C19.873 9.62223 19.8738 9.7465 19.8367 9.86197C19.7996 9.97745 19.7266 10.078 19.6282 10.149C19.5299 10.2199 19.4114 10.2576 19.2901 10.2564C19.1688 10.2552 19.0511 10.2151 18.9542 10.1422L17.7286 9.25075C17.6291 9.18074 17.5105 9.1433 17.3888 9.1433C17.2672 9.1433 17.1484 9.18074 17.0489 9.25075L15.8233 10.1422C15.7252 10.2118 15.6079 10.2492 15.4875 10.2491C15.3672 10.2489 15.2499 10.2114 15.1519 10.1416C15.0539 10.0718 14.9801 9.97321 14.9406 9.85953C14.9012 9.74584 14.8982 9.62275 14.9319 9.50726L15.4111 8.05876C15.4484 7.94248 15.448 7.81738 15.41 7.70132C15.372 7.58527 15.2982 7.4841 15.1993 7.41244L13.9626 6.52103C13.8682 6.4474 13.7989 6.34651 13.7643 6.23188C13.7297 6.11724 13.7313 5.99458 13.7692 5.88097C13.8071 5.76736 13.8792 5.66818 13.9757 5.59725C14.0721 5.52633 14.1883 5.48715 14.3081 5.48491H15.8233C15.9449 5.48379 16.0631 5.44455 16.1611 5.37257C16.259 5.30058 16.3319 5.19937 16.3693 5.08368L16.8372 3.63545C16.8772 3.52269 16.9513 3.4251 17.0491 3.35609C17.1468 3.28707 17.2636 3.25 17.3832 3.25C17.5029 3.25 17.6195 3.28707 17.7173 3.35609C17.815 3.4251 17.8891 3.52269 17.9292 3.63545Z"
                            fill="#434F5A"
                          />
                        </svg>
                        Guides
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.2364 5H5.99976V19H18.2364V5Z"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.64893 12.1315H15.4005"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M8.64893 15.2604H15.4005"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M11.4548 7.55139H8.64893V10.3572H11.4548V7.55139Z"
                            fill="#434F5A"
                          />
                          <path
                            d="M12.478 8.70374H15.4008"
                            stroke="#434F5A"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                          />
                        </svg>
                        Article
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <div
              className="dropdown"
              id="sideIn"
              onMouseEnter={() => setfirst({ logM: true })}
              onMouseLeave={() => setfirst({ logM: false })}
            >
              <a
                href="#"
                id="dropdown05"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  width={13}
                  height={18}
                  viewBox="0 0 13 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 5 }}
                >
                  <path
                    d="M11.281 18.2345H3.59689C2.76756 18.2345 2.09692 17.5607 2.09692 16.7275V6.30727C2.09692 5.47406 2.76756 4.80029 3.59689 4.80029H11.281C12.1103 4.80029 12.781 5.47406 12.781 6.30727V16.7275C12.781 17.5607 12.1103 18.2345 11.281 18.2345Z"
                    fill="#16C2F8"
                  />
                  <path
                    d="M9.65309 16.3985H1.96896C1.13963 16.3985 0.468994 15.7248 0.468994 14.8916V4.47133C0.468994 3.63812 1.13963 2.96436 1.96896 2.96436H9.65309C10.4824 2.96436 11.1531 3.63812 11.1531 4.47133V14.8967C11.1582 15.7248 10.4824 16.3985 9.65309 16.3985Z"
                    fill="#70D4F9"
                  />
                  <path
                    d="M7.95865 13.9401L7.08324 14.1407C7.05253 14.1458 7.02181 14.1201 7.02693 14.0841L7.22658 13.2046C7.22658 13.1943 7.2317 13.1892 7.23682 13.184L8.93644 11.4765C9.04907 11.3633 9.22824 11.3633 9.33575 11.4765L9.67363 11.8159C9.78625 11.9291 9.78625 12.1091 9.67363 12.2171L7.97401 13.9247C7.97401 13.9349 7.96889 13.9401 7.95865 13.9401Z"
                    fill="#C9EEFD"
                  />
                  <path
                    d="M9.38177 12.5168L8.64331 11.7749L8.48404 11.9349L9.22249 12.6768L9.38177 12.5168Z"
                    fill="#70D4F9"
                  />
                  <path
                    d="M5.81365 9.66092C7.10857 9.66092 8.15831 8.60628 8.15831 7.30532C8.15831 6.00435 7.10857 4.94971 5.81365 4.94971C4.51873 4.94971 3.46899 6.00435 3.46899 7.30532C3.46899 8.60628 4.51873 9.66092 5.81365 9.66092Z"
                    fill="#C9EEFD"
                  />
                  <path
                    d="M5.57285 8.22582L4.65137 7.29489L4.95853 6.9863L5.57285 7.60863L6.71958 6.45654L7.02674 6.77028L5.57285 8.22582Z"
                    fill="#70D4F9"
                  />
                  <path
                    d="M6.43812 11.8417H2.53206C2.29145 11.8417 2.0918 11.6462 2.0918 11.3994C2.0918 11.1576 2.28633 10.957 2.53206 10.957H6.43812C6.67873 10.957 6.87838 11.1525 6.87838 11.3994C6.87326 11.6411 6.67873 11.8417 6.43812 11.8417Z"
                    fill="#C9EEFD"
                  />
                  <path
                    d="M5.6139 14.017H2.53206C2.29145 14.017 2.0918 13.8215 2.0918 13.5746C2.0918 13.3329 2.28633 13.1323 2.53206 13.1323H5.6139C5.85451 13.1323 6.05417 13.3278 6.05417 13.5746C6.04905 13.8215 5.85451 14.017 5.6139 14.017Z"
                    fill="#C9EEFD"
                  />
                  <path
                    d="M9.1975 5.89592C8.64461 5.89592 8.19411 5.44332 8.19411 4.88784V2.09506H8.90058V4.8827C8.90058 5.04728 9.03368 5.18101 9.1975 5.18101C9.36132 5.18101 9.49442 5.04728 9.49442 4.8827V2.03848C9.49442 1.51387 9.06952 1.08698 8.54735 1.08698C8.02517 1.08698 7.60027 1.51387 7.60027 2.03848V2.9797H6.8938V2.03848C6.8938 1.11784 7.6361 0.37207 8.55246 0.37207C9.46883 0.37207 10.2111 1.11784 10.2111 2.03848V4.88784C10.2009 5.44332 9.75039 5.89592 9.1975 5.89592Z"
                    fill="#F75276"
                  />
                </svg>
                Claim, edit, renew &amp; more
              </a>
              {first.logM && (
                <ul
                  className="dropdown-menu "
                  style={{ display: "block", top: "2.3rem" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => naviget("/login")}
                    >
                      <img src="https://myaccount.ackoassets.com/static/images/header-icons/manage-policy-v2.svg" />
                      manage policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => naviget("/login")}
                    >
                      <img src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg" />
                      Raise a claim
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => naviget("/login")}
                    >
                      <img src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg" />
                      Renew policy
                    </a>
                  </li>
                </ul>
              )}
              <a
                className="Inbtn"
                onClick={() => {
                  if (userLog) naviget("/myPolicy");
                  else naviget("/login");
                }}
              >
                {userLog ? "manage policy" : "Login"}
              </a>
            </div>
            <a style={{ margin: "0px 10px 0px 0px" }}>Help</a>
            {userLog && (
              <div onClick={() => setfirst({ logPart: !first.logPart })}>
                <svg
                  className="mx-2"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.625 30.6668C24.7252 30.6668 31.2917 24.1003 31.2917 16.0002C31.2917 7.89999 24.7252 1.3335 16.625 1.3335C8.52486 1.3335 1.95837 7.89999 1.95837 16.0002C1.95837 24.1003 8.52486 30.6668 16.625 30.6668Z"
                    fill="#F6F7FB"
                  ></path>
                  <path
                    d="M20.6461 11.7554C20.6461 13.9894 18.859 16.1116 16.6251 16.1116C14.3911 16.1116 12.604 13.9894 12.604 11.7554C12.604 9.52152 14.3911 7.73438 16.6251 7.73438C18.859 7.73438 20.6461 9.52152 20.6461 11.7554Z"
                    fill="#9364ED"
                  ></path>
                  <path
                    d="M23.2046 22.5781C23.3163 23.1365 22.9812 23.695 22.311 23.9184C21.194 24.2535 18.9601 24.7003 16.6145 24.7003C14.2689 24.7003 12.0349 24.1418 10.918 23.8067C10.3595 23.695 10.0244 23.1365 10.0244 22.4664C10.4712 19.3389 12.5173 17.6064 16.6145 17.6064C20.6094 17.6064 22.7578 19.4506 23.2046 22.5781Z"
                    fill="#9364ED"
                  ></path>
                </svg>

                {first.logPart && (
                  <ul
                    className="dropdown-menu animated swing"
                    style={{
                      display: "block",
                      marginTop: "15px",
                      right: "10px",
                    }}
                  >
                    <li onClick={() => naviget("/mypolicy")}>
                      <a className="dropdown-item" href="#">
                        <img
                          height="20px"
                          width="20px"
                          src="https://myaccount.ackoassets.com/static/images/header-icons/my-policy-v2.svg"
                          className="sc-jtRfpW bNunDk"
                        />
                        <p className="textPuserLog">My policies</p>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <img
                          height="20px"
                          width="20px"
                          src="https://myaccount.ackoassets.com/static/images/header-icons/my-profile-v2.svg"
                          className="sc-jtRfpW bNunDk"
                        />
                        <p className="textPuserLog">My profile</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        onClick={() => dispatch({ type: "userLogout" })}
                      >
                        <p className="textPuserLog" style={{ paddingLeft: 0 }}>
                          Logout
                        </p>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                            stroke="#7682A6"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.667 11.3327L14.0003 7.99935L10.667 4.66602"
                            stroke="#7682A6"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M14 8H6"
                            stroke="#7682A6"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      {first.pro && (
        <div
          className="mainMenuBox arrow-top"
          onMouseLeave={() => setfirst({ pro: false })}
        >
          <div className="subMenu-Box">
            <div className="smallBoxesUnderSub">
              <div className="aLinkUnderMenu">
                <span className="aDividerUnderSub">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9797 21.288H19.3998"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M21.8635 23.7481C23.2239 23.7481 24.3267 22.6453 24.3267 21.2849C24.3267 19.9246 23.2239 18.8218 21.8635 18.8218C20.5032 18.8218 19.4004 19.9246 19.4004 21.2849C19.4004 22.6453 20.5032 23.7481 21.8635 23.7481Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M9.51711 23.7012C10.8775 23.7012 11.9803 22.5984 11.9803 21.2381C11.9803 19.8777 10.8775 18.7749 9.51711 18.7749C8.15675 18.7749 7.05396 19.8777 7.05396 21.2381C7.05396 22.5984 8.15675 23.7012 9.51711 23.7012Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M6.62564 21.2849H5.66179C5.33065 21.2838 5.0113 21.1619 4.76349 20.9423C4.51568 20.7226 4.35641 20.4202 4.31548 20.0916L4.00948 17.1236C3.97013 16.7818 4.05737 16.4373 4.25469 16.1554C4.45202 15.8736 4.74578 15.6737 5.08044 15.5937L5.98308 15.3795C6.39787 15.2749 6.7615 15.0253 7.00811 14.6757L8.85931 12.0596C9.16027 11.6289 9.56091 11.2773 10.0271 11.0349C10.4933 10.7925 11.0112 10.6664 11.5366 10.6674H16.1264C16.7498 10.6656 17.367 10.7909 17.9404 11.0355C18.5138 11.2801 19.0314 11.6389 19.4616 12.0902L22.5214 15.3336L26.4073 16.0374C26.6702 16.0855 26.9204 16.1874 27.1421 16.3366C27.3639 16.4859 27.5525 16.6793 27.6961 16.9047C27.8397 17.1302 27.9352 17.3828 27.9767 17.6469C28.0182 17.9109 28.0048 18.1807 27.9372 18.4393L27.5701 19.9692C27.4711 20.356 27.2457 20.6986 26.9297 20.9425C26.6137 21.1865 26.2252 21.3177 25.826 21.3155H24.2043"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M22.5377 15.3504L6.42773 15.228"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </span>
                <p className="fixMarginA">Car &amp; taxi</p>
              </div>
              <a href="/car-insurance/" className="fixMarginB">
                Comprehensive Car Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a href="/third-party-car-insurance/" className="fixMarginB">
                Third Party Car Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a href="/lp/car-commercial/" className="fixMarginB">
                Commercial Car Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
            </div>
            <div className="smallBoxesUnderSub">
              <div className="aLinkUnderMenu">
                <span>
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.52476 23.9519C9.47143 23.9519 11.0495 22.3738 11.0495 20.4271C11.0495 18.4804 9.47143 16.9023 7.52476 16.9023C5.57809 16.9023 4 18.4804 4 20.4271C4 22.3738 5.57809 23.9519 7.52476 23.9519Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M24.4752 23.9519C26.4219 23.9519 28 22.3738 28 20.4271C28 18.4804 26.4219 16.9023 24.4752 16.9023C22.5285 16.9023 20.9504 18.4804 20.9504 20.4271C20.9504 22.3738 22.5285 23.9519 24.4752 23.9519Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M7.17969 13.0514C9.58378 13.0182 11.9155 13.8734 13.7281 15.453C16.0155 13.9087 18.6651 12.9858 21.4169 12.7749"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M16.25 9.33514H18.0815C18.4716 9.32737 18.8563 9.42627 19.1943 9.62114C19.5323 9.81602 19.8107 10.0994 19.9994 10.4409L23.5414 16.9203"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M11.1016 21.1703H14.3844C14.8878 21.1799 15.3839 21.0492 15.8172 20.7929C16.2505 20.5365 16.6039 20.1646 16.8379 19.7189C17.4022 18.5844 18.1884 17.5747 19.15 16.7497C20.1116 15.9246 21.229 15.3009 22.4361 14.9155"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M24.4753 11.0117V13.9663"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </span>
                <p className="fixMarginA">Bike</p>
              </div>
              <a href="/two-wheeler-insurance/" className="fixMarginB">
                Comprehensive Bike Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a href="/third-party-bike-insurance/" className="fixMarginB">
                Third Party Bike Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
            </div>
            <div className="smallBoxesUnderSub">
              <div className="aLinkUnderMenu">
                <span>
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3448 6.75253C20.3693 6.58182 19.368 6.66826 18.4335 7.00376C17.4991 7.33927 16.6619 7.91296 15.9997 8.67166C15.3374 7.91296 14.5003 7.33927 13.5658 7.00376C12.6314 6.66826 11.63 6.58182 10.6546 6.75253C9.09718 6.97548 7.68099 7.80395 6.6954 9.06859C5.70981 10.3332 5.2292 11.9386 5.3518 13.5568C5.3518 21.1242 15.1335 25.7694 15.556 25.9656L15.9997 26.1837L16.4433 25.9656C16.8447 25.7694 26.6475 21.1242 26.6475 13.5568C26.7701 11.9386 26.2896 10.3332 25.304 9.06859C24.3184 7.80395 22.9022 6.97548 21.3448 6.75253Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M11.9998 14.668L15.9998 18.668L24.9997 8.64978"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </span>
                <p className="fixMarginA">Health</p>
              </div>
              <a href="/health-insurance/" className="fixMarginB">
                Health Insurance
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a
                href="/arogya-sanjeevani-health-insurance/"
                className="fixMarginB"
              >
                Arogya Sanjeevani
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a href="/group-health-insurance/" className="fixMarginB">
                Group Medical Cover
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
            </div>
            <div className="smallBoxesUnderSub">
              <div className="aLinkUnderMenu">
                <span>
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.96 6.34847L25.5725 16.9609L21.3427 21.1908C19.9273 22.6061 18.0077 23.4013 16.0061 23.4013C14.0045 23.4013 12.0849 22.6061 10.6696 21.1908V21.1908C9.25425 19.7755 8.45911 17.8558 8.45911 15.8543C8.45911 13.8527 9.25423 11.933 10.6696 10.5177L14.8994 6.28784L14.96 6.34847Z"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M16.9541 8.82951L20.4489 5.33472"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M23.1716 15.0483L26.6664 11.5535"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M10.6663 21.3347L6.66626 25.3347"
                      stroke="#434F5A"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M13.1534 16.8339L15.2304 16.3639L14.9727 20.3208L18.5203 15.5604L16.3978 15.9242L16.7465 12.0279L13.1534 16.8339Z"
                      fill="#434F5A"
                    />
                  </svg>
                </span>
                <p className="fixMarginA">Electronics</p>
              </div>
              <a
                href="/help/electronics/before-purchasing-a-plan/"
                className="fixMarginB"
              >
                Mobile Protection
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
              <a
                href="/help/electronics/before-purchasing-a-plan?tab=appliances"
                className="fixMarginB"
              >
                Appliance Protection
                <span>
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.49355 5.0018 4.11855 3.83121-4.11855 3.83119"
                      stroke="#7c47e1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                    />
                  </svg>{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
      {first.mMenu && (
        <div className="mMenuMainBox">
          <div className="mMenuSubBox">
            <div className="upperMmenu">
              <div style={{ textAlign: "right" }}>
                <img
                  src="https://myaccount.ackoassets.com/static/images/header-icons/cancel-grey-v2.svg"
                  alt="cancel"
                  onClick={() => setfirst({ mMenu: false })}
                />
              </div>
              <p className="mManuManageP">Manage your policy</p>
              <button
                className="loginBtnMmenu"
                onClick={() => {
                  if (userLog) naviget("/myPolicy");
                  else naviget("/login");
                }}
              >
                {userLog ? "manage policy" : "Login"}
              </button>
            </div>
            <div className="lowwerMmenu">
              <div className="lowBoxD1">
                <ul className="lowBoxLi" style={{ marginLeft: "20px" }}>
                  <li>
                    <a href="#">
                      <img src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg" />
                      <p
                        fontSize="16px"
                        fontWeight={500}
                        style={{ margin: "auto" }}
                        color="#434F5A"
                      >
                        Raise a claim
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg"
                        className="sc-lhVmIH fxpfA"
                      />
                      <p
                        fontSize="16px"
                        fontWeight={500}
                        style={{ margin: "auto" }}
                        color="#434F5A"
                      >
                        Renew policy
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://myaccount.ackoassets.com/static/images/header-icons/help-icon-v2.svg" />
                      <p
                        fontSize="16px"
                        fontWeight={500}
                        style={{ margin: "auto" }}
                        color="#434F5A"
                      >
                        Help
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lowBoxD2" style={{ display: "flex" }}>
                <div className="partnerClaim w-100">
                  <p>Have a partner issued policy?</p>
                  <button className="btn btn-outline-secondary">Claim</button>
                </div>
                <img
                  alt="partners"
                  height="74px"
                  width="76px"
                  src="https://myaccount.ackoassets.com/static/images/header-icons/partner-group-logo.svg"
                />
              </div>
              <div className="lowBoxD3">
                <p
                  color="#8A99A9"
                  fontWeight={600}
                  style={{
                    margin: "0px 0px 10px",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "25px",
                    color: "rgb(138, 153, 169)",
                  }}
                >
                  Products
                </p>
                <div className="SubListAction">
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9797 21.288H19.3998"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M21.8635 23.7481C23.2239 23.7481 24.3267 22.6453 24.3267 21.2849C24.3267 19.9246 23.2239 18.8218 21.8635 18.8218C20.5032 18.8218 19.4004 19.9246 19.4004 21.2849C19.4004 22.6453 20.5032 23.7481 21.8635 23.7481Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M9.51711 23.7012C10.8775 23.7012 11.9803 22.5984 11.9803 21.2381C11.9803 19.8777 10.8775 18.7749 9.51711 18.7749C8.15675 18.7749 7.05396 19.8777 7.05396 21.2381C7.05396 22.5984 8.15675 23.7012 9.51711 23.7012Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M6.62564 21.2849H5.66179C5.33065 21.2838 5.0113 21.1619 4.76349 20.9423C4.51568 20.7226 4.35641 20.4202 4.31548 20.0916L4.00948 17.1236C3.97013 16.7818 4.05737 16.4373 4.25469 16.1554C4.45202 15.8736 4.74578 15.6737 5.08044 15.5937L5.98308 15.3795C6.39787 15.2749 6.7615 15.0253 7.00811 14.6757L8.85931 12.0596C9.16027 11.6289 9.56091 11.2773 10.0271 11.0349C10.4933 10.7925 11.0112 10.6664 11.5366 10.6674H16.1264C16.7498 10.6656 17.367 10.7909 17.9404 11.0355C18.5138 11.2801 19.0314 11.6389 19.4616 12.0902L22.5214 15.3336L26.4073 16.0374C26.6702 16.0855 26.9204 16.1874 27.1421 16.3366C27.3639 16.4859 27.5525 16.6793 27.6961 16.9047C27.8397 17.1302 27.9352 17.3828 27.9767 17.6469C28.0182 17.9109 28.0048 18.1807 27.9372 18.4393L27.5701 19.9692C27.4711 20.356 27.2457 20.6986 26.9297 20.9425C26.6137 21.1865 26.2252 21.3177 25.826 21.3155H24.2043"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M22.5377 15.3504L6.42773 15.228"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </span>
                    <p className="fixMarginA">Car &amp; taxi</p>
                  </div>
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.52476 23.9519C9.47143 23.9519 11.0495 22.3738 11.0495 20.4271C11.0495 18.4804 9.47143 16.9023 7.52476 16.9023C5.57809 16.9023 4 18.4804 4 20.4271C4 22.3738 5.57809 23.9519 7.52476 23.9519Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M24.4752 23.9519C26.4219 23.9519 28 22.3738 28 20.4271C28 18.4804 26.4219 16.9023 24.4752 16.9023C22.5285 16.9023 20.9504 18.4804 20.9504 20.4271C20.9504 22.3738 22.5285 23.9519 24.4752 23.9519Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M7.17969 13.0514C9.58378 13.0182 11.9155 13.8734 13.7281 15.453C16.0155 13.9087 18.6651 12.9858 21.4169 12.7749"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M16.25 9.33514H18.0815C18.4716 9.32737 18.8563 9.42627 19.1943 9.62114C19.5323 9.81602 19.8107 10.0994 19.9994 10.4409L23.5414 16.9203"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M11.1016 21.1703H14.3844C14.8878 21.1799 15.3839 21.0492 15.8172 20.7929C16.2505 20.5365 16.6039 20.1646 16.8379 19.7189C17.4022 18.5844 18.1884 17.5747 19.15 16.7497C20.1116 15.9246 21.229 15.3009 22.4361 14.9155"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M24.4753 11.0117V13.9663"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </span>
                    <p className="fixMarginA">Bike</p>
                  </div>
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3448 6.75253C20.3693 6.58182 19.368 6.66826 18.4335 7.00376C17.4991 7.33927 16.6619 7.91296 15.9997 8.67166C15.3374 7.91296 14.5003 7.33927 13.5658 7.00376C12.6314 6.66826 11.63 6.58182 10.6546 6.75253C9.09718 6.97548 7.68099 7.80395 6.6954 9.06859C5.70981 10.3332 5.2292 11.9386 5.3518 13.5568C5.3518 21.1242 15.1335 25.7694 15.556 25.9656L15.9997 26.1837L16.4433 25.9656C16.8447 25.7694 26.6475 21.1242 26.6475 13.5568C26.7701 11.9386 26.2896 10.3332 25.304 9.06859C24.3184 7.80395 22.9022 6.97548 21.3448 6.75253Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M11.9998 14.668L15.9998 18.668L24.9997 8.64978"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </span>
                    <p className="fixMarginA">Health</p>
                  </div>
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.96 6.34847L25.5725 16.9609L21.3427 21.1908C19.9273 22.6061 18.0077 23.4013 16.0061 23.4013C14.0045 23.4013 12.0849 22.6061 10.6696 21.1908V21.1908C9.25425 19.7755 8.45911 17.8558 8.45911 15.8543C8.45911 13.8527 9.25423 11.933 10.6696 10.5177L14.8994 6.28784L14.96 6.34847Z"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M16.9541 8.82951L20.4489 5.33472"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M23.1716 15.0483L26.6664 11.5535"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M10.6663 21.3347L6.66626 25.3347"
                          stroke="#434F5A"
                          strokeWidth="1.5"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M13.1534 16.8339L15.2304 16.3639L14.9727 20.3208L18.5203 15.5604L16.3978 15.9242L16.7465 12.0279L13.1534 16.8339Z"
                          fill="#434F5A"
                        />
                      </svg>
                    </span>
                    <p className="fixMarginA">Electronics</p>
                  </div>
                </div>
              </div>
              <div className="lowBoxD3">
                <p
                  color="#8A99A9"
                  fontWeight={600}
                  style={{
                    margin: "0px 0px 10px",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "25px",
                    color: "rgb(138, 153, 169)",
                  }}
                >
                  Know your Insurance
                </p>
                <div className="SubListAction">
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/all-resources-v2.svg"
                        alt="resource"
                      />
                    </span>
                    <p className="fixMarginA">All Resources</p>
                  </div>
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/articles-v2.svg"
                        alt="resource"
                      />
                    </span>
                    <p className="fixMarginA">Articles</p>
                  </div>
                  <div className="aLinkUnderMenu">
                    <span className="aDividerUnderSub">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/guides-v2.svg"
                        alt="resource"
                        className="sc-eitiEO gcxQAK"
                      />
                    </span>
                    <p className="fixMarginA">Guides</p>
                  </div>
                </div>
              </div>
              <div className="lowBoxD4">
                <p radius="6px" className="sc-iwsKbI sc-FQuPU iPJkKc">
                  Trade logo displayed above belongs to ACKO Technology &amp;
                  Services Pvt Ltd and used by ACKO General insurance Limited
                  under License.
                  <br />
                  <br />
                  For more details on risk factors, terms, conditions and
                  exclusions, please read the policy wordings carefully before
                  concluding a sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
