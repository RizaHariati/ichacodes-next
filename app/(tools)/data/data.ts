import { ProjectType } from "@/types.d";

export const projects: ProjectType[] = [
  {
    project_index: 1,
    id: "IC001",
    url: "https://skulalingua.com/",
    title: "SkulaLingua",
    slug: "skulalingua",
    img_logo: "skulalingua-logo",
    main_image: "skulalingua_monitor",
    modal_image: "skulalingua_screenPhone",
    phone_image: "skulalingua_mainphone",
    description: [
      "Skulalingua will help you learn Mandarin on your laptop or your mobile phone. The main goal is to increase your Mandarin word library and help you to be able to do daily communication using Mandarin.",

      "The target students for this website are Indonesian people from all segments, that's why I'm using Indonesian non-standard grammar to get them to connect easier to Mandarin grammar.",
    ],
    mainProgram: "React.js, Node.js ",
    dependencies: "Tailwind CSS,Typescript, redux toolkit",
  },
  {
    project_index: 2,
    id: "IC002",
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
    project_index: 3,
    id: "IC003",
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
    project_index: 4,
    id: "IC004",
    url: "https://rsus-api.vercel.app/",
    title: "Administrasi RSUS",
    slug: "rsus",
    img_logo: "rsus-logo",
    main_image: "rsus_monitor",
    phone_image: "rsus_mainphone",
    modal_image: "rsus_screenPhone",
    description: [
      "This website is inspired by Sanity.io form design. I use this website to master creating forms and connecting them to the Back End.  I purposefully did not use any form library ",

      "Using Next-Sanity, combined with Next.JS API, I can place all the codes into one folder. Very practical for me as this website is relatively small",

      "Another challenge for me when creating this website is on creating a responsive website through codes instead of through CSS",
    ],
    mainProgram: "Next.JS",
    dependencies: "Next-Sanity, Sanity.Io, Tailwind.CSS",
  },
];
