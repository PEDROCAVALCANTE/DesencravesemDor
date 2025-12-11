import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Heart, 
  ShieldCheck, 
  Star,
  ZoomIn,
  X,
  Users,
  Quote,
  ImageIcon
} from 'lucide-react';

// --- Constants & Types ---

const WHATSAPP_LINK = "https://chat.whatsapp.com/FJkU6FUpQR71ichNbhIVGs";

const IMAGES = {
  heel: "https://iili.io/f5GOwpj.jpg",
  toe: "https://iili.io/f5GDewl.jpg",
  podiatrist: "https://iili.io/f5jSXBn.jpg"
};

const FEEDBACK_PRINTS = [
  "https://iili.io/f5jIv6l.jpg",
  "https://iili.io/f5hs1Qp.jpg",
  "https://iili.io/f5hsHhl.jpg"
];

const TESTIMONIALS = [
  {
    name: "Lucilene SPA",
    text: "Seus cursos pra nós manicure e pedicure é um divisor de águas, pois aprendemos a cuidar melhor das nossas clientes, oferecendo a elas cada dia mais procedimentos. Eu amei conhecer vc e seus cursos. Gratidão de todo coração.",
    time: "20:45"
  },
  {
    name: "Aluna Nail Designer",
    text: "Eu confesso que estou realmente assustada (no bom sentido). Quando minha cliente voltou fiquei em choque com o resultado! Dá pra ouvir ela mesma dizendo: 'não dói nada'. Esse curso está sendo um divisor de águas na minha vida e no meu trabalho.",
    time: "09:15"
  },
  {
    name: "Aluna do TikTok",
    text: "Vi sua postagem no tiktok e fiquei tão ansiosa que quase não dormi. Consegui adquirir seu curso e é muito gratificante aprender mais com alguém tão experiente como vc. Muito obrigada por dividir seu conhecimento, virei sua fã.",
    time: "14:20"
  },
  {
    name: "Aluna Satisfeita",
    text: "Tenho recebido muitos elogios e comentários positivos sobre o trabalho. Todos estão gostando muito e elogiando cada cuidado e capricho. O sucesso de meu trabalho é empenho do resultado do seu trabalho e do amor que coloca em cada aula.",
    time: "16:05"
  }
];

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
    primary: "bg-brand-green text-white hover:bg-green-600 hover:shadow-green-200 ring-4 ring-green-100",
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

