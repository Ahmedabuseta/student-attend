import { Vortex } from "@/components/ui/vortex";
import HeroSection from "./components/hero-section";
import { InfiniteMovingCards_1 } from "./components/moving-cards";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      <HeroSection />
      
      </Vortex>
      <InfiniteMovingCards_1 />
      <Footer/>
    </div>
  );
};
export default HomePage;
