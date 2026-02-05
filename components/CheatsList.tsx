
import React from 'react';
import { CHEATS_DATA } from '../constants';
import CheatCard from './CheatCard';

const CheatsList: React.FC = () => {
  return (
    <section id="cheats" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter mb-4">
              Доступный <span className="text-red-600">Софт</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              Мы отбираем только самые стабильные и эффективные решения. Каждое обновление проходит тщательную проверку.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <div className="h-1 w-24 bg-red-600 rounded"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHEATS_DATA.map((cheat) => (
            <CheatCard key={cheat.id} cheat={cheat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheatsList;
