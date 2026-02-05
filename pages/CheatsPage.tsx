
import React from 'react';
import { CHEATS_DATA } from '../constants';
import CheatCard from '../components/CheatCard';

const CheatsPage: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-10 fade-in duration-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black italic uppercase mb-6">Каталог <span className="text-red-600">Читов</span></h1>
          <p className="text-neutral-400 text-lg">
            Выбирай лучшее из нашей коллекции. Все клиенты регулярно проверяются на работоспособность и безопасность.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {CHEATS_DATA.map(cheat => (
            <CheatCard key={cheat.id} cheat={cheat} />
          ))}
        </div>

        <div className="mt-20 p-8 border border-red-900/30 bg-red-900/5 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-2">Не нашел что искал?</h3>
          <p className="text-neutral-400 mb-6">Мы постоянно добавляем новые решения. Напиши нам в Discord если у тебя есть предложения.</p>
          <a href="https://discord.gg/kKY437NH6c" className="text-red-500 font-black hover:underline">ПЕРЕЙТИ В DISCORD</a>
        </div>
      </div>
    </div>
  );
};

export default CheatsPage;
