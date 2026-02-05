
import React from 'react';
import { SOCIALS } from '../constants';

const ContactsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black italic uppercase mb-6">Наши <span className="text-red-600">Контакты</span></h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Остались вопросы или хочешь обсудить сотрудничество? Мы всегда на связи.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SOCIALS.map(social => (
            <a 
              key={social.label}
              href={social.href || '#'}
              className="p-10 bg-neutral-900/50 border border-neutral-800 rounded-3xl hover:border-red-600 transition-all group flex flex-col items-center text-center"
            >
              <span className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
              <h3 className="text-red-500 font-black uppercase text-xs tracking-widest mb-2">{social.label}</h3>
              <p className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">{social.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-red-600 p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black italic uppercase text-white mb-2">Стань частью команды</h2>
            <p className="text-red-100 opacity-80">Мы всегда рады новым лицам, ютуберам и разработчикам.</p>
          </div>
          <a href="https://t.me/akex_C" className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-neutral-900 transition-colors">Написать</a>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
