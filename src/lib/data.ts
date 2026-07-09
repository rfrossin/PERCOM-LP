export interface CaseStudy {
  id: string;
  brandName: string;
  brandLogoText?: string;
  title: string;
  address: string;
  sqm: string;
  segment: string; category?: string;
  coverImage: string;
  galleryImages: string[];
  history: string;
  summary: string;
  insight: string;
}

export const cases: CaseStudy[] = [
  {
    id: "kings-sneakers",
    brandName: "KINGS SNEAKERS",
    title: "Rebranding Rápido e Expansão",
    address: "Shopping Ribeirão, Iguatemi RP, São Carlos, São J. Rio Preto e Mogi Guaçu",
    sqm: "5x100m²",
    segment: "Moda / Vestuário",
    coverImage: "https://i.ibb.co/pjdSVZV0/Kings-Riopreto-Shopping-1.jpg",
    galleryImages: [
      "https://i.ibb.co/5XnMZHkw/20251021-114956.jpg",
      "https://i.ibb.co/pBt4WHr7/kings-Shopping-Iguatemi-Ribeir-o-1.jpg",
      "https://i.ibb.co/MDFnmJQh/Kings-Novo-Shopping-1.jpg",
      "https://i.ibb.co/PZwWPX97/Kings-Novo-Shopping-2.jpg"
    ],
    history: "A Kings Sneakers (KIGZ) é uma rede brasileira focada em sneakers, vestuário e cultura urbana. Com presença nacional em shoppings, combina marcas globais e produtos próprios. A empresa se posiciona como referência no lifestyle street, conectando moda, música e comportamento jovem. Conta com mais de 150 lojas no Brasil.",
    insight: "Passaram por um rebranding em todas as unidades e precisavam das lojas entregues em prazo extremamente curto.",
    summary: "Começamos atuando com um masterfranqueado do interior de SP e expandimos a relação, fazendo mais obras para o mesmo e para a rede."
  },
  {
    id: "the-coffee",
    brandName: "the coffee.",
    title: "Minimalismo Funcional",
    address: "Loja de Rua, Centro",
    sqm: "15m²",
    segment: "Cafeteria / Alimentação",
    coverImage: "https://i.ibb.co/dwZK6spv/The-Coffee-Outlet.jpg",
    galleryImages: [
      "https://i.ibb.co/Wp0hdcSD/The-Coffee-2.jpg",
      "https://i.ibb.co/SDmFcwk8/The-Coffee-1-2.jpg",
      "https://i.ibb.co/Vprk8s19/The-Coffee-JS-3.jpg",
      "https://i.ibb.co/GQdQsDrW/The-Coffee-JS-4.jpg",
      "https://i.ibb.co/39Nv8N7p/The-Coffee-JS-1.jpg"
    ],
    history: "Conhecida pelo seu design japonês minimalista, a the coffee. foca na experiência rápida e tecnológica (to-go), com espaço reduzido e muito bem aproveitado.",
    summary: "Adequação de um pequeno espaço de rua, envolvendo complexas instalações hidráulicas e elétricas concentradas em poucos metros quadrados.",
    insight: "A precisão na execução foi fundamental, já que espaços menores não permitem erros de milímetros nos móveis modulares padronizados."
  },
  {
    id: "belshop",
    brandName: "BelShop",
    title: "Presença e Marca Forte em SP",
    address: "Outlet Santa Maria - Cravinhos, SP",
    sqm: "250m²",
    segment: "Beleza / Cosméticos",
    coverImage: "https://i.ibb.co/3Y7Vzm9L/Belshop-6.jpg",
    galleryImages: [
      "https://i.ibb.co/Kp6KkR1d/Belshop-2.jpg",
      "https://i.ibb.co/wrCBKffw/Belshop-1.jpg",
      "https://i.ibb.co/tM0Vy7jz/Belshop-4.jpg",
      "https://i.ibb.co/wFjrbsYR/Belshop-3.jpg",
      "https://i.ibb.co/BHW9qqdp/Belshop-5.jpg",
      "https://i.ibb.co/pB3BhRPT/IMG-20250320-WA0040.jpg",
      "https://i.ibb.co/XxqhL0g0/IMG-20250320-WA0038.jpg",
      "https://i.ibb.co/VpLKXGM1/IMG-20250320-WA0036.jpg"
    ],
    history: "A Belshop é uma rede fundada em 2000, focada em cosméticos e cuidados pessoais. Atua principalmente no Sul do Brasil e se diferencia ao integrar lojas com salões de beleza, oferecendo experiência completa. Atualmente tem mais de 60 lojas ao redor do Brasil, principalmente na região Sul.",
    insight: "O desafio da BelShop era entrar com presença e marca forte no estado de São Paulo.",
    summary: "Realizamos, até o momento, 2 lojas da Belshop no interior de São Paulo, e continuamos evoluindo a parceria para aumentar a rede de lojas em SP."
  },
  {
    id: "nucleo-tangis",
    brandName: "Clínica Núcleo Tangis",
    title: "Clínica Médica de Alto Padrão",
    address: "Ribeirão Preto, SP",
    sqm: "Alto Padrão",
    segment: "Saúde / Clínica Médica",
    coverImage: "https://i.ibb.co/rRcS01Vb/Captura-de-tela-2025-06-27-132531.jpg",
    galleryImages: [
      "https://i.ibb.co/7Np2Vzmh/Whats-App-Image-2025-06-27-at-12-50-27-1.jpg",
      "https://i.ibb.co/PshQtrmq/Whats-App-Image-2025-06-27-at-12-50-26.jpg",
      "https://i.ibb.co/p6Nk3dvh/Whats-App-Image-2025-06-27-at-12-50-26-1.jpg",
      "https://i.ibb.co/jkJXLCXY/Whats-App-Image-2025-06-27-at-12-50-27.jpg"
    ],
    history: "A Clínica Núcleo Tangis reúne especialistas em Cirurgia Plástica, Dermatologia, Tricologia e Cirurgia Geral, com o propósito de transformar e restaurar a saúde e a autoestima dos pacientes com técnica, empatia e inovação.",
    summary: "Execução de obra de alto padrão para a área da saúde, exigindo precisão nos acabamentos e adequação rigorosa às normas sanitárias e necessidades técnicas dos consultórios e salas de procedimento.",
    insight: "O desafio foi criar um ambiente sofisticado, acolhedor e altamente funcional que refletisse o compromisso com a beleza, bem-estar e o cuidado único a cada paciente."
  },
  {
    id: "havanna",
    brandName: "Havanna",
    title: "Padronização com Personalização",
    address: "Santa Maria Outlet - Cravinhos, SP",
    sqm: "Padrão Franquia",
    segment: "Alimentação / Cafeteria",
    coverImage: "https://i.ibb.co/BKLbbmtT/IMG-20210421-161217513.jpg",
    galleryImages: [
      "https://i.ibb.co/9H2t7nf7/IMG-20210413-WA0138.jpg",
      "https://i.ibb.co/kV6HMc2J/IMG-20210421-154421449.jpg",
      "https://i.ibb.co/VcZkGgcR/IMG-20210421-154154047.jpg"
    ],
    history: "A Havanna é uma marca argentina com mais de 70 anos de tradição, reconhecida globalmente pela qualidade de seus alfajores e doce de leite. No Brasil, expandiu como uma rede de cafeterias que oferece uma autêntica experiência portenha.",
    summary: "Nossa atuação consistiu em equilibrar as rigorosas exigências de padronização impostas pela franqueadora com as necessidades e características específicas do espaço local, garantindo a identidade global da marca.",
    insight: "Tivemos que manter o padrão da franqueadora, ao mesmo tempo que personalizamos para a aplicação do projeto local no Santa Maria Outlet."
  },
  {
    id: "spunto",
    brandName: "Spunto",
    title: "Experiência Gastronômica Moderna",
    address: "Ribeirão Preto, SP",
    sqm: "Ambiente Completo",
    segment: "Restaurante / Gastronomia",
    coverImage: "https://i.ibb.co/Mys1g7pC/Restaurante-Spunto.jpg",
    galleryImages: [
      "https://i.ibb.co/RMf0vJq/321503893-1113737932666947-5643465401790262257-n.jpg",
      "https://i.ibb.co/Lz4sdPh0/2023-12-17.jpg"
    ],
    history: "O Spunto é um restaurante que combina um ambiente contemporâneo e acolhedor com pratos de alta qualidade, proporcionando uma experiência gastronômica marcante e descontraída para seus clientes.",
    summary: "Atuamos na construção e adequação estrutural do espaço, garantindo uma integração perfeita entre a área de salão para os clientes e a infraestrutura de apoio e preparo.",
    insight: "O principal desafio deste projeto foi executar instalações complexas que suportassem o alto fluxo de uma cozinha profissional, mantendo o requinte visual e o conforto térmico no salão de atendimento."
  }
];
