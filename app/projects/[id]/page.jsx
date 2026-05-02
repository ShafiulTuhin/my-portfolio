import React from "react";

const getProjects = async () => {
  // const res = await fetch("https://shafiul-tuhin.vercel.app/projects.json");
  const res = await fetch("http://localhost:3000/projects.json");
  const data = await res.json();
  return data;
};
const projects = await getProjects();
const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const project = projects.find((project) => project.id == id);

  return <div>{project.title}</div>;
};

export default ProjectDetailsPage;
