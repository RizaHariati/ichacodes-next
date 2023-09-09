import { ProjectType } from "@/types.d";

export const projects: ProjectType[] = [
  {
    id: "IC001",
    url: "https://bayarPlanner.com/",
    title: "BayarPlanner",
    slug: "bayarplanner",
    img_logo: "bayarplanner-logo",
    main_image: "bayarplanner_monitor",
    modal_image: "bayarplanner_screenPhone",
    description: [
      "BayarPlanner is a website that schedules and records daily financial transactions, also calculates data to create simple invoices.",

      "Created using React JS, makes it easier to work with a lot of date-related libraries",

      "The main calendar design is costume-made so it can have more flexibility to handle different functions accordingly to different activities each day.",
    ],
    mainProgram: "React.js",
    dependencies:
      "Tailwind CSS,Typescript, useContext, useReducer, React datepicker",
  },
  {
    id: "IC002",

    url: "https://rsuripsumoharjo-model.netlify.app/",
    title: "RS Urip Sumoharjo",
    slug: "rs-uripsumoharjo",
    img_logo: "rs-uripsumoharjo-logo",
    main_image: "rs-uripsumoharjo_monitor",
    modal_image: "rs-uripsumoharjo_screenPhone",
    description: [
      "A website design proposal for a local hospital in Bandar Lampung. The design wasn't approved by my client but I can keep it for my own portfolio",

      "Inspired by Mayo Clinic's website. A very simple design, easy-to-use, informative but not too crowded with too many useless details.",

      "The core of this website design is Next.JS, supported by Redux Toolkit, Formik, Yup, and React leaflet",
    ],
    mainProgram: "Next.js",
    dependencies: "Typescript, Tailwind CSS, Redux Toolkit",
  },
  {
    id: "IC003",
    url: "https://sudahnonton.ichacodes.com/",
    title: "SudahNonton",
    slug: "sudahnonton",
    img_logo: "sudahnonton-logo",
    main_image: "sudahnonton_monitor",
    modal_image: "sudahnonton_screenPhone",
    description: [
      "SudahNonton is a movie and TV Shows database website that also serves as REST API provider that can be consumed by other websites or applications.",

      "The design is based on the Netflix website design using real data from The Movie DB and I chose to use Laravel so it can be used as Front end as well as Back End.",

      "I watched and I like all of the movies and TV shows in this website, so it also can be used as recommendation for movie night ",
    ],
    mainProgram: "Laravel 8",
    dependencies: "Laravel-mix, Bootstrap, Axios, Sass",
  },

  {
    id: "IC004",
    url: "https://azriclone.netlify.app/",
    title: "AzriClone",
    slug: "azriclone",
    img_logo: "azriclone-logo",
    main_image: "azriclone_monitor",
    modal_image: "azriclone_screenPhone",
    description: [
      "This website is based on Facebook's website design, mainly to showcase my ability in accessing and processing data with Rest API.",

      "All mock-up data in this website are from DUMMYAPI.IO, a free ready-to-use API Service filled with dummy data",

      "Combining Typescript with Redux/toolkit, Redux/persist and Next Redux Wrapper, was a bit of a challenge for me, but turned out to be very useful for later use",
    ],
    mainProgram: "Next.js",
    dependencies: "Tailwind CSS, Redux Toolkit, Redux Persist",
  },
];

export const aboutData = {
  message:
    "I mostly work on Front End Developing, from designing to testing to deployment. I also dabble on the Back End creating simple CRUD data. Designing apps and websites that are custom-made to your need is my interest. My favorite programming tool is React.JS, but I also enjoy working with Laravel.",

  frontEnd:
    "Javascript/Css/Html, TypeScript, Java, React.JS, React Native, Gatsby.JS, Next.JS",

  backEnd: "Node.JS, Express.JS, Laravel 8, MySQL, Mongodb",
  testing: "Cypress",
  design:
    "Photoshop, Material-UI, Tailwinds CSS, Bootstrap, Figma, Sketchup, 3dsMax, AutoCAD",
};
