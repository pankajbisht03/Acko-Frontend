import Intro from "./components/Intro/Intro";
import Ratings from "./components/Ratings/Ratings";
import PartnerPolicy from "./components/PartnerPolicy/PartnerPolicy";
import Feature from "./components/feature/feature";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Ratings />
        <PartnerPolicy />
        <Feature />
        <Footer />
      </main>
    </>
  );
}
