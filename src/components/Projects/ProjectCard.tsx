import styles from "./Projects.module.css";

export type Project = {
  title: string;
  kicker: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: string;                 // public path or imported asset
  imageFit?: "cover" | "contain"; // how the image should fit (default cover)
};

type Props = Project & { accentIndex: number };

export default function ProjectCard({
  title,
  kicker,
  description,
  stack,
  repo,
  demo,
  image,
  imageFit = "cover",
  accentIndex,
}: Props) {
  return (
    <article className={styles.card}>
      {/* colored accent bar per card */}
      <span className={`${styles.accent} ${styles[`accent${(accentIndex % 4) + 1}`]}`} />

      {image && (
        <div className={styles.thumbWrap}>
          <img
            src={image}
            alt=""
            loading="lazy"
            className={`${styles.thumb} ${imageFit === "contain" ? styles.thumbContain : ""}`}
          />
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.kicker}>{kicker}</div>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.desc}>{description}</p>

        <ul className={styles.stack}>
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
