import '../index.css';
import { HeroArea } from '../components/HeroArea';
import { UnderstandingPrayer } from '../components/UnderstandingPrayer';

function Home() {
  return (
    <>
    <HeroArea
      heading="Where healing and community is built"
      paragraph="Join a community dedicated to lifting one another up. Share your prayer request and experience the strength of being known and supported"
      button="Create an Account"
    />
    <UnderstandingPrayer />
    </>
  );
}

export { Home };
