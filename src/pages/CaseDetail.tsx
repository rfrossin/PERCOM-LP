import { useParams, Link } from 'react-router-dom';
import { cases } from '../lib/data';
import { ArrowLeft, MapPin, Maximize2, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseDetail() {
  const { id } = useParams();
  const caseData = cases.find(c => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-[var(--color-paper)]">
        <h1 className="text-[20px] font-bold uppercase tracking-[1px]">Case de sucesso não encontrado.</h1>
        <Link to="/cases" className="text-[12px] font-bold uppercase tracking-[2px] border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-grey-mid)] hover:border-[var(--color-grey-mid)] transition-colors">
          Voltar para Cases
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-paper)] min-h-screen py-24 px-10 relative">
      <div className="max-w-[1024px] mx-auto relative z-10">
        <div className="mb-16">
          <Link 
            to="/cases" 
            className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[1px] uppercase text-[var(--color-grey-mid)] hover:text-[var(--color-ink)] transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Cases
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end mb-8 border-b border-[var(--color-ink)] pb-12">
            <h1 className="text-[36px] md:text-[64px] font-black uppercase tracking-[-2px] leading-[0.9]">
              <span className="block text-[14px] font-bold tracking-[2px] uppercase text-[var(--color-grey-mid)] mb-4">A história da Loja:</span>
              {caseData.brandName}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16">
          
          {/* TEXT COLUMN */}
          <div className="space-y-12 pr-10 border-r border-[var(--color-ink)] relative">
            <section>
              <h2 className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)] pb-2 inline-block">Informações</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 border border-[var(--color-ink)] p-3 bg-[var(--color-grey-light)]">
                  <MapPin className="w-4 h-4 text-[var(--color-ink)]" />
                  <div>
                    <p className="text-[12px] font-bold text-[var(--color-ink)] uppercase">Endereço</p>
                    <p className="text-[var(--color-ink)] font-medium text-[11px] opacity-80">{caseData.address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 border border-[var(--color-ink)] p-3 bg-[var(--color-grey-light)]">
                  <Maximize2 className="w-4 h-4 text-[var(--color-ink)]" />
                  <div>
                    <p className="text-[12px] font-bold text-[var(--color-ink)] uppercase">Metragem</p>
                    <p className="text-[var(--color-ink)] font-medium text-[11px] opacity-80">{caseData.sqm}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 border border-[var(--color-ink)] p-3 bg-[var(--color-grey-light)]">
                  <Tag className="w-4 h-4 text-[var(--color-ink)]" />
                  <div>
                    <p className="text-[12px] font-bold text-[var(--color-ink)] uppercase">Segmento</p>
                    <p className="text-[var(--color-ink)] font-medium text-[11px] opacity-80">{caseData.segment}</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)] pb-2">História da Marca</h2>
              <p className="text-[var(--color-ink)] font-medium leading-[1.6] text-[14px]">
                {caseData.history}
              </p>
            </section>

            <section>
              <h2 className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)] pb-2">Resumo da Obra</h2>
              <p className="text-[var(--color-ink)] font-medium leading-[1.6] text-[14px]">
                {caseData.summary}
              </p>
            </section>

            <section className="bg-[var(--color-ink)] text-[var(--color-paper)] p-6">
              <h2 className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--color-grey-mid)] mb-4 border-b border-[var(--color-grey-mid)]/30 pb-2">Insight do Case</h2>
              <p className="text-[14px] font-black uppercase tracking-[1px] leading-[1.4]">
                "{caseData.insight}"
              </p>
            </section>

            <div className="pt-4">
              <button 
                 onClick={() => window.open(`https://wa.me/5516988486633?text=Ol%C3%A1%2C%20vi%20o%20case%20da%20${encodeURIComponent(caseData.brandName)}%20e%20gostaria%20de%20falar%20sobre%20minha%20loja.`, '_blank')}
                 className="flex items-center justify-center border-2 border-[var(--color-ink)] px-8 py-4 font-bold uppercase text-[12px] tracking-[1px] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors w-full"
              >
                 Tenho um desafio parecido
              </button>
            </div>

          </div>

          {/* IMAGES COLUMN */}
          <div>
             <div className="space-y-6 sticky top-32">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border border-[var(--color-ink)] p-2 bg-[var(--color-grey-light)]"
                >
                  <img 
                    src={caseData.coverImage} 
                    alt={`Capa ${caseData.title}`} 
                    className="w-full h-auto aspect-video object-cover transition-all duration-700" 
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  {caseData.galleryImages.slice(0, 2).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                      className="border border-[var(--color-ink)] p-2 bg-[var(--color-grey-light)]"
                    >
                      <img 
                        src={img} 
                        alt={`Galeria ${caseData.title}`} 
                        className="w-full h-auto aspect-square object-cover transition-all duration-700" 
                      />
                    </motion.div>
                  ))}
                </div>
                
                {caseData.galleryImages[2] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border border-[var(--color-ink)] p-2 bg-[var(--color-grey-light)]"
                  >
                    <img 
                      src={caseData.galleryImages[2]} 
                      alt={`Galeria secundária ${caseData.title}`} 
                      className="w-full h-auto aspect-video object-cover transition-all duration-700" 
                    />
                  </motion.div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
