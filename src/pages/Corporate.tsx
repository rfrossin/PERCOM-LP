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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
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
              Construtora Corporate em Ribeirão Preto
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[48px] md:text-[82px] leading-[0.9] font-black uppercase tracking-[-3px] mb-6"
            >
              <span className="block text-[var(--color-ink)]">SEU ESPAÇO</span>
              <span className="block text-[var(--color-paper)] drop-shadow-md">PRONTO PARA</span>
              <span className="block text-[var(--color-ink)]">SUA OPERAÇÃO</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] leading-[1.4] text-[var(--color-ink)] mb-10 max-w-[480px] font-medium"
            >
              Uma Construtora com DNA focado no mundo corporativo, atuando em todo o interior de São Paulo. Entregamos seu escritório e empresa PRONTOS, sem dor de cabeça, no prazo e com foco total no retorno do seu investimento.
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
              CONSTRUÇÃO CORPORATIVA • 2024
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 2: O QUE VOCÊ ESPERA */}
      <section className="py-24 px-10 w-full relative border-b border-[var(--color-ink)] bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
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
            className="mb-16"
          >
            <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-[-2px] leading-[0.9] max-w-4xl text-[var(--color-paper)] drop-shadow-lg">
              O que você deseja do seu espaço físico para seu negócio, funcionários e colaboradores?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--color-ink)] bg-[var(--color-grey-light)]">
            <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
              <Briefcase className="w-6 h-6 text-[var(--color-ink)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4">Foco do Empresário</h3>
              <p className="text-[var(--color-ink)] font-medium text-sm leading-[1.6]">
                Ter um Espaço operante e que agregue valor para sua empresa no menor tempo e esforço possível.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-ink)] text-[var(--color-paper)] border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
              <HardHat className="w-6 h-6 text-[var(--color-grey-mid)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4 text-[var(--color-paper)]">Foco da Percom</h3>
              <p className="text-[var(--color-grey-mid)] font-medium text-sm leading-[1.6]">
                Fazer TUDO para isso acontecer. Nossa equipe absorve a complexidade da obra para que você respire aliviado.
              </p>
            </div>
            <div className="p-8">
              <TrendingUp className="w-6 h-6 text-[var(--color-ink)] mb-6" />
              <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-4">O Resultado</h3>
              <p className="text-[var(--color-ink)] font-medium text-sm leading-[1.6]">
                Mais eficiência por m² no seu escritório. Sem dor de cabeça e surpresas difíceis durante o processo.
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
            Te acompanhamos em todas as etapas da sua expansão.
          </h2>
        </div>
        <div className="max-w-[1024px] mx-auto border border-[var(--color-ink)] grid grid-cols-1 md:grid-cols-2 bg-[var(--color-grey-light)]">
          <div className="p-10 border-b md:border-b-0 md:border-r border-[var(--color-ink)]">
            <h3 className="text-[14px] font-black uppercase tracking-[1px] mb-6 border-b border-[var(--color-ink)] pb-4">Nossas Etapas</h3>
            <div className="space-y-6">
              {[
                "Viabilidade e Projeto executivos",
                "Relacionamento com entidades envolvidas (Shopping, Marcas, etc…)",
                "Administração e Gestão das obras do seu Espaço",
                "Gestão de Múltiplas Frentes Simultâneas",
                "Entrega e Plantão de Inauguração"
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
              <p>Seu trabalho: Contratar a Percom e nos abrir seu sonho de Espaço.</p>
              <p>Foque no seu negócio, que focamos em entregar o espaço que ele precisa para CRESCER!</p>
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

      {/* BANNER 4: DESAFIOS */}
      <section className="py-24 px-10 bg-[var(--color-grey-light)] w-full border-b border-[var(--color-ink)]">
        <div className="max-w-[1024px] mx-auto">
          <SectionHeader 
            title="Desafios reais na expansão dos seus Espaços"
            subtitle="Conhecemos as dores da construção corporativa porque vivemos isso todos os dias."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--color-ink)] bg-[var(--color-paper)]">
            {[
              { title: "Fora da Rotina", text: "Ter que lidar com os desafios complexos de uma obra enquanto toca o dia-a-dia do seu negócio." },
              { title: "Tempo é Dinheiro", text: "Atraso no comércio não é o mesmo que atraso residencial; significa estoque parado e time ocioso." },
              { title: "Beleza x Retorno", text: "O papel aceita tudo. Nem tudo que é bonito gera retorno de conversão na operação do corporate." },
              { title: "Experiência de Marca", text: "O espaço físico deve comunicar e ser uma extensão ativa da entrega de valor da sua empresa." },
              { title: "Decisões sem Referência", text: "Você sabe comprar para o seu negócio, mas não contrata pedreiros e tijolos todo dia." },
              { title: "Múltiplos Intermediários", text: "Responsabilidades com marcas, regras de shoppings, leis municipais. Muita gente para uma única obra." },
            ].map((d, i) => (
              <div key={i} className="p-8 border-b border-r border-[var(--color-ink)]">
                <h4 className="text-[14px] font-black uppercase tracking-[1px] mb-3">{d.title}</h4>
                <p className="text-[var(--color-ink)] opacity-80 font-medium text-sm leading-[1.6]">{d.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto border-t border-[var(--color-ink)] pt-8">
             <p className="text-xl font-medium text-[var(--color-ink)]">Tocar seu negócio e construir seu escritório são grandes desafios simultâneos, então, <span className="font-black uppercase tracking-tight">queremos te ajudar!</span></p>
          </div>
        </div>
      </section>

      {/* BANNER 5: DNA */}
      <section className="py-24 px-10 w-full border-b border-[var(--color-ink)]">
        <div className="max-w-[1024px] mx-auto border border-[var(--color-ink)] flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[var(--color-ink)]">
            <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-[-2px] leading-[0.9] mb-12">O DNA<br/>Pró-Corporate<br/><span className="text-[var(--color-grey-mid)]">da Percom</span></h2>
            <ul className="space-y-6">
              {[
                "Trabalhamos em todas etapas da sua expansão física",
                "Lidamos com todos os envolvidos no processo",
                "Expertise de Construção intensiva no Corporate",
                "Gestão de múltiplas frentes de trabalho em espaços reduzidos",
                "Disposição de HUB de parceiros especialistas em Espaços",
                "Agilidade executiva e respeito inegociável aos prazos",
                "Condutas e serviços pró-corporate (ex: plantão em inauguração)"
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
            <h3 className="text-[28px] md:text-[40px] leading-[1] font-black uppercase tracking-[-1px] mb-8 relative z-10">O que significa ser Pró-Corporate?</h3>
            <div className="space-y-6 relative z-10">
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Não construímos apenas paredes, construímos instrumentos de produtividade.</p>
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Entendemos que atraso em inauguração não é só um incômodo, é perda diária de eficiência e faturamento.</p>
               <p className="text-[16px] leading-[1.6] text-[var(--color-grey-light)] font-medium">Por isso nossa metodologia foi desenhada para a urgência e para o padrão corporativo.</p>
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

      {/* BANNER 6: PARCEIROS */}
      <section className="py-12 bg-[var(--color-grey-light)] w-full border-b border-[var(--color-ink)] overflow-hidden">
        <div className="max-w-[1024px] mx-auto px-10 mb-8 text-center md:text-left">
          <p className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--color-ink)] border-b border-[var(--color-ink)] pb-2 inline-block">Marcas que confiam na Percom</p>
        </div>
        
        <div className="flex flex-col gap-6 opacity-80 select-none">
          {/* Row 1 */}
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[
              "KINGS SNEAKERS", "ARARUAMA", "WAVE GIANT", "MousseCake", "the coffee.",
              "KINGS SNEAKERS", "ARARUAMA", "WAVE GIANT", "MousseCake", "the coffee."
            ].map((brand, i) => (
               <span key={i} className="text-xl md:text-2xl font-black uppercase tracking-[-1px] text-[var(--color-ink)] shrink-0">
                 {brand}
               </span>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[
              "BelShop", "AÉROPOSTALE", "Núcleo Tangis", "Iguatemi Shopping", "Santa Maria Outlet",
              "BelShop", "AÉROPOSTALE", "Núcleo Tangis", "Iguatemi Shopping", "Santa Maria Outlet"
            ].map((brand, i) => (
               <span key={i} className="text-xl md:text-2xl font-black uppercase tracking-[-1px] text-[var(--color-ink)] shrink-0">
                 {brand}
               </span>
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[
              "Grupo GOAKIRA", "FILA", "Havanna", "Babá Materiais", "e muito mais...",
              "Grupo GOAKIRA", "FILA", "Havanna", "Babá Materiais", "e muito mais..."
            ].map((brand, i) => (
               <span key={i} className="text-xl md:text-2xl font-black uppercase tracking-[-1px] text-[var(--color-ink)] shrink-0">
                 {brand}
               </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BANNER 7: PROCESSO */}
      <section className="py-24 px-10 w-full relative border-y border-[var(--color-ink)]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&q=80&w=2069" 
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
                { n: "01", t: "Entendimento", d: "Compreensão da empresa e do projeto de expansão." },
                { n: "02", t: "Alinhamento", d: "Definição de cronogramas e restrições locais." },
                { n: "03", t: "Levantamento", d: "Captação de informações cruciais e projetos." },
                { n: "04", t: "Orçamento", d: "Emissão de Budget preliminar e fechamento final." },
                { n: "05", t: "Assinatura", d: "Fechamento contratual e alinhamento de expectativas." },
                { n: "06", t: "Cronograma", d: "Apresentação oficial do cronograma ágil para o cliente." },
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
               Entregamos seu Escritório,<br/> pronto para operar.
             </h2>
             <p className="text-[16px] md:text-[20px] font-bold uppercase tracking-[1px] text-[var(--color-ink)] opacity-80 mb-8">
               No prazo, no padrão e sem dor para você e seu cliente.
             </p>
             <p className="text-sm font-medium text-[var(--color-ink)] opacity-70 max-w-2xl mx-auto leading-relaxed">
               A Percom é especializada em <strong className="font-bold">construção corporativa</strong> e <strong className="font-bold">construção de escritórios</strong> para o mercado corporativo. Atuamos como a principal <strong className="font-bold">construtora corporate</strong> com sede na região de <strong className="font-bold">Ribeirão Preto</strong>, atendendo a todo o <strong className="font-bold">interior de São Paulo</strong> e oferecendo soluções completas de infraestrutura para franquias, shoppings e espaços corporativos.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
