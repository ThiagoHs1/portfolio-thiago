import React from 'react'
import styles from './HeroStyles.module.css'
import thiago from '../../assets/thiago.jpeg'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/CV - THIAGO HENRIQUE HEINLE SANCHEZ.pdf'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={thiago} alt="Thiago" className={styles.heroImage} />
        <img src={themeIcon} alt="Modo escuro icon" className={styles.ColorMode} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Thiago H Sanchez</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/ThiagoHs1/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>Desenvolvedor web apaixonado, sempre buscando aprimorar minhas habilidades através de projetos práticos.</p>
        <a href={CV} download>
          <button className="hover" >Download CV</button>
        </a>
      </div>
    </section>  
  )
}

export default Hero