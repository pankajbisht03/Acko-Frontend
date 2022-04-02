const initial = false;
import { useNavigate } from "react-router-dom";
const logout = async () => {
  const naviget = useNavigate();
  try {
    const res = await fetch("api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    window.alert("User Loged Out");
    naviget("/");

    if (res.status !== 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {
    console.log(err);
    naviget("/");
  }
};
export default (state = initial, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "userDetails":
      return payload;
    case "userLogout": {
      logout();
      return false;
    }
    default:
      return state;
  }
};
