export interface Portfolio {
    id: string;
    name: string;
    desc: string;
    coverImage: string;
    createdAt: string;
    portfolio_pictures: PortfolioPicture[];
    portfolio_tags: PortfolioTag[];
  }
  
  export interface PortfolioPicture {
    id: string;
    image: string;
  }
  
  export interface PortfolioTag {
    id: string;
    tag: string;
  }
  