import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] pt-24 pb-12 border-t border-[var(--color-ink)]">
      <div className="max-w-[1024px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 transition-opacity hover:opacity-80">
              <img 
                src="https://i.ibb.co/fGdKsmLS/Logo-Percom-CLARA-PNG.png" 
                alt="Percom Construtora" 
                className="h-10 object-contain" 
              />
            </Link>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold text-[var(--color-grey-mid)] uppercase tracking-[2px] mb-6 border-b border-[var(--color-grey-mid)]/30 pb-2">Contatos e Links</h3>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-[1px]">
              <li>
                <button 
                  onClick={() => window.open('https://wa.me/5516988486633?text=Ol%C3%A1', '_blank')}
                  className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors text-left"
                >
                  WhatsApp: +55 16 98848-6633
                </button>
              </li>
              <li>
                <a href="mailto:comercial.percom@gmail.com" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  comercial.percom@gmail.com
                </a>
              </li>
              <li>
                <Link to="/sobre" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  A Percom
                </Link>
              </li>
              <li>
                <Link to="/comercial" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  Comercial
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/residencial" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  Residencial
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">
                  Galeria de Cases
                </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/percomconstrutora/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/percom-construtora/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-grey-light)] hover:text-[var(--color-paper)] transition-colors block">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-[var(--color-grey-mid)] uppercase tracking-[2px] mb-6 border-b border-[var(--color-grey-mid)]/30 pb-2">Endereço</h3>
            <address className="text-[var(--color-grey-light)] not-italic leading-[1.6] text-xs font-semibold uppercase tracking-[1px]">
              Rua José Leal n° 1441<br />
              Alto da Boa Vista<br />
              Ribeirão Preto | SP
            </address>
          </div>
        </div>

        <div className="border-t border-[var(--color-grey-mid)]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-[var(--color-grey-mid)] uppercase tracking-[1px]">
          <p>© {new Date().getFullYear()} Percom Construtora. Todos os direitos reservados.</p>
          <img src="https://i.ibb.co/fGdKsmLS/Logo-Percom-CLARA-PNG.png" alt="Percom Construtora" className="h-6 opacity-50 object-contain" />
        </div>
      </div>
    </footer>
  );
}
