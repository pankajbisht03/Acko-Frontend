import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const naviget = useNavigate();
  const [first, setfirst] = useState({
    pro: false,
    reso: false,
    logM: false,
    mMenu: false,
  });
  const [userLog, setuserLog] = useState(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg policyNavbar">
        <div className="container-fluid">
          <a
            className="navbar-brand positionOfPolicyNav"
            onClick={() => naviget("/")}
          >
            <svg
              width="82"
              height="26"
              viewBox="0 0 82 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="82"
                height="26"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.375 0H81.625V26H0.375L0.375 0Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.6268 0H13.3733C6.1943 0 0.375 5.8542 0.375 13.0758C0.375 20.2974 6.04319 26.0004 13.2221 26.0004H68.4757C75.6543 26.0004 81.6251 20.2974 81.6251 13.0758C81.6251 5.8542 75.8058 0 68.6268 0Z"
                  fill="#7C47E1"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.1168 22.7872C62.7751 22.7872 58.4297 18.4157 58.4297 13.042C58.4297 7.66838 62.7751 3.29688 68.1168 3.29688C73.458 3.29688 77.8038 7.66838 77.8038 13.042C77.8038 18.4157 73.458 22.7872 68.1168 22.7872Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.1188 19.6879C64.4696 19.6879 61.5117 16.7118 61.5117 13.0412C61.5117 9.3702 64.4696 6.39453 68.1188 6.39453C71.7675 6.39453 74.7258 9.3702 74.7258 13.0412C74.7258 16.7118 71.7675 19.6879 68.1188 19.6879Z"
                  fill="#44CB86"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8705 19.6491C10.248 19.6491 7.30148 16.6845 7.30148 13.0407C7.30148 9.39657 10.248 6.43195 13.8705 6.43195C17.4925 6.43195 20.4395 9.39657 20.4395 13.0407C20.4395 16.6845 17.4925 19.6491 13.8705 19.6491ZM23.5459 13.0404C23.5459 7.67224 19.2048 3.30469 13.8687 3.30469C8.53253 3.30469 4.19141 7.67224 4.19141 13.0404C4.19141 18.4081 8.53253 22.7757 13.8687 22.7757C16.4023 22.7757 18.7106 21.7909 20.4377 20.1822V21.2124C20.4377 22.0756 21.1336 22.7757 21.992 22.7757C22.85 22.7757 23.5459 22.0756 23.5459 21.2124V13.3527C23.5459 13.3219 23.5447 13.2927 23.5432 13.265C23.5447 13.1904 23.5459 13.1154 23.5459 13.0404Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.319 22.7861C29.946 22.7861 25.5742 18.3881 25.5742 12.9829C25.5742 7.57686 29.946 3.17969 35.319 3.17969C37.7286 3.17969 40.042 4.07128 41.8323 5.69061C42.4744 6.27145 42.527 7.26571 41.95 7.9117C41.3726 8.55808 40.3839 8.6106 39.7422 8.02976C38.5262 6.93047 36.9554 6.32515 35.319 6.32515C31.6699 6.32515 28.7009 9.31148 28.7009 12.9829C28.7009 16.6539 31.6699 19.6406 35.319 19.6406C36.9565 19.6406 38.5281 19.0345 39.7441 17.9337C40.3859 17.3524 41.3746 17.4049 41.952 18.0505C42.5297 18.6961 42.4775 19.6904 41.8362 20.2716C40.0448 21.8929 37.7306 22.7861 35.319 22.7861Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.5652 19.9322L50.1789 12.8544L58.5652 5.92298C59.2262 5.37215 59.3177 4.38658 58.7697 3.72163C58.2218 3.05708 57.2417 2.96508 56.5811 3.5163L47.495 11.096V4.71984C47.495 3.85628 46.7991 3.15659 45.9407 3.15659C45.0826 3.15659 44.3867 3.85628 44.3867 4.71984V21.1354C44.3867 21.9989 45.0826 22.699 45.9407 22.699C46.7991 22.699 47.495 21.9989 47.495 21.1354V14.7592L56.5811 22.3389C56.8716 22.581 57.2229 22.699 57.5726 22.699C58.0189 22.699 58.4624 22.5063 58.7697 22.1336C59.3177 21.469 59.2262 20.4835 58.5652 19.9322Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </a>

          <div
            className="displayPolicyHamburger"
            onClick={() => setfirst({ mMenu: true })}
          >
            <span className="dispol">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 18L4 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 12L4 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 6L4 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>

          <div className="helpAround">
            <a className=" helpPolicy">Help</a>

            <svg
              className="helpPolicy"
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
          </div>
        </div>
      </nav>
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
              <img
                src="https://myaccount.ackoassets.com/static/images/header-icons/avatar.svg"
                alt="avatar"
                className="sc-hGoxap etsBcu"
              />
              <div className="sc-bdVaJa sc-bwzfXH fimnwF">
                <div className="sc-bdVaJa sc-bwzfXH sc-fjmCvl dcfRXK">
                  <div className="sc-bdVaJa sc-bwzfXH iUAJNl">
                    <p className="sc-dymIpo sc-TFwJa MIYAO"></p>
                    <p className="sc-dymIpo sc-bHwgHz gYIMCp">Phone number</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lowwerMmenu">
              <div className="lowBoxD1">
                <ul className="lowBoxLi">
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
    </>
  );
}
