import React, { useState } from 'react';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import efood from '../../assets/efood.png';
import agenda from '../../assets/agenda.png';
import sports from '../../assets/sports.png';
import clima from '../../assets/climaapp.png';
import geradorSenha from '../../assets/gerador-senha.png';

function Projects() {
  const [selectedTech, setSelectedTech] = useState('all'); // Estado para controlar a tecnologia selecionada
  const [isExiting, setIsExiting] = useState(false); // Estado para controlar a animação de saída

  // Array de projetos com a tecnologia associada
  const projects = [
    {
      src: efood,
      link: "https://github.com/ThiagoHs1/Efood/",
      h3: "Efood",
      p: "Aplicação web em react com api",
      tech: "react",
    },
    {
      src: sports,
      link: "https://github.com/ThiagoHs1/ebac_sports/",
      h3: "Sports website",
      p: "Aplicação em react para treinar uma loja virtual",
      tech: "react",
    },
    {
      src: clima,
      link: "https://github.com/ThiagoHs1/ClimaAppJava/",
      h3: "Clima App",
      p: "Uma aplicação Java simples para visualizar a previsão do tempo em tempo real",
      tech: "java",
    },
    {
      src: geradorSenha,
      link: "https://github.com/ThiagoHs1/ClimaAppJava/",
      h3: "Gerador de senha",
      p: "Aplicativo de desktop simples em Java para gerar senhas seguras",
      tech: "java",
    },
    {
      src: agenda,
      link: "https://github.com/ThiagoHs1/agenda-contatos/",
      h3: "Agenda de contatos",
      p: "Um dos primeiros projetos que fiz em javascript, uma aplicação simples de agenta de contato",
      tech: "javascript",
    },
  ];

  // Função para filtrar os projetos com base na tecnologia selecionada
  const filteredProjects = selectedTech === 'all' 
    ? projects 
    : projects.filter(project => project.tech === selectedTech);

  // Função para gerenciar a transição suave
  const handleTechChange = (tech) => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedTech(tech);
      setIsExiting(false);
    }, 300); 
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      
      {/* Botões para selecionar a tecnologia */}
      <div className={styles.filterButtons}>
        <button onClick={() => handleTechChange('all')}>Todos</button>
        <button onClick={() => handleTechChange('react')}>React</button>
        <button onClick={() => handleTechChange('java')}>Java</button>
        <button onClick={() => handleTechChange('javascript')}>JavaScript</button>
      </div>

      {/* Renderiza os projetos filtrados com transição suave */}
      <div className={`${styles.projectsContainer} ${isExiting ? styles.exiting : ''}`}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
