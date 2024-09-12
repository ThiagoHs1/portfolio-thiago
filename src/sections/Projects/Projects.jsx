import React from 'react'
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import efood from '../../assets/efood.png';
import agenda from '../../assets/agenda.png';
import sports from '../../assets/sports.png';
import clima from '../../assets/climaapp.png';
import geradorSenha from '../../assets/gerador-senha.png'


function Projects() {
    return (
        <section id="projects" className={styles.container}>
          <h1 className="sectionTitle">Projetos</h1>
          <div className={styles.projectsContainer}>
            <ProjectCard
              src={efood}
              link="https://github.com/ThiagoHs1/Efood/"
              h3="Efood"
              p="Aplicação web em react com api"
            />
            <ProjectCard
              src={sports}
              link="https://github.com/ThiagoHs1/ebac_sports/"
              h3="Sports website"
              p="Aplicação em react para treinar uma loja virtual"
            />

              <ProjectCard
              src={clima}
              link="https://github.com/ThiagoHs1/ClimaAppJava/"
              h3="Clima App"
              p="Uma aplicação Java simples para visualizar a previsão do tempo em tempo real"
            />

              <ProjectCard
              src={geradorSenha}
              link="https://github.com/ThiagoHs1/ClimaAppJava/"
              h3="Gerador de senha"
              p="Aplicativo de desktop simples em Java para gerar senhas seguras"
            />

            <ProjectCard
              src={agenda}
              link="https://github.com/ThiagoHs1/agenda-contatos/"
              h3="Agenda de contatos"
              p="Um dos primeiros projetos que fiz em javascript, uma aplicação simples de agenta de contato"
            />
          </div>
        </section>
      );
    }
export default Projects