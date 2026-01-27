
import React, { useState, useEffect } from 'react';
import { 
  Fuel, 
  Utensils, 
  Coffee, 
  Wrench, 
  ParkingCircle, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X,
  ChevronRight,
  Droplets,
  MessageCircle,
  ExternalLink,
  Smartphone
} from 'lucide-react';

// URL da Logo oficial
const LOGO_URL = "/logo.png";

// Configuração única de itens de menu para evitar inconsistências
const MENU_ITEMS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Eletroposto', href: '#eletroposto' },
  { name: 'Estrutura', href: '#estrutura' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
];

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <a href="#inicio">
              <img 
                src={LOGO_URL} 
                alt="Logo Posto Servsul" 
                className={`h-12 md:h-14 w-auto transition-all ${scrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-all hover:text-[#FBB03B] relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#FBB03B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    scrolled ? 'text-[#002B5C]' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-[#002B5C] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-lg font-bold text-[#002B5C] border-b border-slate-100 active:bg-slate-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-[#002B5C]">
      {/* Background with Blur Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/estrutura.jpg" 
          alt="Posto Servsul Fachada" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4] blur-[4px]"
        />
        {/* Multilayer Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002B5C]/70 via-[#002B5C]/30 to-[#002B5C]/90"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent to-[#002B5C]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Tradição <span className="text-[#FBB03B]">&</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Excelência na Estrada.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-100 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            O ponto de parada preferido na Rodovia Fernão Dias há mais de 35 anos. Combustível de qualidade, o melhor salgado e agora tecnologia elétrica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a href="#eletroposto" className="bg-[#006837] hover:bg-[#008244] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-2xl">
              <Zap className="mr-3 h-6 w-6 fill-current text-[#FBB03B]" /> CONHEÇA O ELETROPOSTO
            </a>
            <a href="#contato" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all">
              VER LOCALIZAÇÃO
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#FBB03B] to-transparent"></div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services = [
    { title: 'Restaurante', desc: 'Refeições completas e saborosas para recuperar as energias.', icon: <Utensils className="w-8 h-8" /> },
    { title: 'Lanchonete', desc: 'O melhor salgado da Fernão Dias, famoso pela qualidade e sabor.', icon: <Coffee className="w-8 h-8" /> },
    { title: 'Borracharia', desc: 'Assistência técnica rápida para garantir sua segurança na pista.', icon: <Wrench className="w-8 h-8" /> },
    { title: 'Estacionamento', desc: 'Espaço amplo, coberto e totalmente iluminado para sua tranquilidade.', icon: <ParkingCircle className="w-8 h-8" /> },
  ];

  return (
    <section id="servicos" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[#006837] font-black uppercase tracking-[0.2em] text-sm mb-4">Experiência Completa</h2>
          <p className="text-4xl md:text-5xl font-black text-[#002B5C] leading-tight">Serviços que facilitam sua viagem</p>
          <div className="w-24 h-1 bg-[#FBB03B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#002B5C] to-[#006837] rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div className="relative p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#002B5C]/20 transition-all duration-300">
                <div className="bg-[#002B5C] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100 group-hover:bg-[#006837] transition-all group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#002B5C]">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EVCharging: React.FC = () => {
  const chargers = [
    { power: '22KW', type: 'Tipo 2', description: 'Carga Semirrápida' },
    { power: '60KW', type: 'CCS2', description: 'Carga Rápida' },
    { power: '110KW', type: 'CCS2', description: 'Ultra Rápida' },
    { power: '120KW', type: 'CCS2', description: 'Potência Máxima' },
  ];

  return (
    <section id="eletroposto" className="py-32 bg-[#001a38] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FBB03B]/10 text-[#FBB03B] border border-[#FBB03B]/20 mb-10">
              <Zap className="w-5 h-5 fill-current" />
              <span className="text-xs font-black uppercase tracking-widest">CTF Eletroposto</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1]">
              A maior rede de recarga na <span className="text-[#FBB03B]">Fernão Dias.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transformamos sua parada em um abastecimento de tecnologia. Quatro carregadores de última geração prontos para você via NeoCharge.
            </p>

            <div className="bg-[#002B5C]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-3xl text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm text-slate-500 uppercase font-black tracking-widest mb-2">Valor da Tarifa</p>
                  <p className="text-5xl font-black text-[#FBB03B]">R$ 2,50<span className="text-xl font-bold text-slate-500">/kWh</span></p>
                </div>
                <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10 flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">Via App</span>
                  <span className="text-xl font-black tracking-tighter text-white">NEOCHARGE</span>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 bg-[#006837]/20 rounded-2xl border border-[#006837]/30">
                <div className="bg-[#006837] p-3 rounded-xl text-white shadow-lg shadow-green-900/40">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-bold mb-1">Instale e Recarregue</p>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    Baixe o aplicativo <span className="text-[#FBB03B] font-bold">NeoCharge</span> e gerencie sua recarga em tempo real com total segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {chargers.map((c, i) => (
                <div key={i} className="group relative overflow-hidden bg-[#002B5C]/30 p-10 rounded-[2.5rem] border border-white/5 hover:border-[#FBB03B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FBB03B]/10">
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#FBB03B]/10 transition-colors">
                    <Zap className="w-24 h-24" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-[#FBB03B] font-black text-4xl mb-1">{c.power}</p>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{c.description}</p>
                    </div>
                    <div className="mt-12 flex items-center justify-between">
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 group-hover:bg-[#FBB03B] group-hover:border-[#FBB03B] group-hover:text-[#002B5C] transition-all">
                        PLUG {c.type}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-[#006837] animate-pulse shadow-[0_0_15px_#006837]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: '/estrutura.jpg', title: 'Infraestrutura Moderna', span: 'md:col-span-2 md:row-span-2' },
    { url: '/banheiro.jpeg', title: 'Banheiros Impecáveis' },
    { url: '/estrutura2.jpeg', title: 'Recarga Elétrica 24h' },
    { url: '/lanchonete.jpg', title: 'Nossa Lanchonete' },
    { url: '/borracharia.jpg', title: 'Borracharia' },
  ];

  return (
    <section id="estrutura" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[#006837] font-black uppercase tracking-[0.2em] text-sm mb-4">Estrutura de Ponta</h2>
            <p className="text-4xl md:text-5xl font-black text-[#002B5C]">Fotos da Estrutura</p>
          </div>
          <p className="text-slate-500 max-w-sm font-medium">
            Ambientes modernos, limpos e seguros para você e sua família descansarem durante a viagem. Clique nas fotos para ampliar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImage(`${img.url}?auto=format&fit=crop&q=90&w=1600`)}
            className={`relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-xl bg-slate-100 ${img.span || ''}`}
          >
            <img 
              src={`${img.url}?auto=format&fit=crop&q=80&w=1200`} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <p className="text-white font-black text-2xl tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</p>
              <div className="w-12 h-1 bg-[#FBB03B] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left delay-100 duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white p-3 bg-white/10 rounded-full hover:bg-[#FBB03B] hover:text-[#002B5C] transition-all z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative group" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              className="w-full h-full object-contain rounded-xl shadow-2xl animate-scale-up border-4 border-[#002B5C]/20" 
              alt="Ampliada" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-[#001429] relative overflow-hidden text-white">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#006837]/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FBB03B]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-10 inline-flex items-center justify-center w-28 h-28 bg-white rounded-[2.5rem] shadow-2xl">
            <img src={LOGO_URL} alt="Mini Logo" className="h-14" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter text-center">
            Tradição que evolui com a <span className="text-[#FBB03B]">sua jornada.</span>
          </h2>
        </div>
        
        <div className="prose prose-xl prose-invert mx-auto text-slate-300 leading-[1.8] font-medium text-lg md:text-xl text-justify space-y-10">
          <p>
            Com mais de <strong className="text-white font-black">35 anos de história na Rodovia Fernão Dias</strong>, o Posto Servsul segue evoluindo para atender cada vez melhor seus clientes. Reconhecido pela excelência no atendimento, pela qualidade dos combustíveis, pelo melhor salgado da Fernão Dias e pelos banheiros sempre limpos e bem cuidados, o posto dá mais um passo importante rumo ao futuro da mobilidade.
          </p>
          
          <div className="relative p-10 md:p-14 bg-[#002B5C]/50 backdrop-blur-md rounded-[3rem] shadow-2xl border border-white/10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#006837] text-white px-8 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em]">
              O Novo Servsul
            </div>
            <p className="text-white font-black text-2xl md:text-3xl leading-relaxed italic">
              "Agora, o Posto Servsul passa a contar com 4 carregadores para carros elétricos, reforçando seu compromisso com inovação, sustentabilidade e conforto para quem percorre a rodovia."
            </p>
          </div>

          <p>
            A novidade transforma o Servsul em mais um <strong className="text-white font-black">ponto de apoio estratégico na Fernão Dias</strong>, oferecendo praticidade tanto para motoristas de veículos convencionais quanto elétricos — um espaço pensado para descanso, segurança e serviços de qualidade durante a viagem.
          </p>
          
          <p className="text-center font-bold text-slate-200 border-t border-white/10 pt-10">
            O Posto Servsul segue investindo em melhorias, unindo tradição, confiança e modernização, para continuar fazendo parte da história de quem passa pela estrada.
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const phones = [
    { num: '(35) 3429-8009', primary: true },
    { num: '(35) 4102-0945' },
    { num: '(35) 3425-1312' }
  ];

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-[#006837] font-black uppercase tracking-[0.2em] text-sm mb-4">Contato & Localização</h2>
            <p className="text-5xl font-black text-[#002B5C] mb-10 tracking-tight leading-tight">Estamos ao lado <br />da sua rota.</p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="bg-[#002B5C]/10 p-5 rounded-[1.5rem] text-[#002B5C] group-hover:bg-[#002B5C] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-[#002B5C] text-xl mb-2">Endereço</h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-xs">
                    Rod. Fernão Dias, KM 870, Bairro Cruz Alta <br />
                    Pouso Alegre - MG <br />
                    <span className="text-sm font-black text-[#006837] uppercase tracking-widest mt-2 block underline decoration-[#FBB03B] underline-offset-4">Ao lado da PRF</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="bg-[#002B5C]/10 p-5 rounded-[1.5rem] text-[#002B5C] group-hover:bg-[#002B5C] group-hover:text-white transition-all duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-[#002B5C] text-xl mb-3">Atendimento</h4>
                  <div className="space-y-2">
                    {phones.map((p, idx) => (
                      <p key={idx} className={`text-xl font-bold ${p.primary ? 'text-[#006837]' : 'text-slate-600'}`}>
                        {p.num}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="bg-[#002B5C]/10 p-5 rounded-[1.5rem] text-[#002B5C] group-hover:bg-[#002B5C] group-hover:text-white transition-all duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-[#002B5C] text-xl mb-2">E-mail Corporativo</h4>
                  <p className="text-slate-600 font-bold text-lg">postoservsul@postoservsul.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FBB03B]/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7441589139265!2d-45.9575566!3d-22.3947014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbea46203ef69b%3A0x7a0b3ab2658441b8!2sPosto%20Servsul!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-8 right-8">
                <a 
                  href="https://www.google.com.br/maps/place/Posto+Servsul/@-22.3947014,-45.9575566,600m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#002B5C] p-4 rounded-2xl shadow-2xl flex items-center gap-3 font-black text-sm uppercase tracking-tighter hover:bg-[#FBB03B] hover:text-[#002B5C] transition-all transform hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5" /> Rota no Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001429] text-slate-500 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-3">
            <a href="#inicio">
              <img src={LOGO_URL} alt="Logo Footer" className="h-16 brightness-0 invert" />
            </a>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            {MENU_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-black uppercase tracking-widest hover:text-[#FBB03B] transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
          <p>© {new Date().getFullYear()} Posto Servsul Pouso Alegre. Tradição na Fernão Dias.</p>
          <div className="flex items-center gap-4">
             <span className="text-xs uppercase font-black tracking-widest text-[#006837]">Qualidade Garantida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/553534298009" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-all transform active:scale-95 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#FBB03B]/30 selection:text-[#002B5C]">
      <Navbar />
      <Hero />
      <Services />
      <EVCharging />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />

      {/* Estilos Globais e Animações */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}
