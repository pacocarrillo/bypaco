import Background from "./components/Background";
import Card from "./components/Card";
import Tag from "./components/Tag";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Twitter, Instagram,
  Globe, Play, Layers, ArrowUpRight 
} from "lucide-react"; 

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-liquid-blue selection:text-black">
      <Background />
      
      <main className="relative z-10 max-w-6xl mx-auto p-4 md:p-8 pt-20 pb-20">
        
        {/* ENCABEZADO */}
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            ByPaco<span className="text-liquid-blue">.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 mt-2 font-light">
            Arquitecto de software & Creative Developer
          </p>
        </header>

        {/* --- GRID MAESTRO --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* 1. INTRODUCCIÓN */}
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
                <span className="text-sm text-green-300 font-medium">Disponible para proyectos</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                Diseño y desarrollo soluciones digitales que <span className="text-liquid-purple">marcan la diferencia</span>.
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Especializado en crear apps iOS fluidas y webs modernas que parecen magia.
            </p>
          </Card>

          {/* 2. UBICACIÓN */}
          <Card className="flex flex-col items-center justify-center bg-gradient-to-b from-glass-200 to-transparent">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-bold">Barcelona</h3>
            <p className="text-xs text-gray-400">España</p>
          </Card>

          {/* 3. STACK */}
          <Card className="flex flex-col justify-center gap-3">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <Tag text="SwiftUI" color="bg-orange-500/20 text-orange-200"/>
              <Tag text="React" color="bg-cyan-500/20 text-cyan-200"/>
              <Tag text="Node.js" color="bg-green-500/20 text-green-200"/>
              <Tag text="Tailwind" color="bg-blue-500/20 text-blue-200"/>
            </div>
          </Card>

          {/* 4. PROYECTO DESTACADO (APP) */}
          <Card className="md:col-span-2 md:row-span-2 group cursor-pointer p-0 border-0" noHover>
             <img 
               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
               alt="App Project" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"/>
             
             <div className="absolute bottom-0 left-0 p-6 w-full">
               <div className="flex justify-between items-end">
                 <div>
                   <Tag text="iOS App" color="bg-white/20 text-white"/>
                   <h3 className="text-2xl font-bold mt-2 group-hover:text-liquid-blue transition-colors">Nomad Travel App</h3>
                   <p className="text-sm text-gray-300 mt-1">Gestor de viajes inteligente</p>
                 </div>
                 <div className="p-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                   <ArrowUpRight size={20} />
                 </div>
               </div>
             </div>
          </Card>

          {/* 5. PROYECTO WEB */}
          <Card className="group cursor-pointer hover:border-liquid-purple/50">
            <Globe className="w-8 h-8 text-liquid-purple mb-4" />
            <h3 className="font-bold text-lg">Web Corporativa</h3>
            <p className="text-xs text-gray-400 mt-1 mb-4">Diseño minimalista.</p>
            <div className="text-xs text-liquid-purple flex items-center gap-1 group-hover:gap-2 transition-all">
              Ver proyecto <ArrowUpRight size={12}/>
            </div>
          </Card>

          {/* 6. SERVICIOS */}
          <Card className="md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-glass-200 to-glass-100">
            <div>
              <Layers className="w-8 h-8 text-liquid-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4">Servicios</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">✨ Diseño UI/UX</li>
                <li className="flex items-center gap-2">📱 Apps Nativas</li>
                <li className="flex items-center gap-2">🌐 Desarrollo Web</li>
              </ul>
            </div>
            <button className="w-full py-2 mt-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
              Contacto
            </button>
          </Card>

          {/* 7. DEMO REEL */}
          <Card className="group cursor-pointer flex items-center justify-center bg-black" noHover>
             <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Video thumb"/>
             </div>
             <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
               <Play className="w-5 h-5 fill-white text-white ml-1" />
             </div>
             <span className="absolute bottom-3 left-3 text-xs font-bold text-white">Showreel 2025</span>
          </Card>

          {/* 8. REDES */}
          {/* 8. REDES */}
          <Card className="flex flex-col justify-center gap-4">
            <div className="flex justify-between">
              {/* INSTAGRAM (Tu nueva cuenta) */}
              <a 
                href="https://instagram.com/TU_USUARIO_INSTAGRAM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20}/>
              </a>
              
              {/* GITHUB (Para cuando te abras la cuenta) */}
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/20 transition-colors"
              >
                <Github size={20}/>
              </a>
            </div>

            <div className="flex justify-between">
              {/* EMAIL */}
              <a 
                href="mailto:hola@bypaco.com" 
                className="p-2 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-500 transition-colors"
              >
                <Mail size={20}/>
              </a>

              {/* LINKEDIN (Opcional - Quita los símbolos {/* y */} para activarlo) */}
              {/* <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin size={20}/>
              </a>
              */}
              
              {/* Espacio vacío para equilibrar si LinkedIn está oculto */}
              <div className="w-9 h-9"></div> 
            </div>
          </Card>

        </div>
      </main>
    </div>
  );
}