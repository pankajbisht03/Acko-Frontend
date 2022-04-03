import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./Components/Routers/Router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token") || "false";
    if (token != "false") {
      dispatch({ type: "userDetails", payload: true });
    }
    console.log(token);
  }, []);
  return <Router />;
}

export default App;
