import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Williamfallasg/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub projects:', error);
      });
  }, []);

  return (
    <Layout>
      <div className='container mt-5 mb-5'>
        <h1 className="text-center text-light">My Projects</h1>
        <Carousel>
          {projects.map(({ id, name, description, html_url }) => (
            <Carousel.Item key={id}>
              <img src="portafolio5.png" alt="GitHub Logo" className="d-block mx-auto" style={{ maxHeight: '600px' }} />
              <Carousel.Caption>
                <h3 className="text-light">{name}</h3>
                <p className="text-light">{description}</p>
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-light">Ver en GitHub</a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default Projects;
