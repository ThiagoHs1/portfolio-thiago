import React from 'react'
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import placeholder from '../../assets/placeholder.png';


function Projects() {
    return (
        <section id="projects" className={styles.container}>
          <h1 className="sectionTitle">Projects</h1>
          <div className={styles.projectsContainer}>
            <ProjectCard
              src={placeholder}
              link="https://github.com/"
              h3="Teste"
              p="Teste"
            />
            <ProjectCard
              src={placeholder}
              link="https://github.com/"
              h3="Teste"
              p="Teste"
            />
            <ProjectCard
              src={placeholder}
              link="https://github.com/"
              h3="Teste"
              p="Teste"
            />
            <ProjectCard
              src={placeholder}
              link="https://github.com/"
              h3="Teste 4"
              p="Teste"
            />
          </div>
        </section>
      );
    }
export default Projects