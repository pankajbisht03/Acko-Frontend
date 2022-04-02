import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./Components/Routers/Router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const userLog = useSelector((store) => store);
  const dispatch = useDispatch();
  const callAboutpage = async () => {
    try {
      const res = await fetch("api/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      dispatch({ type: "userDetails", data });
      // console.log(data.transi);
      // console.log(Transi);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      //  history.push("/login");
    }
  };
  useEffect(() => {
    callAboutpage();
  }, []);
  return <Router />;
}

export default App;
