import Intro from "./components/Intro/Intro";
import Ratings from "./components/Ratings/Ratings";
import PartnerPolicy from "./components/PartnerPolicy/PartnerPolicy";
export default function Home() {
  return (
    <main>
      <Intro />
      <Ratings />
      <PartnerPolicy />
    </main>
  );
}
