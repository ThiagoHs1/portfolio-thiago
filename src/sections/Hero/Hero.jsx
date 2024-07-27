import React from 'react'
import styles from './HeroStyles.module.css'
import thiago from '../../assets/thiago.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'

import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'



import CV from '../../assets/CV - THIAGO HENRIQUE HEINLE SANCHEZ.pdf'
import { useTheme } from '../../common/ThemeContext'


// Hero component that displays the hero section with Thiago's info, image, icons, and download CV button.

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={thiago} alt="Thiago" className={styles.heroImage} />
        <img src={themeIcon} alt="Modo escuro icon" className={styles.ColorMode} onClick={toggleTheme} />
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