import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Heart, 
  ShieldCheck,
  Star
} from 'lucide-react';

// --- Constants & Types ---

const WHATSAPP_NUMBER = "5511999999999"; // Placeholder - would be replaced by client
const WHATSAPP_MESSAGE = "Olá! Quero me tornar uma Especialista em Desencrave Sem Dor e faturar mais.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const IMAGES = {
  heel: "https://iili.io/f5GOwpj.jpg",
  toe: "https://iili.io/f5GDewl.jpg",
  podiatrist: "https://iili.io/f5GjOIp.jpg"
};

// --- Components ---

const Button = ({ 
  children, 
  className = "", 
  fullWidth = false, 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  fullWidth?: boolean;
  variant?: "primary" | "outline";
}) => {
  const baseStyle = "flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg active:scale-95";
  const variants = {
    primary: "bg-brand-green text-white hover:bg-green-600 hover:shadow-green-200",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-soft"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-12 md:py-20 px-4 md:px-8 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-brand-soft w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-brand-dark w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

// --- Main Application ---

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white pb-24 md:pb-0">
      
      {/* Header / Nav */}
      <header className="bg-white py-4 px-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-brand-primary text-xl tracking-tight">
            Desencrave<span className="text-brand-green">SemDor</span>
          </span>
          <a 
            href={WHATSAPP_LINK}
            className="bg-brand-green text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors hidden sm:flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center pt-10 pb-16 bg-gradient-to-b from-brand-soft/30 to-white">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6 animate-pulse">
          Vagas Abertas: Curso Desencrave Sem Dor
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Pare de sofrer com o palito e comece a <span className="text-brand-primary">faturar como Especialista</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Aprenda a técnica de <strong>Desencrave Sem Dor</strong> e <strong>Calo Peel</strong> usando apenas produtos. Sem esforço mecânico, sem dor para a cliente e cobrando valor diferenciado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="w-full sm:w-auto text-xl shadow-green-300/50">
            <MessageCircle className="w-6 h-6" />
            Quero Entrar no Grupo VIP
          </Button>
          <p className="text-sm text-gray-500 mt-2 sm:mt-0">
            Junte-se a mais de 800 profissionais
          </p>
        </div>
      </Section>

      {/* The Problem vs Solution */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Você ainda trabalha "de graça" e machuca a cliente?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="border-l-4 border-red-400 pl-6 py-2">
            <h3 className="text-xl font-bold text-red-500 mb-4">A Manicure Tradicional</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <p className="text-gray-600">Perde 30 minutos tirando couro "de graça".</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <p className="text-gray-600">Usa força mecânica e palito, cansando a mão.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <p className="text-gray-600">Fere e causa dor na cliente (risco de inflamação).</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <p className="text-gray-600">Cliente reclama e não paga a mais pelo esforço.</p>
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="border-l-4 border-brand-green pl-6 py-2 bg-green-50/50 rounded-r-xl">
            <h3 className="text-xl font-bold text-brand-green mb-4">A Especialista (Você)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                <p className="text-gray-800 font-medium">Cobra separado pelo serviço especializado.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                <p className="text-gray-800 font-medium">Usa produtos que fazem o trabalho pesado.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                <p className="text-gray-800 font-medium">Zero dor. A cliente se apaixona pelo alívio.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                <p className="text-gray-800 font-medium">Torna-se referência na sua cidade.</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Visual Proof / Gallery */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Resultados Reais</h2>
        <p className="text-center text-gray-600 mb-10">
          Veja o que você será capaz de fazer sem usar força, apenas técnica e produto.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
              <img 
                src={IMAGES.heel} 
                alt="Tratamento de Calo Peel Antes e Depois" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                Calo Peel / Rachaduras
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-800">Recuperação de Calcanhar</h3>
            <p className="text-sm text-gray-500">Tratamento indolor que remove toda a calosidade e devolve a maciez.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
              <img 
                src={IMAGES.toe} 
                alt="Desencrave de unha sem dor" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                Desencrave Sem Dor
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-800">Correção de Unha Encravada</h3>
            <p className="text-sm text-gray-500">Sem alicate fundo, sem sangue. Alívio imediato para a cliente.</p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="primary" className="w-full md:w-auto">
            Quero aprender essa técnica agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Authority / Bio */}
      <Section className="bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-full md:w-1/3">
            <div className="relative mx-auto w-64 h-64 md:w-full md:h-auto aspect-square rounded-full md:rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src={IMAGES.podiatrist} 
                alt="Foto da Podóloga Instrutora" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              A PIONEIRA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem vai te ensinar?
            </h2>
            <p className="text-brand-soft text-lg mb-6 leading-relaxed">
              Sou a <strong className="text-white">primeira podóloga</strong> a ensinar manicures a fazerem o desencrave sem dor utilizando produtos específicos.
            </p>
            <p className="text-gray-100 mb-8 leading-relaxed">
              Minha missão é valorizar a sua profissão. Chega de ferir clientes e trabalhar de graça. Eu desenvolvi um método onde a dor da manicure acaba, e o alívio da cliente vira lucro no seu bolso.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                 <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                 <span className="font-bold">+820 Alunas no Grupo</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                 <ShieldCheck className="text-brand-green w-5 h-5" />
                 <span className="font-bold">Método Comprovado</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Por que entrar agora?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Aumente seu Ticket" icon={TrendingUp}>
            Pare de ganhar apenas pela esmaltação. O serviço de podologia básica pode dobrar o valor do seu atendimento.
          </Card>
          <Card title="Fidelização Extrema" icon={Heart}>
            Cliente que não sente dor volta sempre. Você será a única profissional que ela confiará para tocar nos pés dela.
          </Card>
          <Card title="Menos Tempo, Mais Lucro" icon={Clock}>
            O produto age enquanto você faz a cutícula. Otimize seu tempo e pare de lutar contra unhas duras e encravadas.
          </Card>
        </div>
      </Section>

      {/* Footer / Final CTA */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não fique de fora da nova era das manicures
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            A metade do grupo já comprou e está faturando. Você vai continuar namorando o sucesso ou vai agarrar essa oportunidade?
          </p>
          <Button fullWidth className="max-w-md mx-auto text-xl py-5 bg-green-500 hover:bg-green-400 shadow-green-900/50">
            <MessageCircle className="w-8 h-8" />
            GARANTIR MINHA VAGA NO WHATSAPP
          </Button>
          <p className="mt-8 text-sm text-gray-600">
            © 2024 Curso Desencrave Sem Dor. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Button fullWidth className="shadow-none">
          <MessageCircle className="w-5 h-5" />
          Falar com a Especialista
        </Button>
      </div>

    </div>
  );
}