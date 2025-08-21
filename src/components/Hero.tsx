import { Button } from "@/components/ui/button";
import { InstagramIcon, Play, Youtube } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import Logo from "@/assets/HelenaBranca.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroKitchen})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Helena <span className="text-golden-yellow">Receitas</span>
          </h1> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {/* Helena <span className="text-golden-yellow">Receitas</span> */}
            <img src={Logo} alt="" />
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Aqui você só encontra receitas fáceis, gostosas e muito bem explicadas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a 
                href="https://www.instagram.com/helenaswistakoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <InstagramIcon className="w-6 h-6" />
                Instagram
              </a>
            </Button>
            
            <Button 
              variant="youtube" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a 
                href="https://www.youtube.com/@HelenaReceitas?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Youtube className="w-6 h-6" />
                Inscreva-se no Youtube
              </a>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-gray-300">
            <p>✨ Receitas toda terça e sexta às 18h
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;