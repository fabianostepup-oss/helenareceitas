import { Heart, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Sobre o Canal <span className="text-warm-orange">Helena Receitas</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            O Canal Helena Receitas nasceu da força da superação. Em meio a batalhas pessoais, como a luta contra o câncer e momentos de profunda insegurança, a cozinha foi o espaço onde encontrei coragem para seguir em frente. Com um celular simples, sem equipamentos sofisticados, comecei a compartilhar receitas caseiras, simples e econômicas, com o desejo de levar sabor e esperança para as mesas de outras pessoas.
<br/>
<br/>
          O que começou com desafios e limitações, hoje é uma comunidade de mais de 360 mil pessoas. Cada seguidor, cada curtida e comentário, é um lembrete de que, mesmo nas horas mais difíceis, os sonhos podem se realizar. No Canal Helena Receitas, acreditamos que cozinhar é um ato de amor e superação, e queremos convidar você a fazer parte da nossa família culinária. Aqui, você encontra receitas práticas, cheias de carinho e sabor, feitas para trazer alegria ao seu dia

          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-[#F16623] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Feito com Amor
              </h3>
              <p className="text-muted-foreground">
                Cada receita é pensada com carinho para trazer sabor e alegria à sua mesa
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-[#B4B243] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Receitas Práticas
              </h3>
              <p className="text-muted-foreground">
                Pratos deliciosos com ingredientes simples que você já tem em casa
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-[#F16623] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Família Culinária
              </h3>
              <p className="text-muted-foreground">
                Uma comunidade que compartilha o amor pela boa comida caseira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;