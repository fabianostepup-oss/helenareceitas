import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoHighlights from "@/components/VideoHighlights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <VideoHighlights />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
