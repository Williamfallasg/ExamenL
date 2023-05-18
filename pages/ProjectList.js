import React, { useContext } from 'react';
import { GithubContext } from './GithubProvider';

const ProjectList = () => {
  const projects = useContext(GithubContext);

  return (
    <div>
      <h2>Lista de proyectos de GitHub</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
