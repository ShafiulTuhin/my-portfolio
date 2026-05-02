import DetailsProject from "../../../components/DetailsProject";

const getProjects = async () => {
  const res = await fetch("https://shafiul-tuhin.vercel.app/projects.json");
  const data = await res.json();
  return data;
};
const projects = await getProjects();

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const project = projects.find((project) => project.id == id);
  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div>
      <DetailsProject project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
