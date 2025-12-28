/* MODIFICACIÓN: 28-12-2025
  AUTOR: ByPaco
  CAMBIOS: Optimización responsive para móvil (Bento Grid fluido) y personalización de textos.
*/

import Background from "./components/Background";
import Card from "./components/Card";
import Tag from "./components/Tag";
import { motion } from "framer-motion";
import { 
  Github, Mail, Instagram,
  Globe, Play, Layers, ArrowUpRight 
} from "lucide-react"; 

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-liquid-blue selection:text-black">
      <Background />
      
      <main className="relative z-10 max-w-6xl mx-auto p-4 md:p-8 pt-10 md:pt-20 pb-20">
        
        {/* ENCABEZADO - Más compacto en móvil */}
        <header className="mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            ByPaco<span className="text-liquid-blue">.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2 font-light">
            Creative Developer & iOS Enthusiast
          </p>
        </header>

        {/* --- GRID MAESTRO --- 
            Móvil: 1 columna, altura automática.
            Escritorio: 4 columnas, filas de 180px.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
          
          {/* 1. INTRODUCCIÓN - Ocupa más espacio para destacar */}
          <Card className="md:col-span-3 md:row-span-2 flex flex-col justify-between min-h-[250px] md:min-h-0">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                <span className="text-xs text-green-300 font-medium uppercase tracking-widest">Disponible para proyectos</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Diseño y desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">soluciones digitales</span> que marcan la diferencia.
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              Especializado en crear apps iOS nativas y experiencias web modernas que combinan potencia y elegancia.
            </p>
          </Card>

          {/* 2. STACK - En móvil es una tarjeta normal */}
          <Card className="flex flex-col justify-center gap-4 bg-[#111]">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">Tech Stack</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Tag text="SwiftUI" color="bg-orange-500/10 text-orange-400 border border-orange-500/20"/>
              <Tag text="React" color="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"/>
              <Tag text="Tailwind" color="bg-blue-500/10 text-blue-400 border border-blue-500/20"/>
            </div>
          </Card>

          {/* 3. UBICACIÓN */}
          <Card className="flex flex-col items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
            <div className="text-3xl mb-1">📍</div>
            <h3 className="font-bold text-white">Barcelona</h3>
            <p className="text-xs text-gray-500">España</p>
          </Card>

          {/* 4. PROYECTO DESTACADO - iOS App */}
          <Card className="md:col-span-2 md:row-span-2 group cursor-pointer p-0 overflow-hidden border-0 min-h-[300px] md:min-h-0" noHover>
             <img 
               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
               alt="App Project" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>
             
             <div className="absolute bottom-0 left-0 p-6 w-full">
               <div className="flex justify-between items-end">
                 <div>
                   <span className="px-2 py-1 bg-blue-500 text-[10px] font-bold uppercase rounded mb-2 inline-block">iOS Native</span>
                   <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Mi App iOS Real</h3>
                   <p className="text-sm text-gray-300">Gestor inteligente diseñado para iPhone.</p>
                 </div>
                 <div className="p-3 bg-white text-black rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                   <ArrowUpRight size={20} />
                 </div>
               </div>
             </div>
          </Card>

          {/* 5. SERVICIOS - Vertical en escritorio */}
          <Card className="md:row-span-2 flex flex-col justify-between bg-[#0a0a0a]">
            <div>
              <Layers className="w-6 h-6 text-liquid-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4">Especialidades</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-400 rounded-full"/> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-400 rounded-full"/> Swift Development
                </li>
                <li className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-400 rounded-full"/> Web Apps (React)
                </li>
              </ul>
            </div>
            <button className="w-full py-3 mt-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold uppercase tracking-widest">
              Saber más
            </button>
          </Card>

          {/* 6. PROYECTO WEB */}
          <Card className="group cursor-pointer hover:bg-white/[0.02] transition-colors">
            <Globe className="w-6 h-6 text-purple-400 mb-4" />
            <h3 className="font-bold text-lg">Web Project</h3>
            <div className="text-xs text-purple-400 flex items-center gap-1 mt-2">
              Ver demo <ArrowUpRight size={12}/>
            </div>
          </Card>

          {/* 7. DEMO REEL - Estilo vídeo */}
          <Card className="group cursor-pointer flex items-center justify-center bg-black overflow-hidden" noHover>
             <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Video thumb"/>
             </div>
             <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
               <Play className="w-4 h-4 fill-white text-white ml-0.5" />
             </div>
             <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-tighter text-white/50">Showreel 2025</span>
          </Card>

          {/* 8. REDES - Botones más grandes en móvil */}
          <Card className="md:col-span-1 flex flex-row md:flex-col justify-center gap-6 md:gap-4 bg-gradient-to-br from-white/[0.03] to-transparent">
              <a 
                href="https://instagram.com/bypaco.es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={22}/>
                <span className="hidden md:block text-xs font-medium">Instagram</span>
              </a>
              
              <a 
                href="mailto:hola@bypaco.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors"
              >
                <Mail size={22}/>
                <span className="hidden md:block text-xs font-medium">Email</span>
              </a>

              <a 
                href="https://github.com/pacocarrillo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={22}/>
                <span className="hidden md:block text-xs font-medium">GitHub</span>
              </a>
          </Card>

        </div>
      </main>
    </div>
  );
}