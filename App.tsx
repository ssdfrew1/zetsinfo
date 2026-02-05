
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheatsPage from './pages/CheatsPage';
import ContactsPage from './pages/ContactsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'cheats', 'contacts'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'cheats': return <CheatsPage />;
      case 'contacts': return <ContactsPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white flex flex-col font-['Inter']">
      <Header currentPage={currentPage} />
      <main className="flex-grow pt-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
