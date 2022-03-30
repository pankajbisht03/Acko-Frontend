import Intro from "./components/Intro/Intro";
import Ratings from "./components/Ratings/Ratings";
import PartnerPolicy from "./components/PartnerPolicy/PartnerPolicy";
import Feature from "./components/feature/feature";
import Navbar from "./components/Navbar/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Ratings />
        <PartnerPolicy />
        <Feature />
      </main>
    </>
  );
}
