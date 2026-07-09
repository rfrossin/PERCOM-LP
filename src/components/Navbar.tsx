import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5516988486633?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento%20para%20minha%20loja.', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[var(--color-ink)] border-b border-[var(--color-ink)] z-[60]">
      <div className="max-w-[1024px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <img 
            src="https://i.ibb.co/fGdKsmLS/Logo-Percom-CLARA-PNG.png" 
            alt="Percom Construtora" 
            className="h-8 md:h-10 object-contain group-hover:opacity-80 transition-opacity" 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/sobre" className="text-[12px] font-semibold text-[var(--color-paper)] uppercase tracking-[1px] hover:text-[var(--color-grey-mid)] transition-colors">
            A Percom
          </Link>
          <Link to="/comercial" className="text-[12px] font-semibold text-[var(--color-paper)] uppercase tracking-[1px] hover:text-[var(--color-grey-mid)] transition-colors">
            Comercial
          </Link>
          <Link to="/corporate" className="text-[12px] font-semibold text-[var(--color-paper)] uppercase tracking-[1px] hover:text-[var(--color-grey-mid)] transition-colors">
            Corporate
          </Link>
          <Link to="/residencial" className="text-[12px] font-semibold text-[var(--color-paper)] uppercase tracking-[1px] hover:text-[var(--color-grey-mid)] transition-colors">
            Residencial
          </Link>
          <Link to="/cases" className="text-[12px] font-semibold text-[var(--color-paper)] uppercase tracking-[1px] hover:text-[var(--color-grey-mid)] transition-colors">
            Cases
          </Link>
          <button 
            onClick={handleWhatsApp}
            className="px-5 py-2.5 bg-[var(--color-paper)] text-[var(--color-ink)] text-[11px] font-semibold uppercase tracking-[1px] hover:bg-[var(--color-grey-light)] transition-colors"
          >
            Faça seu Orçamento
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-[var(--color-paper)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[var(--color-ink)] z-40 transition-transform duration-300 flex flex-col items-center justify-center gap-6 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link 
            to="/sobre" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-paper)] uppercase tracking-[2px] hover:text-[var(--color-grey-mid)] transition-colors"
          >
            A Percom
          </Link>
          <Link 
            to="/comercial" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-paper)] uppercase tracking-[2px] hover:text-[var(--color-grey-mid)] transition-colors"
          >
            Comercial
          </Link>
          <Link 
            to="/corporate" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-paper)] uppercase tracking-[2px] hover:text-[var(--color-grey-mid)] transition-colors"
          >
            Corporate
          </Link>
          <Link 
            to="/residencial" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-paper)] uppercase tracking-[2px] hover:text-[var(--color-grey-mid)] transition-colors"
          >
            Residencial
          </Link>
          <Link 
            to="/cases" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-paper)] uppercase tracking-[2px] hover:text-[var(--color-grey-mid)] transition-colors"
          >
            Cases
          </Link>
          <button 
            onClick={() => {
              setIsOpen(false);
              handleWhatsApp();
            }}
            className="mt-6 px-8 py-4 border-2 border-[var(--color-paper)] text-[var(--color-paper)] text-[14px] font-bold uppercase tracking-[1px] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] transition-colors"
          >
            Faça seu Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
}
