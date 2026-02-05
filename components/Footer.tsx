
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black text-white italic">Z</div>
            <span className="font-black text-xl tracking-tighter">ZETS<span className="text-red-600">INFO</span></span>
          </div>
          
          <p className="text-neutral-600 text-sm font-medium">
            © {new Date().getFullYear()} ZETS / HinTik. All rights Reserved. Not affiliated with game developers.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://www.youtube.com/@HiNTi.k" className="text-neutral-500 hover:text-white transition-colors">YouTube</a>
            <a href="https://discord.gg/kKY437NH6c" className="text-neutral-500 hover:text-white transition-colors">Discord</a>
            <a href="https://t.me/akex_C" className="text-neutral-500 hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