const Section = ({ 
  children, 
  className = "", 
  containerClass = "max-w-4xl" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  containerClass?: string;
}) => (
  <section className={`py-12 md:py-20 px-4 md:px-8 ${className}`}>
    <div className={`${containerClass} mx-auto`}>
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

const TestimonialBubble = ({ name, text, time }: { name: string, text: string, time: string }) => (
  <div className="bg-white p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-none shadow-sm border border-gray-100 relative ml-4 mb-2">
    <div className="absolute top-0 left-0 -ml-2 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45 clip-triangle"></div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-bold text-brand-dark">{name}</span>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed mb-2">{text}</p>
    <div className="text-right">
      <span className="text-[10px] text-gray-400">{time}</span>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll logic for sticky button
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white pb-24 md:pb-0 relative">
      
      {/* Header / Nav */}
      <header className="bg-white py-4 px-4 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-brand-primary text-xl tracking-tight">
            Desencrave<span className="text-brand-green">SemDor</span>
          </span>
          <a 
            href={WHATSAPP_LINK}
            className="bg-brand-green text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors hidden sm:flex items-center gap-2 animate-pulse hover:animate-none"
          >
            <MessageCircle size={16} />
            Entrar no Grupo VIP
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="text-center pt-10 pb-16 bg-gradient-to-b from-brand-soft/30 to-white">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6 animate-bounce">
          🔥 Vagas Abertas: Curso Desencrave Sem Dor
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
      <Section className="bg-gray-50" containerClass="max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Resultados Reais</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Veja o que você será capaz de fazer sem usar força, apenas técnica e produto. 
          <br /><span className="text-sm italic">(Clique nas imagens para ampliar)</span>
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div 
              className="relative h-72 md:h-80 w-full bg-gray-200 cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImage(IMAGES.heel)}
            >
              <img 
                src={IMAGES.heel} 
                alt="Tratamento de Calo Peel Antes e Depois" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                   <ZoomIn className="text-brand-primary w-6 h-6" />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4">
                 <span className="text-white font-bold text-sm tracking-wide bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
                    Calo Peel / Rachaduras
                 </span>
              </div>
            </div>
            
            <div className="p-6 text-center bg-white relative z-10">
               <h3 className="font-bold text-xl text-gray-900 mb-2">Recuperação de Calcanhar</h3>
               <p className="text-gray-600">Tratamento indolor que remove toda a calosidade e devolve a maciez.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
            <div 
              className="relative h-72 md:h-80 w-full bg-gray-200 cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImage(IMAGES.toe)}
            >
              <img 
                src={IMAGES.toe} 
                alt="Desencrave de unha sem dor" 
                className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                   <ZoomIn className="text-brand-primary w-6 h-6" />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4">
                 <span className="text-white font-bold text-sm tracking-wide bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
                    Desencrave Sem Dor
                 </span>
              </div>
            </div>
            
            <div className="p-6 text-center bg-white relative z-10">
               <h3 className="font-bold text-xl text-gray-900 mb-2">Correção de Unha Encravada</h3>
               <p className="text-gray-600">Sem alicate fundo, sem sangue. Alívio imediato para a cliente.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary" className="w-full md:w-auto px-8 py-4 text-xl">
            Quero aprender essa técnica agora
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </Section>

      {/* Testimonials / Social Proof */}
      <Section className="bg-[#E5DDD5]/40" containerClass="max-w-6xl"> 
        <div className="text-center mb-10">
           <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-2 block">Prova Social</span>
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Veja o que estão falando no Grupo VIP</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             Depoimentos reais de alunas que já estão aplicando a técnica e transformando seus atendimentos.
           </p>
        </div>

        {/* Real Screenshots Grid - PRIORITY DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEEDBACK_PRINTS.map((img, idx) => (
            <div 
              key={idx} 
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all hover:scale-105 border border-gray-200 bg-white group h-80 md:h-[400px] relative"
              onClick={() => setSelectedImage(img)}
            >
              <img 
               src={img} 
               alt={`Print de depoimento do WhatsApp ${idx + 1}`} 
               className="w-full h-full object-cover object-top"
               loading="lazy"
               decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                 <div className="bg-white/90 px-5 py-3 rounded-full text-base font-bold text-brand-primary shadow-xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                   <ZoomIn size={20} /> Ver Feedback
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mb-10 italic">
          Toque nas imagens acima para ler os depoimentos originais
        </p>

        {/* Text Bubbles (Transcription) */}
        <div className="bg-white/50 p-6 rounded-2xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
            <Quote className="text-brand-primary w-5 h-5" />
            Transcrição dos Melhores Momentos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
               <div key={i} className="flex flex-col">
                 <TestimonialBubble name={t.name} text={t.text} time={t.time} />
               </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
           <a 
             href={WHATSAPP_LINK}
             className="text-brand-primary font-bold text-lg flex items-center gap-2 hover:underline p-2"
           >
             Ver mais depoimentos ao vivo no grupo
             <ArrowRight size={20} />
           </a>
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
                alt="Foto da Podóloga Marta Figueira" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              A PIONEIRA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça Marta Figueira
            </h2>
            <p className="text-brand-soft text-lg mb-6 leading-relaxed">
              Sou a <strong className="text-white">primeira podóloga</strong> a ensinar manicures a fazerem o desencrave sem dor utilizando produtos específicos.
            </p>
            <p className="text-gray-100 mb-8 leading-relaxed">
              Minha missão é valorizar a sua profissão. Chega de ferir clientes e trabalhar de graça. Eu desenvolvi um método onde a dor da manicure acaba, e o alívio da cliente vira lucro no seu bolso.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
            GARANTIR MINHA VAGA NO GRUPO
          </Button>
          <p className="mt-8 text-sm text-gray-600">
            © 2024 Curso Desencrave Sem Dor. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* FIXED FLOATING WHATSAPP BUTTON (Desktop/All) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transform hover:scale-110 transition-all duration-300 group"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle size={36} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Entrar no Grupo VIP
        </span>
        {/* Notification Dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </a>

      {/* Sticky Mobile CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 md:hidden ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Button fullWidth className="shadow-none py-3">
          <MessageCircle className="w-5 h-5" />
          Entrar no Grupo VIP
        </Button>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2 md:p-8 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
          >
             <img 
               src={selectedImage} 
               alt="Zoom Visualização" 
               className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300" 
             />
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="text-white/80 bg-black/50 px-4 py-2 rounded-full text-sm backdrop-blur-md">
              Toque em qualquer lugar para fechar
            </span>
          </div>
        </div>
      )}

    </div>
  );
}