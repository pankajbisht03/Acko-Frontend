import Intro from "./components/Intro/Intro";
import Ratings from "./components/Ratings/Ratings";
import PartnerPolicy from "./components/PartnerPolicy/PartnerPolicy";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <main>
      <Intro />
      <Ratings />
      <PartnerPolicy />
      <Footer />
    </main>
  );
}
