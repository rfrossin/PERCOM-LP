import SEO from "../components/SEO";
import { motion } from 'motion/react';
import { Users, Target, ShieldCheck } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <SEO title="GRUPO PERCOM | Construção Especializada" description="A Percom é uma construtora e incorporadora especializada em múltiplos segmentos, dividida em 4 verticais de atuação: Corporativa/Industrial, Comercial, Residencial e Incorporação." image="https://i.ibb.co/VcFJb7d3/GRUPO.jpg" />
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden border-b border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="max-w-[1024px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-[40px] md:text-[80px] font-black uppercase tracking-[-2px] leading-[0.9] mb-8">
              A Percom
            </h1>
            <p className="text-[16px] md:text-[24px] font-medium opacity-80 max-w-2xl leading-relaxed">
              Construindo solidez através de execução impecável e foco no cliente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 border-b border-[var(--color-ink)] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://i.ibb.co/PzhDMrDt/Chat-GPT-Image-9-de-jul-de-2026-17-51-20.png" 
            alt="Nossa História background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[var(--color-paper)]/50 backdrop-blur-[2px]" />
        </div>
         <div className="max-w-[1024px] mx-auto px-6 md:px-10 relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
               <div className="md:w-1/3">
                  <h2 className="text-[28px] md:text-[40px] font-black uppercase tracking-[-1px] leading-[1] text-[var(--color-ink)] mb-6 sticky top-24">Nossa <br/> História</h2>
               </div>
               <div className="md:w-2/3 space-y-8 text-[16px] leading-[1.6] font-medium text-[var(--color-ink)] bg-[var(--color-paper)]/90 p-8 md:p-12 border border-[var(--color-ink)] backdrop-blur-sm">
                  <p>O Grupo Percom nasceu da percepção de uma lacuna no mercado da construção civil: a necessidade de empresas que aliassem conhecimento técnico com um atendimento extremamente profissional e voltado ao retorno do investimento de seus clientes.</p>
                  <p>Nossa trajetória se solidificou atendendo a marcas varejistas que precisavam de agilidade extrema e precisão, onde o relógio sempre joga contra. Trouxemos essa eficiência de cronograma e gerenciamento de projetos para as outras verticais de nossa atuação: Corporate e Residencial.</p>
                  <p>Hoje, atendemos em todo o interior de São Paulo, construindo não apenas edifícios e lojas, mas alicerces para o sucesso de marcas e lares.</p>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 border-b border-[var(--color-ink)]">
         <div className="max-w-[1024px] mx-auto px-6 md:px-10">
            <div className="mb-8">
              <h2 className="text-[28px] md:text-[40px] font-black uppercase tracking-[-1px] leading-[1] text-[var(--color-ink)] mb-12">
                Nossos Sócios
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <div className="flex flex-col group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
                    <img src="https://i.ibb.co/N6FpL8Js/Arq-Fabio-Marzola.jpg" alt="Arq. Fabio Marzola" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-2">Arq. Fabio Marzola</h3>
                  <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                    Especialista em design estratégico e concepção de projetos, liderando a visão estética e funcional de cada obra com excelência arquitetônica.
                  </p>
                </div>
                <div className="flex flex-col group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
                    <img src="https://i.ibb.co/sd82p3Hm/Eng-Paulo-Marques.jpg" alt="Eng. Paulo Marques" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-2">Eng. Paulo Marques</h3>
                  <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                    Focado na viabilidade estrutural e inovação técnica. Garante que as complexidades de engenharia sejam resolvidas com precisão e segurança.
                  </p>
                </div>
                <div className="flex flex-col group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
                    <img src="https://i.ibb.co/wF3RvnMg/Eng-Fabr-cio-Coelho.jpg" alt="Eng. Fabrício Coelho" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-2">Eng. Fabrício Coelho</h3>
                  <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                    Responsável pelo cronograma e gestão do canteiro de obras, assegurando que o padrão Percom de pontualidade seja cumprido à risca.
                  </p>
                </div>
              </div>

              <div className="aspect-video md:aspect-[21/9] overflow-hidden border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
                <img src="https://i.ibb.co/0VFyMNTb/S-cios.jpg" alt="Sócios do Grupo Percom" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
         </div>
      </section>

      <section className="py-24 border-b border-[var(--color-ink)] bg-[var(--color-grey-light)]">
        <div className="max-w-[1024px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <Target className="w-12 h-12 text-[var(--color-ink)] mb-6" />
               <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-4">Missão</h3>
               <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                  Entregar obras com alto padrão técnico, de forma pontual e sem sobressaltos, facilitando o crescimento de nossos clientes.
               </p>
            </div>
            <div>
               <ShieldCheck className="w-12 h-12 text-[var(--color-ink)] mb-6" />
               <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-4">Valores</h3>
               <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                  Transparência total, compromisso com o prazo, excelência na execução, respeito ao projeto original e foco no resultado final.
               </p>
            </div>
            <div>
               <Users className="w-12 h-12 text-[var(--color-ink)] mb-6" />
               <h3 className="text-[20px] font-black uppercase tracking-tight text-[var(--color-ink)] mb-4">Nosso Time</h3>
               <p className="text-[14px] font-medium text-[var(--color-ink)] opacity-80 leading-[1.6]">
                  Formado por engenheiros, arquitetos e técnicos altamente capacitados, nosso time respira a obra para que você não precise fazê-lo.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
