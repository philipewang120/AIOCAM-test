import HeroCarousel from "../HeroCarousel";
import MarketingSection from "../MarketingSection";
import Featurette from "../Featurette";
import { Container, Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <Container sx={{ mt: 5 }}>
        <MarketingSection />

        <Divider sx={{ my: 5 }} />

        <Featurette
          title="First featurette heading."
          subtitle="It’ll blow your mind."
          text="Some great placeholder content for the first featurette here."
          image="src/assets/images/feature4.jpg"
        />

        <Divider sx={{ my: 5 }} />

        <Featurette
          reverse
          title="Oh yeah, it’s that good."
          subtitle="See for yourself."
          text="More placeholder content here."
          image="src/assets/images/feature2.jpg"
        />

        <Divider sx={{ my: 5 }} />

        <Featurette
          title="And lastly, this one."
          subtitle="Checkmate."
          text="Your real content goes here."
          image="src/assets/images/feature3.jpg"
        />
      </Container>
    </>
  );
}