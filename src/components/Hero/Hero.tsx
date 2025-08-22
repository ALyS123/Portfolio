import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.left}>
        <h2 className={styles.kicker}>Hi, I’m</h2>
        <h1 className={styles.title}>Ali Elsabbouri</h1>

        <div className={styles.blurb}>
          <p>Computer Science student passionate about bridging hardware and software.</p>
          <p>From embedded systems and automation to full-stack apps, I solve problems end-to-end.</p>
          <p>I focus on building reliable, efficient, and user-friendly solutions that feel seamless.</p>
        </div>

        {/* Quick facts */}
        <ul className={styles.facts}>
          <li>⚙️ Embedded & Full-stack</li>
          <li>📍 Roles: Embedded, Full-Stack, SWE</li>
          <li>🎯 Ship-focused</li>
        </ul>

        {/* Tech badges */}
        <div className={styles.badges}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Node</span>
          <span>C/C++</span>
          <span>Microcontrollers</span>
        </div>

        <div className={styles.cta}>
          <a href="#projects" className={styles.primary}>View Projects</a>
          <a href="#contact" className={styles.secondary}>Contact</a>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src={heroImg}
          alt="Ali Elsabbouri — futuristic illustration representing hardware and software"
          className={styles.heroImg}
        />
      </div>
    </section>

  );
}
