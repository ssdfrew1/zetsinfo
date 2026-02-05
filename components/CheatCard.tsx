
import React, { useState } from 'react';
import { Cheat } from '../types';
import Button from './Button';

interface CheatCardProps {
  cheat: Cheat;
}

const CheatCard: React.FC<CheatCardProps> = ({ cheat }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-red-600/40 transition-all duration-700 flex flex-col shadow-2xl">
      {/* Dynamic Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 blur-[60px] group-hover:bg-red-600/15 transition-all"></div>
      
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <img 
          src={cheat.imageUrl} 
          alt={cheat.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100"
          onError={(e) => {
            // Если твоих файлов еще нет, покажет эти красивые картинки
            if (!imgError) {
              setImgError(true);
              (e.target as HTMLImageElement).src = cheat.isPaid 
                ? 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800'
                : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        
        {/* Version Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-black/40 backdrop-blur-md text-white/60 text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border border-white/10">
            {cheat.version}
          </span>
        </div>

        {/* Pricing Badge */}
        <div className="absolute bottom-4 left-6">
          <span className="bg-red-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            {cheat.isPaid ? 'Premium Edition' : 'Community Edition'}
          </span>
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow relative z-10">
        <h3 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4 group-hover:text-red-500 transition-colors drop-shadow-lg">
          {cheat.name}
        </h3>
        
        <p className="text-neutral-400 mb-10 leading-relaxed text-sm font-medium">
          {cheat.description}
        </p>
        
        <div className="mt-auto flex flex-col sm:flex-row gap-4">
          <Button href={cheat.primaryLink} className="flex-grow py-5 rounded-[1.2rem] text-sm shadow-red-600/20">{cheat.primaryLinkText}</Button>
          <Button href={cheat.discordLink} variant="secondary" className="px-8 py-5 rounded-[1.2rem] border-white/5 bg-white/[0.04]">Discord</Button>
        </div>
      </div>
    </div>
  );
};

export default CheatCard;
