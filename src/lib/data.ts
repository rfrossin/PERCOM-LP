export interface CaseStudy {
  id: string;
  brandName: string;
  brandLogoText?: string;
  title: string;
  address: string;
  sqm: string;
  segment: string;
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
    coverImage: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2070"
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
    coverImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=2071",
    galleryImages: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1620601004185-1d6ebce827df?auto=format&fit=crop&q=80&w=2000"
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
    coverImage: "https://images.unsplash.com/photo-1607082352121-a4bba8994bb5?auto=format&fit=crop&q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1596460107916-430662021049?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=2000"
    ],
    history: "A Belshop é uma rede fundada em 2000, focada em cosméticos e cuidados pessoais. Atua principalmente no Sul do Brasil e se diferencia ao integrar lojas com salões de beleza, oferecendo experiência completa. Atualmente tem mais de 60 lojas ao redor do Brasil, principalmente na região Sul.",
    insight: "O desafio da BelShop era entrar com presença e marca forte no estado de São Paulo.",
    summary: "Realizamos, até o momento, 2 lojas da Belshop no interior de São Paulo, e continuamos evoluindo a parceria para aumentar a rede de lojas em SP."
  },
  {
    id: "mousse-cake",
    brandName: "MousseCake",
    title: "Conforto e Sofisticação Gastronômica",
    address: "Boulevard Shopping",
    sqm: "300m²",
    segment: "Restaurante",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070",
    galleryImages: [
      "https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000"
    ],
    history: "Uma rede de restaurantes que combina confeitaria contemporânea com pratos principais, focada num público que busca sofisticação.",
    summary: "Execução completa incluindo cozinha industrial pesada, exaustão de ar, salão requintado com revestimentos premium.",
    insight: "Coordenação crítica de projetos complementares para garantir conforto acústico e térmico em uma área de grande fluxo e uso intenso de cozinha."
  }
];
