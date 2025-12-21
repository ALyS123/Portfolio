import styles from "./Projects.module.css";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
  title: "Smooth Investment",
  kicker: "Full-stack web app",
  description:
    "Investment analysis platform with a React + TypeScript frontend and a Python backend connected to a Postgres database. Deployed with a modern cloud setup for production-ready hosting.",
  stack: ["React", "TypeScript", "Tailwind CSS", "Python", "PostgreSQL", "Vercel", "Render", "Neon (AWS)", "API", "Yfinance", "RNN-LSTM"],
  projlink: "https://smooth-investment.vercel.app/", // Link to the deployed project
  image: "/assets/smooth-investment.png",            // Path of the image
  imageFit: "contain",
  },
  {
    title: "Chess Game",
    kicker: "Python • OOP",
    description:
      "Object-oriented chess with move validation, castling, check detection, and auto-promotion. Modular structure with groundwork for online multiplayer.",
    stack: ["Python", "Pygame", "socket", "threading", "OOP"],
    repo: "https://github.com/ALyS123/Chess",
    image: "/assets/chess.png",
    imageFit: "contain",
  },
  {
    title: "CareerCracker",
    kicker: "Full-stack web app",
    description:
      "Interview prep platform with auth, application tracking, and a structured practice dashboard.",
    stack: ["React", "TypeScript", "Django", "MongoDB", "Docker", "openAI API", "O*Net API", "CSS"],
    repo: "https://github.com/mfrench730/career_cracker",
    image: "/assets/CareerCracker.png",
    imageFit: "contain",
  },
  {
    title: "Image Denoising U-Net",
    kicker: "Deep Learning",
    description:
      "CNN/U-Net model that reduces noise; trained with SSIM/MSE losses to improve visual quality.",
    stack: ["Python", "PytTorch", "U-Net", "PIL", "matplotlib"],
    repo: "https://github.com/ALyS123/image-denoising-unet",
    image: "/assets/denoise.png",
    imageFit: "contain",
  },
  {
    title: "Ultrasonic Distance Sensor",
    kicker: "Embedded",
    description:
      "Arduino + HC-SR04 sensor with LCD readout for real-time distance measurement.",
    stack: ["C/C++", "Arduino", "Ultrasonic", "LCD"],
    image: "/assets/ultrasonic.png",
    imageFit: "contain",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <header className={styles.head}>
        <h2>Projects</h2>
        <p>Hands-on work that reflects my skills in building and shipping software.</p>
      </header>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} {...p} accentIndex={i} />
        ))}
      </div>

      {/* Call-to-action buttons */}
    <div className={styles.actions}>
        <a href="#skills" className={`${styles.ctaBtn} ${styles.secondary}`}>
            View Skills
        </a>
        <a href="#contact" className={`${styles.ctaBtn} ${styles.primary}`}>
            Contact Me
        </a>
    </div>
    </section>
  );
}
