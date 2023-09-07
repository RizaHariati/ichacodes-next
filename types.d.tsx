import { IGatsbyImageData } from "gatsby-plugin-image";

export type ProjectType = {
  index: number;
  id: string;
  url: string;
  title: string;
  slug: string;
  description: string[];
  mainProgram: string;
  dependencies: string;
};

export type ImageType = {
  gatsbyImageData: any;
  original: { src: string };
};

export type PortfolioImageType = {
  monitor?: IGatsbyImageData;
  screenPhone?: IGatsbyImageData;
  mainphone?: IGatsbyImageData;
  logo?: IGatsbyImageData;
};
export type AllImageType = {
  iconImage?: IGatsbyImageData;
  iconLink?: IGatsbyImageData;
  profilePicSmall?: IGatsbyImageData;
  magnifying?: IGatsbyImageData;
};

export type PortfolioType = {
  [key: string]: PortfolioImageType;
};

export type ShowModalType = {
  status: boolean;
  value: string;
};
