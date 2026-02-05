
import React from 'react';

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Главная', hash: '#home' },
    { id: 'cheats', label: 'Читы', hash: '#cheats' },
    { id: 'contacts', label: 'Контакты', hash: '#contacts' }
  ];

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-[100] bg-black/40 backdrop-blur-[40px] border border-white/10 h-20 rounded-[2.5rem] shadow-2xl">
      <div className="px-10 w-full h-full flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-red-600 rounded-[1rem] flex items-center justify-center font-black text-xl italic text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">Z</div>
          <div className="hidden sm:flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-red-500 transition-colors">ZETS<span className="text-red-600">INFO</span></span>
            <span className="text-[7px] text-neutral-500 font-bold tracking-[0.4em] uppercase">Premium Experience</span>
          </div>
        </a>
        
        <nav className="flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.hash}
              className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all hover:text-red-500 relative py-2 ${
                currentPage === item.id ? 'text-red-600' : 'text-neutral-400'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)]"></span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
           <a 
             href="https://www.youtube.com/@HiNTi.k" 
             target="_blank" 
             className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-[9px] hover:bg-red-700 transition-all uppercase tracking-[0.2em] shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:shadow-red-600/50"
           >
             YouTube
           </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
