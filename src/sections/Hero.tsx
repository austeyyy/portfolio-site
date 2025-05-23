import Spline from "@splinetool/react-spline/next";
import CircularButton from "@/components/CircularButton";
import SetViewportHeight from "@/components/SetViewportHeight";

export const HeroSection = () => {
  return (
    <section className="hero-section touch-none select-none">
      {/*Component Fixes Problems with 100vh on Mobile*/}
      <SetViewportHeight />

      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/JK-2gyURL1-S7OCF/scene.splinecode" />
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <CircularButton
          text="EXPLORE NOW "
          href="/main"
          textColor="#15803d"
          iconColor="#15803d"
          repeatText={2}
          letterSpacing={1.01}
          size={{
            sm: 100,
            md: 140,
            lg: 160,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
