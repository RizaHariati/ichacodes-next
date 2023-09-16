import { ProjectType } from "@/types.d";

export const projects: ProjectType[] = [
  {
    project_index: 1,
    id: "IC001",
    url: "https://bayarPlanner.com/",
    title: "BayarPlanner",
    slug: "bayarplanner",
    img_logo: "bayarplanner-logo",
    main_image: "bayarplanner_monitor",
    modal_image: "bayarplanner_screenPhone",
    phone_image: "bayarplanner_mainphone",
    description: [
      "BayarPlanner is a website that schedules and records daily financial transactions, also calculates data to create simple invoices.",

      "Created using React JS, makes it easier to work with a lot of date-related libraries",

      "The main calendar design is costume-made so it can have more flexibility to handle different functions accordingly to different activities each day.",
    ],
    mainProgram: "React.js",
    dependencies: "Typescript,Tailwind CSS, ReactDatepicker",
  },
  {
    project_index: 2,
    id: "IC002",
    url: "https://rsuripsumoharjo-model.netlify.app/",
    title: "RS Urip Sumoharjo",
    slug: "rs-uripsumoharjo",
    img_logo: "rs-uripsumoharjo-logo",
    main_image: "rs-uripsumoharjo_monitor",
    phone_image: "rs-uripsumoharjo_mainphone",
    modal_image: "rs-uripsumoharjo_screenPhone",
    description: [
      "A website design proposal for a local hospital in Bandar Lampung. The design wasn't approved by my client but I can keep it for my own portfolio.",

      "The design is very simple, easy-to-use, informative but not too crowded with too many useless details.",

      "The core of this website design is to create practical online appointment and medical record integration.",
    ],
    mainProgram: "Next.js",
    dependencies: " ReactDatePicker, FramerMotion",
  },
  {
    project_index: 3,
    id: "IC003",
    url: "https://sudahnonton.ichacodes.com/",
    title: "SudahNonton",
    slug: "sudahnonton",
    img_logo: "sudahnonton-logo",
    main_image: "sudahnonton_monitor",
    phone_image: "sudahnonton_mainphone",
    modal_image: "sudahnonton_screenPhone",
    description: [
      "SudahNonton is a movie and TV Shows database website that also serves as REST API provider that can be consumed by other websites or applications.",

      "The design is based on the Netflix website design using real data from The Movie DB and I chose to use Laravel so it can be used as Front end as well as Back End.",

      "I watched and I like all of the movies and TV shows in this website, so it also can be used as recommendation for movie night ",
    ],
    mainProgram: "Laravel 8",
    dependencies: "Laravel-mix, Bootstrap, Axios",
  },

  {
    project_index: 4,
    id: "IC004",
    url: "https://azriclone.netlify.app/",
    title: "AzriClone",
    slug: "azriclone",
    img_logo: "azriclone-logo",
    main_image: "azriclone_monitor",
    phone_image: "azriclone_mainphone",
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
