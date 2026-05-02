import React from "react";

// const getProjects = async () => {
//   // const res = await fetch("https://shafiul-tuhin.vercel.app/projects.json");
//   const res = await fetch("http://localhost:3000/projects.json");
//   const data = await res.json();
//   return data;
// };
// const projects = await getProjects();
const projects = [
  {
    id: 1,
    title: "Book City",
    type: "Digital Library Platform",
    description:
      "Book-City is a modern full-stack digital library platform where users can explore, search, and borrow books through an interactive and user-friendly experience.",
    image: "https://i.ibb.co.com/8LxbBgvR/Homepage.png",
    tech: [
      "NextJs",
      "Tailwind Css",
      "Hero UI",
      "animate css",
      "Mongodb",
      "better-auth",
    ],
    github: "https://github.com/ShafiulTuhin/book-city",
    live: "https://book-city.vercel.app",
  },
  {
    id: 2,
    title: "Dragoon News",
    type: "Content Management News Platform",
    description:
      "Dragon News is a full-stack news portal where users can browse, publish, and manage news articles with authentication and role-based access.",
    image: "https://i.ibb.co.com/39TYDkN6/dragon.png",
    tech: [
      "NextJs",
      "Tailwind Css",
      "Hero UI",
      "animate css",
      "Mongodb",
      "better-auth",
    ],
    github: "https://github.com/ShafiulTuhin/Dragon-news-next.js",
    live: "https://dragon-news-next-js.vercel.app/",
  },
  {
    id: 3,
    title: "Issue Tracker",
    type: "Issue Management System",
    description:
      "An Issue Tracker App is a collaborative project management tool that helps developers report, track, and resolve bugs or tasks efficiently with organized workflows.",
    image: "https://i.ibb.co.com/zVYT2Wq6/issue.png",
    tech: ["Reactjs", "Tailwind Css", "Daisy UI", "Toastify"],
    github: "https://github.com/ShafiulTuhin/issue-tracker-convert-to-react",
    live: "https://github-issue-tracker-react.netlify.app/",
  },
  {
    id: 4,
    title: "Issue Tracker",
    type: "Issue Management System",
    description:
      "An Issue Tracker App is a collaborative project management tool that helps developers report, track, and resolve bugs or tasks efficiently with organized workflows.",
    image: "https://i.ibb.co.com/zVYT2Wq6/issue.png",
    tech: ["Reactjs", "Tailwind Css", "Daisy UI", "Toastify"],
    github: "https://github.com/ShafiulTuhin/issue-tracker-convert-to-react",
    live: "https://github-issue-tracker-react.netlify.app/",
  },
];
const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const project = projects.find((project) => project.id == id);

  return <div>{project.title}</div>;
};

export default ProjectDetailsPage;
