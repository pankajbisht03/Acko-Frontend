import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import NotFound from "../NotFound/NotFound";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/myPolicy" element={<PolicyPage/>}/>
      </Routes>
    </>
  );
}
