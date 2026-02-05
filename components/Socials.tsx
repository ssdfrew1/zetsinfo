
import React from 'react';
import { SOCIALS } from '../constants';

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-24 border-t border-neutral-900 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black italic text-white uppercase mb-4">Сотрудничество</h2>
          <p className="text-neutral-500">Свяжись с нами напрямую или через соцсети</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIALS.map((social) => (
            <a 
              key={social.label}
              href={social.href || '#'}
              target={social.href ? "_blank" : "_self"}
              className="flex items-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-red-600 transition-colors group"
            >
              <span className="text-4xl mr-6 grayscale group-hover:grayscale-0 transition-all">{social.icon}</span>
              <div className="text-left">
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{social.label}</p>
                <p className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{social.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
