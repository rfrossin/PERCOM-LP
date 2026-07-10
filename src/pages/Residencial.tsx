import { motion } from 'motion/react';
import { cases } from '../lib/data';
import { ArrowRight, CheckCircle2, Timer, LayoutTemplate, Briefcase, ChevronRight, TrendingUp, HandCoins, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const handleWhatsApp = () => {
  window.open('https://wa.me/5516988486633?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento.', '_blank');
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 border-b border-[var(--color-ink)] pb-8">
    <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-[-2px] leading-[0.9]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-lg text-[var(--color-grey-mid)] max-w-2xl font-semibold">
        {subtitle}
      </p>
    )}
  </div>
);

export default function Home() {
  return (
    <div className="bg-[var(--color-paper)] flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative w-full border-b border-[var(--color-ink)] pt-12 md:pt-20 bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075" 
            alt="Hero background"
            className="w-full h-full object-cover opacity-95" 
          />
          <div className="absolute inset-0 bg-[var(--color-paper)]/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="max-w-[1024px] mx-auto w-full flex flex-col lg:border-x border-[var(--color-ink)] relative z-10">
          <div className="p-10 relative flex flex-col justify-center min-h-[60vh]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[14px] uppercase tracking-[4px] text-[var(--color-paper)] drop-shadow-md mb-3 font-bold"
            >
              Construtora Residencial em Ribeirão Preto
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[48px] md:text-[82px] leading-[0.9] font-black uppercase tracking-[-3px] mb-6"
            >
              <span className="block text-[var(--color-ink)]">SEU IMÓVEL</span>
              <span className="block text-[var(--color-paper)] drop-shadow-md">DO JEITO QUE VOCÊ</span>
              <span className="block text-[var(--color-ink)]">DESEJA.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] leading-[1.4] text-[var(--color-ink)] mb-10 max-w-[480px] font-medium"
            >
              Uma Construtora de Alto Padrão Residencial, atuando em todo o interior de São Paulo. Entregamos a casa dos seus sonhos PRONTA, sem dor de cabeça, no prazo e com foco total no retorno do seu investimento.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button 
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-3 border-2 border-[var(--color-ink)] px-8 py-4 font-bold uppercase text-[14px] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
              >
                Entre em contato <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex flex-col justify-center text-[11px] font-bold uppercase tracking-[1px]">
                <span>+50 Espaços</span>
                <span className="text-[var(--color-grey-mid)]">Entregues</span>
              </div>
            </motion.div>

            <div className="hidden xl:block absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[4px] font-bold whitespace-nowrap text-[var(--color-ink)]">
              CONSTRUÇÃO RESIDENCIAL • 2024
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 2: O QUE VOCÊ ESPERA */}
      <section className="py-24 px-10 w-full relative border-b border-[var(--color-ink)] bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070" 
            alt="O que você deseja background"
            className="w-full h-full object-cover opacity-95" 
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="max-w-[1024px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16">
            <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-[-2px] leading-[0.9] max-w-4xl text-[var(--color-paper)] drop-shadow-lg">
              O que você deseja do seu Imóvel?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
            <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
              <Briefcase className="w-6 h-6 text-[var(--color-ink)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4">Vida e Família</h3>
              <p className="text-[var(--color-ink)] font-medium text-sm leading-[1.6]">
                Criar memórias inesquecíveis e aproveitar cada momento com quem você mais ama em um espaço pensado para o conforto e bem-estar de todos.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-ink)] text-[var(--color-paper)] border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
              <HardHat className="w-6 h-6 text-[var(--color-grey-mid)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4 text-[var(--color-paper)]">Investimento</h3>
              <p className="text-[var(--color-grey-mid)] font-medium text-sm leading-[1.6]">
                Garantir que seu patrimônio seja construído com máxima qualidade, excelência construtiva e foco na valorização do seu capital ao longo do tempo.
              </p>
            </div>
            <div className="p-8">
              <TrendingUp className="w-6 h-6 text-[var(--color-ink)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4">Alugar ou Vender</h3>
              <p className="text-[var(--color-ink)] font-medium text-sm leading-[1.6]">
                Entregar uma casa de alto padrão, atrativa e pronta para rentabilizar, maximizando o seu retorno seja na locação ou na venda do imóvel.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-start">
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)] text-[14px] font-bold uppercase tracking-[1px] hover:bg-[var(--color-grey-dark)] transition-colors group"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* BANNER 3: ETAPAS / POR QUE A PERCOM */}
      <section className="py-24 px-10 w-full border-b border-[var(--color-ink)]">
        <div className="max-w-[1024px] mx-auto mb-12">
          <h2 className="text-3xl md:text-[40px] font-black uppercase tracking-[-1.5px] leading-[1.1] max-w-3xl">
            Te acompanhamos em todas as etapas de seu projeto e execução residencial.
          </h2>
        </div>
        <div className="max-w-[1024px] mx-auto border border-[var(--color-ink)] grid grid-cols-1 md:grid-cols-2 bg-[var(--color-grey-light)]">
          <div className="p-10 border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
            <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-6 border-b border-[var(--color-ink)] pb-4">Nossas Etapas</h3>
            <div className="space-y-6">
              {[
                "Estudo de Viabilidade e Projetos Executivos",
                "Aprovação em Órgãos e Condomínios (Prefeitura, Associação, etc)",
                "Administração e Gestão de Obra do seu Imóvel",
                "Gestão de Fornecedores e Múltiplas Frentes Simultâneas",
                "Entrega Final, Limpeza e Manual do Proprietário"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[12px] font-black opacity-30 mt-0.5">0{i+1}</span>
                  <span className="text-[15px] font-semibold leading-[1.4] text-[var(--color-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 bg-[var(--color-ink)] text-[var(--color-paper)]">
            <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-6 border-b border-[var(--color-grey-mid)]/30 pb-4">Por que a Percom?</h3>
            <div className="text-[16px] leading-[1.6] font-medium text-[var(--color-grey-light)] pt-2 md:pt-6 space-y-4">
              <p>Seu trabalho: Contratar a Percom e compartilhar o sonho da sua casa.</p>
              <p>Foque no seu bem-estar, que focamos em entregar a casa que você e sua família merecem para VIVER!</p>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="mt-12 inline-flex items-center gap-3 border-2 border-[var(--color-paper)] px-8 py-4 font-bold uppercase text-[12px] text-[var(--color-paper)] transition-colors hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* BANNER 5: DNA */}
      <section className="py-24 px-10 w-full border-b border-[var(--color-ink)]">
        <div className="max-w-[1024px] mx-auto border border-[var(--color-ink)] flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[var(--color-ink)]">
            <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-[-2px] leading-[0.9] mb-12">O DNA<br/>de Alto Padrão<br/><span className="text-[var(--color-grey-mid)]">da Percom</span></h2>
            <ul className="space-y-6">
              {[
                "Trabalhamos em todas etapas da sua obra",
                "Lidamos com todos os envolvidos no processo",
                "Expertise em Construção Residencial de Alto Padrão",
                "Gestão de múltiplas frentes de trabalho em espaços reduzidos",
                "Disposição de HUB de parceiros especialistas em Projetos Residenciais",
                "Agilidade executiva e respeito inegociável aos prazos",
                "Condutas e serviços pró-residencial (ex: plantão na mudança)"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start border-b border-[var(--color-grey-mid)]/30 pb-3 last:border-0">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-ink)] shrink-0" />
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleWhatsApp}
              className="mt-12 inline-flex items-center gap-3 border-2 border-[var(--color-ink)] px-8 py-4 font-bold uppercase text-[14px] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors w-full justify-center"
            >
              Conheça a PERCOM
            </button>
          </div>
          <div className="lg:w-1/2 bg-[var(--color-ink)] p-8 md:p-12 text-[var(--color-paper)] flex flex-col justify-center relative overflow-hidden">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -right-20 -top-20 opacity-10"
            >
              <LayoutTemplate className="w-[300px] h-[300px]" />
            </motion.div>
            <h3 className="text-[28px] md:text-[40px] leading-[1] font-black uppercase tracking-[-1px] mb-8 relative z-10">O que significa o nosso padrão residencial?</h3>
            <div className="space-y-6 relative z-10">
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Não construímos apenas paredes, construímos lares.</p>
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Entendemos que atraso na entrega da casa não é só um incômodo, é frustração e dor de cabeça.</p>
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Por isso nossa metodologia foi desenhada para a excelência técnica e previsibilidade.</p>
            </div>
            
            <div className="mt-auto pt-16 relative z-10 flex gap-4">
               <div className="flex-1 border-t border-[var(--color-grey-mid)]/30 pt-4">
                 <div className="text-4xl md:text-5xl font-black mb-1">100%</div>
                 <div className="text-[10px] md:text-[12px] font-bold uppercase tracking-[2px] text-[var(--color-grey-mid)]">Foco</div>
               </div>
               <div className="flex-1 border-t border-[var(--color-grey-mid)]/30 pt-4">
                 <div className="text-4xl md:text-5xl font-black mb-1">ZERO</div>
                 <div className="text-[10px] md:text-[12px] font-bold uppercase tracking-[2px] text-[var(--color-grey-mid)]">Atrasos</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 7: PROCESSO */}
      <section className="py-24 px-10 w-full relative border-y border-[var(--color-ink)]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
            alt="Processo background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[var(--color-paper)]/70 backdrop-blur-[3px]" />
        </div>
        <div className="max-w-[1024px] mx-auto relative z-10">
          <SectionHeader title="Processo de contratação" />
          
          <div className="border border-[var(--color-ink)] border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {[
                { n: "01", t: "Entendimento", d: "Compreensão do estilo de vida da família e do projeto arquitetônico." },
                { n: "02", t: "Alinhamento", d: "Definição de cronogramas e restrições do condomínio." },
                { n: "03", t: "Levantamento", d: "Levantamento topográfico e análise de sondagem." },
                { n: "04", t: "Orçamento", d: "Emissão do Budget da obra e planejamento físico-financeiro." },
                { n: "05", t: "Assinatura", d: "Fechamento contratual e alinhamento de expectativas." },
                { n: "06", t: "Cronograma", d: "Apresentação oficial do cronograma detalhado para a família." },
              ].map((p, i) => (
                <div key={i} className="p-8 border-b lg:border-r border-[var(--color-ink)] lg:[&:nth-child(3n)]:border-r-0 relative bg-[var(--color-grey-light)]">
                  <div className="text-[12px] font-black uppercase tracking-[2px] text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-2 mb-4">Etapa {p.n}</div>
                  <h4 className="text-[16px] font-black uppercase tracking-tight mb-2">{p.t}</h4>
                  <p className="text-[var(--color-ink)] font-medium text-sm leading-[1.4] opacity-80">{p.d}</p>
                </div>
              ))}
            </div>
            {/* ETAPA 7: INÍCIO EM DESTAQUE */}
            <div className="p-12 md:p-20 border-b border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] flex flex-col items-center text-center">
              <div className="text-[12px] font-black uppercase tracking-[2px] text-[var(--color-grey-mid)] border-b border-[var(--color-grey-mid)]/30 pb-2 mb-6">Etapa 07</div>
              <h4 className="text-[32px] md:text-[64px] font-black uppercase tracking-[-2px] leading-[0.9] mb-6">Início</h4>
              <p className="text-[var(--color-paper)] font-medium text-lg leading-[1.4] max-w-xl opacity-80">Kickoff da obra, relatórios periódicos e acompanhamento ostensivo.</p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
             <button 
               onClick={handleWhatsApp}
               className="bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-4 text-[13px] font-bold tracking-[1px] uppercase hover:bg-[var(--color-grey-mid)] transition-colors"
             >
               Faça sua reunião de alinhamento já
             </button>
          </div>
        </div>
      </section>

      {/* BANNER 8: SEM SURPRESAS */}
      <section className="py-24 px-10 bg-[var(--color-grey-light)] w-full border-t border-[var(--color-ink)]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Timer, text: "Prazo Previsível" },
              { icon: HandCoins, text: "Custo Controlado" },
              { icon: LayoutTemplate, text: "Padrão Mantido" },
              { icon: CheckCircle2, text: "Entrega Confiável" }
            ].map((Item, i) => (
              <div key={i} className="bg-[var(--color-paper)] border border-[var(--color-ink)] p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform group">
                <div className="w-16 h-16 bg-[var(--color-ink)] transition-colors flex items-center justify-center mb-6">
                  <Item.icon className="w-8 h-8 text-[var(--color-paper)]" />
                </div>
                <h4 className="text-[16px] font-black uppercase tracking-[1px] text-[var(--color-ink)]">{Item.text}</h4>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-[var(--color-ink)] max-w-4xl mx-auto">
             <h2 className="text-[32px] md:text-[64px] font-black uppercase tracking-[-2px] leading-[0.9] text-[var(--color-ink)] mb-8">
               Entregamos seu Lar,<br/> pronto para morar.
             </h2>
             <p className="text-[16px] md:text-[20px] font-bold uppercase tracking-[1px] text-[var(--color-ink)] opacity-80 mb-8">
               No prazo, no padrão e sem dor para você e sua família.
             </p>
             <p className="text-sm font-medium text-[var(--color-ink)] opacity-70 max-w-2xl mx-auto leading-relaxed">
               A Percom é especializada em <strong className="font-bold">construção residencial</strong> e <strong className="font-bold">construção de casas de alto padrão</strong>. Atuamos como a principal <strong className="font-bold">construtora de luxo</strong> com sede na região de <strong className="font-bold">Ribeirão Preto</strong>, atendendo a todo o <strong className="font-bold">interior de São Paulo</strong> e oferecendo soluções completas de engenharia para condomínios fechados e residências exclusivas.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
