import SEO from "../components/SEO";
import { motion } from 'motion/react';
import { ArrowRight, Building2, HardHat, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <SEO title="GRUPO PERCOM | Construção Especializada" description="A Percom é uma construtora e incorporadora especializada em múltiplos segmentos, dividida em 4 verticais de atuação: Corporativa/Industrial, Comercial, Residencial e Incorporação." image="https://i.ibb.co/VcFJb7d3/GRUPO.jpg" />
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden border-b border-[var(--color-ink)]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://i.ibb.co/PzhDMrDt/Chat-GPT-Image-9-de-jul-de-2026-17-51-20.png" 
            alt="Hero background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[var(--color-paper)]/50 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-[1024px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-[var(--color-paper)]/90 p-8 md:p-12 border border-[var(--color-ink)] backdrop-blur-sm"
          >
            <h1 className="text-[40px] md:text-[80px] font-black uppercase tracking-[-2px] leading-[0.9] text-[var(--color-ink)] mb-8">
              Grupo <br /> Percom
            </h1>
            <p className="text-[16px] md:text-[24px] font-medium text-[var(--color-ink)] mb-12 max-w-2xl leading-relaxed">
              Soluções completas de engenharia e construção para o seu negócio, 
              sua empresa ou sua residência. Entregamos excelência e previsibilidade 
              em cada etapa do projeto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5516988486633?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20do%20Grupo%20Percom."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)] text-[14px] font-bold uppercase tracking-[1px] hover:bg-[var(--color-grey-mid)] transition-colors text-center inline-flex items-center justify-center gap-2 group"
              >
                Fale com um Especialista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-b border-[var(--color-ink)] bg-[var(--color-grey-light)]">
        <div className="max-w-[1024px] mx-auto px-6 md:px-10">
          <div className="mb-16 text-center">
            <h2 className="text-[12px] font-bold tracking-[2px] uppercase text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-2 inline-block mb-4">Nossas Verticais</h2>
            <h3 className="text-[32px] md:text-[56px] font-black uppercase tracking-[-1px] leading-[1] text-[var(--color-ink)]">
              Especialistas em <br/> Construir
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/comercial" className="group block h-full">
              <div className="bg-[var(--color-paper)] border border-[var(--color-ink)] p-8 h-full transition-colors duration-300 group-hover:bg-[var(--color-ink)] flex flex-col">
                <HardHat className="w-12 h-12 text-[var(--color-ink)] mb-6 group-hover:text-[var(--color-paper)] transition-colors" />
                <h4 className="text-[24px] font-black uppercase tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-4 transition-colors">Percom Comercial</h4>
                <p className="text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-8 flex-grow transition-colors leading-[1.6]">
                  A construtora com o DNA do varejo. Construímos e reformamos sua loja ou franquia no prazo, padrão e sem dor de cabeça.
                </p>
                <div className="text-[12px] font-bold uppercase tracking-[1px] text-[var(--color-ink)] group-hover:text-[var(--color-paper)] flex items-center gap-2 transition-colors">
                  Ver Vertical <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/corporate" className="group block h-full">
              <div className="bg-[var(--color-paper)] border border-[var(--color-ink)] p-8 h-full transition-colors duration-300 group-hover:bg-[var(--color-ink)] flex flex-col">
                <Building2 className="w-12 h-12 text-[var(--color-ink)] mb-6 group-hover:text-[var(--color-paper)] transition-colors" />
                <h4 className="text-[24px] font-black uppercase tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-4 transition-colors">Percom Corporate</h4>
                <p className="text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-8 flex-grow transition-colors leading-[1.6]">
                  Soluções para grandes empresas, escritórios e edifícios corporativos. Eficiência e alto padrão para o seu ambiente de trabalho.
                </p>
                <div className="text-[12px] font-bold uppercase tracking-[1px] text-[var(--color-ink)] group-hover:text-[var(--color-paper)] flex items-center gap-2 transition-colors">
                  Ver Vertical <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/residencial" className="group block h-full">
              <div className="bg-[var(--color-paper)] border border-[var(--color-ink)] p-8 h-full transition-colors duration-300 group-hover:bg-[var(--color-ink)] flex flex-col">
                <HomeIcon className="w-12 h-12 text-[var(--color-ink)] mb-6 group-hover:text-[var(--color-paper)] transition-colors" />
                <h4 className="text-[24px] font-black uppercase tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-4 transition-colors">Percom Residencial</h4>
                <p className="text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-paper)] mb-8 flex-grow transition-colors leading-[1.6]">
                  Alto padrão e excelência para construir a casa dos seus sonhos, com a mesma precisão e rigor exigido nos nossos projetos corporativos.
                </p>
                <div className="text-[12px] font-bold uppercase tracking-[1px] text-[var(--color-ink)] group-hover:text-[var(--color-paper)] flex items-center gap-2 transition-colors">
                  Ver Vertical <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="relative py-24 border-b border-[var(--color-ink)] bg-[var(--color-paper)] overflow-hidden">
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://i.ibb.co/PzhDMrDt/Chat-GPT-Image-9-de-jul-de-2026-17-51-20.png" 
            alt="Nossa Trajetoria background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[var(--color-paper)]/80 backdrop-blur-[2px]" />
        </div>
         <div className="max-w-[1024px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 bg-[var(--color-paper)]/90 p-8 md:p-12 border border-[var(--color-ink)] backdrop-blur-sm">
               <h2 className="text-[28px] md:text-[48px] font-black uppercase tracking-[-1px] leading-[1] text-[var(--color-ink)] mb-6">Nossa <br/> Trajetória</h2>
               <p className="text-[16px] font-medium text-[var(--color-ink)] leading-[1.6] mb-8">
                  Com anos de experiência em execução de obras desafiadoras, o Grupo Percom se consolidou como um parceiro de confiança para quem busca excelência, prazo e qualidade, seja no varejo, mundo corporativo ou alto padrão residencial.
               </p>
               <Link 
                to="/sobre"
                className="px-6 py-3 border-2 border-[var(--color-ink)] text-[var(--color-ink)] text-[12px] font-bold uppercase tracking-[1px] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors inline-block"
               >
                  Conheça a Percom
               </Link>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-[4/3] border border-[var(--color-ink)] bg-[var(--color-grey-light)] overflow-hidden">
               <img src="https://i.ibb.co/VcFJb7d3/GRUPO.jpg" alt="Obra Grupo Percom" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
         </div>
      </section>
    </div>
  );
}
