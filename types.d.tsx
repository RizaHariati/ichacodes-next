export type ProjectType = {
  id: string;
  url: string;
  title: string;
  slug: string;
  img_logo: string;
  main_image: string;
  description: string[];
  mainProgram: string;
  dependencies: string;
};

export type ImageType = {
  gatsbyImageData: any;
  original: { src: string };
};

export type ShowModalType = {
  status: boolean;
  value: string;
};
