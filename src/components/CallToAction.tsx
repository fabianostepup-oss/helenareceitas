import { Button } from "@/components/ui/button";
import { Bell, Youtube, FacebookIcon, InstagramIcon, Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-warm-orange via-golden-yellow to-warm-orange">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Não Perca Nenhuma Receita!
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Inscreva-se no canal e ative o sininho para receber todas as novidades. 
            Vamos cozinhar juntos e criar momentos especiais na sua cozinha!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-[#dd5a1a] hover:bg-[#f7aa52] text-xl px-10 py-8 h-auto shadow-2xl"
              asChild
            >
              <a 
                href="https://www.youtube.com/@HelenaReceitas?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Youtube className="w-8 h-8" />
                Inscrever-se no Canal
              </a>
            </Button>
            
            <Button 
              variant="default" 
              size="lg" 
              className=" bg-[#b4b243] hover:bg-[#b4b243] text-xl px-10 py-8 h-auto shadow-2xl"
              asChild
            >
              <a 
                href="https://www.youtube.com/@HelenaReceitas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Bell className="w-8 h-8" />
                Ativar Notificações
              </a>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">600+</div>
              <div className="text-white/80">Receitas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">362K+</div>
              <div className="text-white/80">Inscritos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25M+</div>
              <div className="text-white/80">Visualizações</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5★</div>
              <div className="text-white/80">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;