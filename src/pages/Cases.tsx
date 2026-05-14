import { cases } from '../lib/data';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Cases() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen py-24 px-10 relative">
      <div className="max-w-[1024px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-[var(--color-ink)] pb-12">
          <div>
            <h1 className="text-[56px] md:text-[82px] font-black uppercase tracking-[-3px] leading-[0.9]">
              NOSSAS <br className="hidden md:block" /> HISTÓRIAS <span className="text-[var(--color-grey-mid)]">DE SUCESSO.</span>
            </h1>
          </div>
          <Link 
            to="/" 
            className="group inline-flex items-center gap-3 text-[12px] font-bold tracking-[1px] uppercase text-[var(--color-grey-mid)] hover:text-[var(--color-ink)] transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <Link key={c.id} to={`/cases/${c.id}`} className="block border border-[var(--color-ink)] bg-[var(--color-grey-light)] p-4 hover:border-[var(--color-grey-mid)] transition-colors group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-[var(--color-ink)]">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={c.coverImage} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-ink)] text-[var(--color-paper)]">
                    <span className="font-bold tracking-[1px] text-[10px] uppercase">{c.brandName}</span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-[20px] font-black uppercase tracking-[-1px] mb-2 text-[var(--color-ink)] leading-tight">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--color-grey-mid)] mt-auto pt-4 border-t border-[var(--color-grey-mid)]/30">
                    <MapPin className="w-3 h-3" />
                    <span className="font-bold text-[10px] uppercase tracking-[1px]">{c.address}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
