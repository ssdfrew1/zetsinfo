
import React from 'react';
import Button from '../components/Button';
import { CHEATS_DATA, NEWS_DATA } from '../constants';
import CheatCard from '../components/CheatCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Glass Hero */}
      <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6">
        {/* Visual Decoration */}
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-red-600/[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-red-900/[0.03] blur-[120px] rounded-full"></div>
        
        <div className="max-w-6xl w-full bg-white/[0.01] backdrop-blur-[100px] border border-white/[0.06] rounded-[4rem] p-12 md:p-24 text-center relative z-10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="mb-12 inline-flex items-center space-x-3 px-6 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full">
             <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em]">Zets Official Portal</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase mb-10 leading-[0.8] text-white select-none">
            ZETS <br />
            <span className="text-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.4)]">CLIENTS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Лучшее комьюнити, топовый софт и гарантия качества от <span className="text-white border-b-2 border-red-600/50">HinTik</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={() => { window.location.hash = 'cheats'; }} className="px-20 py-8 text-xl rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all">В КАТАЛОГ</Button>
            <Button onClick={() => { window.location.hash = 'contacts'; }} variant="secondary" className="px-20 py-8 text-xl rounded-[2.5rem] bg-white/[0.03] border-white/10 hover:bg-white/[0.08]">СВЯЗАТЬСЯ</Button>
          </div>
        </div>

        {/* Floating Mouse Prompt */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            
            {/* Soft List Preview */}
            <div className="lg:col-span-2 space-y-16">
              <div className="flex flex-col space-y-2">
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Featured Clients</span>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter">
                  ЛУЧШИЕ <span className="text-red-600">РЕШЕНИЯ</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {CHEATS_DATA.map(cheat => (
                  <CheatCard key={cheat.id} cheat={cheat} />
                ))}
              </div>
            </div>

            {/* News Sidebar */}
            <div className="space-y-12">
               <div className="p-12 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3.5rem] sticky top-32 shadow-2xl">
                 <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-10 pb-6 border-b border-white/5">ЖУРНАЛ ИЗМЕНЕНИЙ</h2>
                 <div className="space-y-10">
                    {NEWS_DATA.map(news => (
                      <div key={news.id} className="group">
                        <div className="mb-2">
                          <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-600/10 px-2 py-0.5 rounded">{news.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors mb-2">{news.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed italic">{news.content}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-16 p-8 bg-white/[0.03] border border-white/5 rounded-3xl">
                    <p className="text-[10px] text-neutral-500 leading-relaxed font-bold uppercase tracking-widest text-center">
                      Все обновления применяются автоматически при запуске клиента.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group">
            {/* Background blur for the block */}
            <div className="absolute inset-0 bg-red-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[5rem] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl"></div>
               
               <div className="max-w-xl text-center md:text-left relative z-10">
                  <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-8 tracking-tighter leading-none">НУЖНА <br/><span className="text-red-600">ПОМОЩЬ?</span></h2>
                  <p className="text-xl text-neutral-500 font-medium italic leading-relaxed">Техническая поддержка ответит на любые твои вопросы по установке и настройке софта.</p>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                 <Button href="https://t.me/akex_C" className="px-16 py-7 rounded-[2rem] text-lg">Написать в TG</Button>
                 <Button href="https://discord.gg/kKY437NH6c" variant="secondary" className="px-16 py-7 rounded-[2rem] text-lg bg-white/5">Discord Сервер</Button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
