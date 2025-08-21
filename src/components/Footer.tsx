import { FacebookIcon, Heart, InstagramIcon, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-warm-orange" />
            <h3 className="text-2xl font-bold">Helena Receitas</h3>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Cozinhando com amor e compartilhando sabores que aquecem o coração. 
            Obrigada por fazer parte da nossa família culinária!
          </p>
          
          <div className="flex justify-center mb-8 flex-col items-center gap-2">
            <a 
              href="https://www.youtube.com/@HelenaReceitas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-warm-orange transition-colors"
            >
              <Youtube className="w-6 h-6" />
              Canal no YouTube
            </a>

           <a 
              href="https://www.facebook.com/helenareceitasoficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-warm-orange transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
              Página do Facebook
            </a>
            
             <a 
              href="https://www.instagram.com/helenaswistakoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-warm-orange transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
              Instagram
            </a>
            
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Helena Receitas. Feito com ❤️ para quem ama cozinhar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;