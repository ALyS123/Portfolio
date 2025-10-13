import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <header className={styles.head}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.sub}>Let’s build something — I’m open to roles, collabs, and cool ideas.</p>
      </header>

      <div className={styles.wrap}>
        {/* accent strip */}
        <span className={`${styles.accent} ${styles.accentBlue}`} />
        {/* aura */}
        <span aria-hidden className={styles.aura} />

        <div className={styles.rows}>
          <a href="mailto:ali_sabbouri@hotmail.com" className={styles.row}>
            <Mail size={18} />
            <span>ali_sabbouri@hotmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ali-elsabbouri-260458312/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.row}
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/ALyS123"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.row}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        <div className={styles.actions}>
          
          <a href="mailto:ali_sabbouri@hotmail.com" className={`${styles.ctaBtn} ${styles.primary}`}>
            Let’s Work Together
          </a>

          <a
            href="/Ali-Elsabbouri-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.secondary}`}
          >
            Preview Resume
          </a>

        </div>
      </div>
    </section>
  );
}
