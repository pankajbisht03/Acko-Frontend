import Intro from "./components/Intro/Intro";
import Ratings from "./components/Ratings/Ratings";
import PartnerPolicy from "./components/PartnerPolicy/PartnerPolicy";
import Feature from "./components/feature/feature";
export default function Home() {
  return (
    <main>
      <Intro />
      <Ratings />
      <PartnerPolicy />
      <Feature />
    </main>
  );
}
