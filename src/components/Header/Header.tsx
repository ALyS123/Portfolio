import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(Math.max(0, window.scrollY || 0));
    const onResize = () => {
      const h =
        (window as any).visualViewport?.height ??
        document.documentElement.clientHeight ??
        window.innerHeight ??
        800;
      setVh(h);
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    onResize();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrolled = scrollY > 8;
  const hideThreshold = vh * 1.2;
  const hidden = !isMobile && scrollY > hideThreshold; // never hide header on phones
  const opacity = 1 - Math.min(scrollY / hideThreshold, 1);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""}`}
      style={
        {
          "--scrollY": String(scrollY),
          "--blur": `${Math.min(scrollY / 25, 30)}px`,
          "--opacity": String(Math.max(0.65, opacity)),
        } as React.CSSProperties
      }
    >
      <div className={styles.inner}>
        <h1 className={styles.name}>Ali Elsabbouri</h1>

        <div className={styles.right}>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.socials}>
            <a
              href="https://github.com/ALyS123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-elsabbouri-260458312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:ali_sabbouri@hotmail.com">
              <Mail size={20} />
            </a>
            <a href="/resume.pdf" download className={styles.resumeBtn}>
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
