
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_40%,_rgba(220,38,38,0.2),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-5xl px-6 text-center z-10">
        <div className="inline-flex items-center space-x-2 mb-8 px-5 py-2 bg-red-600/10 border border-red-600/40 rounded-full backdrop-blur-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          <span className="text-red-500 font-extrabold text-xs uppercase tracking-[0.3em]">ZETS PROJECT ONLINE</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter italic uppercase select-none">
          <span className="block opacity-90">THE BEST</span>
          <span className="block text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.6)] animate-pulse">ZETS CHEATS</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Твой билет в мир абсолютного доминирования. 
          <br className="hidden md:block" /> 
          Самый актуальный софт от <span className="text-white font-black italic underline decoration-red-600 decoration-4">Zets</span> специально для тебя.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="#cheats" className="text-xl px-12 py-5 uppercase tracking-widest">Каталог Софта</Button>
          <Button href="https://discord.gg/kKY437NH6c" variant="outline" className="text-xl px-12 py-5 uppercase tracking-widest bg-black/40 backdrop-blur-sm">Наш Дискорд</Button>
        </div>

        <div className="mt-20 flex justify-center space-x-12 opacity-40 grayscale hover:grayscale-0 transition-all">
           <img src="https://img.icons8.com/ios-filled/50/ffffff/minecraft-main-menu.png" className="w-12 h-12" alt="Game Support" />
           <img src="https://img.icons8.com/ios-filled/50/ffffff/shield.png" className="w-12 h-12" alt="Anti-Cheat" />
           <img src="https://img.icons8.com/ios-filled/50/ffffff/flash-on.png" className="w-12 h-12" alt="Fast" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#cheats" className="text-red-600 opacity-50 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
