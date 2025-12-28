/* MODIFICACIÓN: 28-12-2025
  AUTOR: ByPaco.es
  CAMBIOS: Restauración del puntero original del sistema para mayor fluidez y comodidad.
*/

import Background from "./components/Background";
import Card from "./components/Card";
import Tag from "./components/Tag";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  Github, Mail, Instagram,
  Globe, Play, Layers, ArrowUpRight, 
  Code2, Zap, MessageSquare, Monitor
} from "lucide-react"; 

export default function App() {
  const hoverAnimation = {
    whileHover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } }
  };

  useEffect(() => {
    // 1. Forzamos que el body y html recuperen el cursor por defecto
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';

    // 2. Eliminamos cualquier estilo inyectado previamente que oculte el cursor
    const styles = document.querySelectorAll('style');
    styles.forEach(s => {
      if (s.innerHTML.includes('cursor: none')) {
        s.remove();
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-cyan-500/30">
      <Background />
      
      <main className="relative z-10 max-w-6xl mx-auto p-4 md:p-8 pt-10 md:pt-20 pb-20">
        
        <header className="mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            ByPaco<span className="text-cyan-500">.es</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2 font-light">
            Desarrollador de Apps y Soluciones Web
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
          
          {/* 1. INTRODUCCIÓN */}
          <motion.div className="md:col-span-3 md:row-span-2" {...hoverAnimation}>
            <Card className="w-full h-full flex flex-col justify-between min-h-[250px] md:min-h-0 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.3em]">Calidad sobre cantidad</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-pretty">
                  Ayudo a negocios a tener una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">presencia digital</span> sólida y profesional.
                </h2>
              </div>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                Me encargo de todo el proceso: desde el diseño hasta que la web o la app está funcionando en internet.
              </p>
            </Card>
          </motion.div>

          {/* 2. IA Y CONECTIVIDAD */}
          <motion.div {...hoverAnimation}>
            <Card className="h-full flex flex-col justify-center gap-3 bg-white/[0.02] backdrop-blur-md border border-white/5 p-6">
              <Zap className="w-6 h-6 text-purple-400 fill-current" />
              <h3 className="font-bold text-sm text-white tracking-tight">IA y Datos</h3>
              <p className="text-[10px] text-gray-500 font-medium leading-tight">
                Integro funciones inteligentes y conecto servicios para que tu app haga el trabajo por ti.
              </p>
            </Card>
          </motion.div>

          {/* 3. CONTACTO */}
          <motion.div {...hoverAnimation}>
            <Card className="h-full flex flex-col justify-center gap-3 bg-cyan-500/10 border border-cyan-500/30 p-6 group cursor-pointer">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h3 className="font-bold text-sm text-white tracking-tight">¿Tienes una idea?</h3>
              <a href="mailto:hola@bypaco.com" className="text-[10px] text-cyan-400 font-black uppercase tracking-widest flex items-center gap-2 group-hover:underline cursor-pointer">
                Hablemos ahora <ArrowUpRight size={12}/>
              </a>
            </Card>
          </motion.div>

          {/* 4. PROYECTO WEB - JARDINERÍA */}
          <motion.div className="md:col-span-2 md:row-span-3" {...hoverAnimation}>
            <Card className="w-full h-full group overflow-hidden border-0 relative bg-[#080808] flex flex-col items-center !p-0 min-h-[580px] md:min-h-0" noHover>
              <a href="https://jardineriacarrillo.es" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex flex-col items-center justify-start pt-8 md:pt-12 cursor-pointer">
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[3rem] h-[480px] w-[85%] max-w-[230px] shadow-[0_0_60px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:scale-[1.02] z-10 mb-32">
                  <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-black relative">
                    <video src="/jardineria-scroll.mov" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-95" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/95 to-transparent pt-32 pb-8 px-8 md:pb-12 md:px-12">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex-1 min-w-[180px]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">Trabajo Realizado</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-[0.9] mb-2 text-pretty">Web de alta<br/>calidad visual.</h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full shadow-lg group-hover:bg-blue-600/40 transition-all cursor-pointer">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Ver Web</span>
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Card>
          </motion.div>

          {/* 5. ESPECIALIDADES */}
          <motion.div className="md:row-span-2" {...hoverAnimation}>
            <Card className="h-full flex flex-col justify-between bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 group">
              <div>
                <Layers className="w-6 h-6 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold mb-6 tracking-tight">Lo que hago</h3>
                <ul className="space-y-5 text-sm text-gray-400 font-medium">
                  {["Diseño de Interfaces", "Aplicaciones iPhone", "Páginas Web Modernas"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]"/> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 mt-6 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all text-[10px] font-black uppercase tracking-widest text-cyan-400 cursor-pointer">
                Saber más
              </button>
            </Card>
          </motion.div>

          {/* 6. INFRAESTRUCTURA */}
          <motion.div {...hoverAnimation}>
            <Card className="h-full flex flex-col justify-center gap-3 bg-white/[0.02] backdrop-blur-md border border-white/5 p-6">
              <Monitor className="w-6 h-6 text-green-400" />
              <h3 className="font-bold text-sm text-white tracking-tight">Puesta en marcha</h3>
              <p className="text-[10px] text-gray-500 font-medium leading-tight text-pretty">
                Me ocupo de la gestión del servidor, el dominio y que todo esté online sin errores.
              </p>
            </Card>
          </motion.div>

          {/* 7. SHOWREEL - KOIN */}
          <motion.div className="md:col-span-2 md:row-span-3" {...hoverAnimation}>
            <Card className="w-full h-full group overflow-hidden border-0 relative bg-[#050505] flex items-center justify-center !p-0 min-h-[580px] md:min-h-0" noHover>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img src="/koin-1.jpg" animate={{ y: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -right-10 w-64 rounded-3xl opacity-40 blur-[1px]" />
                <motion.img src="/koin-2.jpg" animate={{ y: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-20 -left-10 w-60 rounded-3xl opacity-40 blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
              </div>
              <div className="absolute top-6 right-6 z-30">
                <div className="flex items-center gap-2.5 px-3.5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full cursor-pointer hover:bg-cyan-500/20 transition-all">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center"><Play size={10} className="text-black fill-current ml-0.5" /></div>
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Vídeo</span>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4 text-center">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse -z-10" />
                <motion.div whileHover={{ scale: 1.05 }} className="relative w-32 h-32 md:w-36 md:h-36 p-1 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-[2.2rem] shadow-2xl overflow-hidden">
                  <img src="/koin-icon.jpg" className="w-full h-full object-cover rounded-[2rem]" alt="Koin Icon" />
                </motion.div>
                <div className="w-full px-4">
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-4 text-pretty">Koin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">App</span></h3>
                  <div className="flex items-center justify-center gap-3 w-full">
                    <div className="h-[1px] flex-1 max-w-[40px] bg-white/10" />
                    <p className="text-[10px] md:text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] whitespace-nowrap">App Nativa iOS</p>
                    <div className="h-[1px] flex-1 max-w-[40px] bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 z-20 p-8 bg-black/60 backdrop-blur-xl border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-xs md:text-sm text-gray-400 font-medium text-center md:text-left max-w-xs leading-relaxed italic">Un ejemplo real de cómo diseño y programo aplicaciones financieras para iPhone.</p>
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full"><span className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.2em]">Cian Neon</span><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /></div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 8. REDES SOCIALES */}
          <motion.div {...hoverAnimation}>
            <Card className="h-full flex flex-row md:flex-col justify-center gap-6 md:gap-4 bg-white/[0.02] backdrop-blur-md border border-white/5">
                {[
                  { icon: <Instagram size={20}/>, label: "Instagram", color: "hover:text-pink-500", url: "https://instagram.com/bypaco.es" },
                  { icon: <Mail size={20}/>, label: "Email", color: "hover:text-cyan-400", url: "mailto:hola@bypaco.com" },
                  { icon: <Github size={20}/>, label: "GitHub", color: "hover:text-white", url: "https://github.com/pacocarrillo" }
                ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 text-gray-400 ${social.color} transition-all hover:scale-110 cursor-pointer`}>
                    {social.icon}
                    <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">{social.label}</span>
                  </a>
                ))}
            </Card>
          </motion.div>

        </div>
      </main>
    </div>
  );
}