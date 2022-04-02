import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import NotFound from "../NotFound/NotFound";
import PolicyPage from "../PolicyPage/PolicyPage";
import Auth from "../Auth/Auth";
import GetPolicy from "../GetPolicy/GetPolicy";
import Payment from "../Payment/Payment";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/getpolicy"} element={<GetPolicy />} />
        <Route path={"/myPolicy"} element={<PolicyPage />} />
        <Route path={"/Payment"} element={<Payment />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
