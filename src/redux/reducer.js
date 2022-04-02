const initial = false;
import { useNavigate } from "react-router-dom";

export default (state = initial, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "userDetails":
      return payload;
    case "userLogout": {
      localStorage.setItem("token", JSON.stringify(false));
      return false;
    }
    default:
      return state;
  }
};
