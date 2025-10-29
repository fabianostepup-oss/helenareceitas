import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Eye } from "lucide-react";

const VideoHighlights = () => {
  const videos = [
    {
      title: "SEGREDO DE VÓ | OS MELHORES BOLINHOS DE CHUVA",
      description: "Dica de vó infalível: com meia colher de vinagre e o passo a passo certo, seus bolinhos de chuva ficam fofinhos e perfeitos para o café da tarde.",
      views: "5,5M",
      thumbnail: "https://i.postimg.cc/SNYBb9yf/bolinho-de-chuva.png",
      url: "https://www.youtube.com/watch?v=KYQ6MJM0WwM&t=129s&ab_channel=HelenaReceitas"
    },
    {
      title: "COMO FAZER PEIXE ASSADO NO FORNO COM FAROFA E BATATAS - BEM ÚMIDO E SABOROSO!",
      description: "Aprenda a fazer tilápia assada no forno, recheada com farofa e batatas: uma receita suculenta, temperada e deliciosa que vai encantar a todos!",
      views: "551K",
      thumbnail: "https://i.postimg.cc/5tmckMx1/helena-receitas.png", 
      url: "https://www.youtube.com/watch?v=MiSz0FplOwU&ab_channel=HelenaReceitas"
    },
    {
      title: "BOLO DE MAIZENA COM COCO - SEM GLÚTEN E SEM LEITE",
      description: "Aprenda a fazer um bolo de Maizena com coco fofinho e sem glúten, com massa macia e calda cremosa, perfeito para uma sobremesa leve e saborosa.",
      views: "833K",
      thumbnail: "https://i.postimg.cc/DwqR8K4J/bolo-de-coco-1.png",
      url: "https://www.youtube.com/watch?v=Bowgbe2O37k&ab_channel=HelenaReceitas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Receitas em <span className="text-warm-orange">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra algumas das receitas mais queridas pelos nossos inscritos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative group">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-warm-orange ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {video.views}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                <Button 
                  variant="warm" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Assistir no YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;