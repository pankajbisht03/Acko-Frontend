import { FaCar, FaBiking, FaHeartbeat } from "react-icons/fa";
import { useState } from "react";
import "./intro.css";
import { useNavigate } from "react-router-dom";
useNavigate;
export default function Intro() {
  const naviget = useNavigate();
  let active =
    "d-flex align-items-center justify-content-center flex-column w-100 BlockIntro activeBlockIntro";
  const [first, setfirst] = useState({
    car: true,
    bike: false,
    personal: false,
  });
  return (
    <div className="container-fluid" id="introMblock">
      <div className="first text-center">
        <h2 className="mainhead">Insurance made easy</h2>
        <h5 className="subhead">Zero commission. Zero paperwork</h5>
      </div>
      <div className="mid d-flex align-items-center justify-content-center">
        <div className="imgOne sideImgCont w-25">
          <img
            src="https://acko-home-prod.ackoassets.com/next_assets/8c5315242f69f61b62ff005e1ea9116c4590110d/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg"
            alt=""
          />
        </div>
        <div className="centreCont">
          <div className="centre d-flex align-content-center align-items-center justify-content-around my-3">
            <div
              className={
                first.car
                  ? active
                  : "d-flex align-items-center justify-content-center flex-column w-100 BlockIntro"
              }
              onClick={() => setfirst({ car: true })}
            >
              <span className="imgSpanBlock">
                <FaCar />
              </span>
              <p>Car &amp; Taxi</p>
            </div>
            <div
              className={
                first.bike
                  ? active
                  : "d-flex align-items-center justify-content-center flex-column w-100 BlockIntro"
              }
              onClick={() => setfirst({ bike: true })}
            >
              <span className="imgSpanBlock">
                <FaBiking />
              </span>
              <p>Bike</p>
            </div>
            <div
              className={
                first.personal
                  ? active
                  : "d-flex align-items-center justify-content-center flex-column w-100 BlockIntro"
              }
              onClick={() => setfirst({ personal: true })}
            >
              <span className="imgSpanBlock">
                <FaHeartbeat />
              </span>
              <p>Health</p>
            </div>
          </div>
          <div className="carNumber d-flex align-items-center bg-white px-3 border border-secondary rounded">
            <div className="logoIn">
              {first.car ? (
                <FaCar />
              ) : first.bike ? (
                <FaBiking />
              ) : (
                <FaHeartbeat />
              )}
            </div>
            {/* <img
              src="data:image/svg+xml,%3Csvg width='28' height='16' viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.9857 5.46451L20.8275 4.49938L17.3533 1.30496C16.4411 0.462173 15.2607 0 14.0267 0H9.06355C7.61486 0 6.28689 0.720445 5.50889 1.94384L3.83216 4.54017L2.59809 4.82562C1.47133 5.0839 0.666504 6.1034 0.666504 7.28601V10.1542C0.666504 11.4728 1.64571 12.5602 2.96027 12.669L4.34189 12.7913C4.75772 14.205 6.01862 15.2381 7.53438 15.2381C9.02331 15.2381 10.2708 14.2322 10.7134 12.8593H18.0508C18.48 14.2322 19.7409 15.2381 21.2299 15.2381C22.8261 15.2381 24.1541 14.0963 24.4894 12.5874L25.7906 12.1524C26.7161 11.8534 27.3332 10.9834 27.3332 10.0183V8.44144C27.3332 7.01415 26.3674 5.79075 24.9857 5.46451ZM16.1326 2.66429L18.0374 4.43142H12.1756V1.84869H14.0267C14.8047 1.84869 15.5558 2.13415 16.1326 2.66429ZM7.02465 2.94975C7.46731 2.25649 8.23189 1.84869 9.05014 1.84869H10.3513V4.43142H6.07227L7.02465 2.94975ZM7.54779 13.403C6.70272 13.403 6.01862 12.6961 6.01862 11.8398C6.01862 10.9698 6.70272 10.2765 7.54779 10.2765C8.39286 10.2765 9.07696 10.9834 9.07696 11.8398C9.07696 12.6961 8.37945 13.403 7.54779 13.403ZM21.2299 13.403C20.3848 13.403 19.7007 12.6961 19.7007 11.8398C19.7007 10.9698 20.3848 10.2765 21.2299 10.2765C22.0749 10.2765 22.7591 10.9834 22.7591 11.8398C22.7591 12.6961 22.0749 13.403 21.2299 13.403ZM25.5089 10.0183C25.5089 10.195 25.4016 10.3445 25.2272 10.4125L24.3687 10.6979C23.8992 9.37938 22.6786 8.42785 21.2299 8.42785C19.6605 8.42785 18.3459 9.5425 17.9837 11.0242H10.7805C10.4183 9.5425 9.11721 8.42785 7.54779 8.42785C6.0052 8.42785 4.71747 9.50172 4.32847 10.9426L3.12123 10.8339C2.75906 10.8067 2.49078 10.5076 2.49078 10.1542V7.28601C2.49078 6.95977 2.7054 6.68791 3.02733 6.61994L4.51627 6.26652H20.3043L24.5967 7.25883C25.1467 7.38117 25.5357 7.87053 25.5357 8.44144V10.0183H25.5089Z' fill='%237D899B'/%3E%3C/svg%3E%0A"
              alt=""
            /> */}
            <input
              className="nonee"
              type="text"
              placeholder={
                first.car
                  ? "Enter your car number"
                  : first.bike
                  ? "Enter your Bike number"
                  : "Enter your Aadhar number"
              }
              style={{
                border: "none",
                padding: "31px 20px",
                fontSize: "0.875rem",
                width: "100%",
                minHeight: "81px",
                outline: "none",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                caretColor: "rgb(94, 39, 201)",
                textTransform: "uppercase",
                appearance: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              className="insureNow btn btn-success"
              style={{
                width: "100%",
                display: "flex",
                maxWidth: "154px",
                height: "50px",
                background: "rgb(68, 203, 134)",
                borderRadius: "10px",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0px 6px",
              }}
              onClick={() => naviget("/getpolicy")}
            >
              Insure now
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div className="orBlock" />
            <p className="my-0 mx-2">OR</p>
            <div className="orBlock" />
          </div>
          <div
            className="d-flex rounded-3 py-2 justify-content-between"
            style={{ border: "1px solid rgb(147, 100, 237)" }}
          >
            <div className="innerQuote d-flex align-items-center">
              <div className="carImg mx-3">
                <img
                  className="logoCar"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
              </div>
              <div className="text">
                <p className="m-0 textOneIN">Looking to insure your new car?</p>
                <p className="textTwoIN">
                  Save big with our zero commission insurance
                </p>
              </div>
            </div>

            <button className="btn btn-outline-secondary mx-2 btnQuote">
              Get a quote
            </button>
          </div>
          <div className="d-flex flex-column align-items-center py-2 px-3 sponsorsBlock">
            <p>Official Partner</p>
            <div className="iplTeams d-flex align-items-center">
              <img
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Fkolkata-night-riders-9820adee735cb1fc08771f0fdabe9e18.svg&w=32&q=75"
                alt=""
              />
              <div className="sponDevider" />
              <img
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Fgujarat-titans-f0a16a780e5885fe888bde01768bc73c.svg&w=64&q=75"
                alt=""
              />
              <div className="sponDevider" />
              <img
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Flucknow-super-giants-bbd449de6e20fe4263c619b85bd3380c.svg&w=96&q=75"
                alt=""
              />
              <div className="sponDevider" />
              <img
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Fdelhi-captital-98e76514f17b52294f1ac90b3a81fdc3.svg&w=48&q=75"
                alt=""
              />
              <div className="sponDevider" />
              <img
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Fmumbai-indians-fbd7d61f752c27b0cd1f60901d7f4ccc.svg&w=64&q=75"
                alt=""
              />
              <div className="sponDevider" />
              <img
                className="srh"
                src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F8c5315242f69f61b62ff005e1ea9116c4590110d%2F_next%2Fstatic%2Fimages%2Fsunrisers-hyderabad-baa8b5ac7605cd2fa307c8de9b5a36a5.svg&w=64&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="imgTwo sideImgCont w-25">
          <img
            src="https://acko-home-prod.ackoassets.com/next_assets/8c5315242f69f61b62ff005e1ea9116c4590110d/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
