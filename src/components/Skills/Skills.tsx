import styles from "./Skills.module.css";

const skills = [
  {
    category: "💻 Programming Languages",
    items: [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
      "C",
      "Assembly"
    ],
  },
  {
    category: "⚙️ Frameworks & Tools",
    items: [
      "React",
      "Django",
      "Flask",
      "Node.js",
      "Docker",
      "Git/GitHub",
      "PostgreSQL",
      "MongoDB",
      "Axios",
      "Tailwind CSS",
      "Vite",
      "Pygame",
      "Linux (Bash, Shell Scripting)"
    ],
  },
  {
    category: "🤖 AI & Machine Learning",
    items: [
      "Deep Learning",
      "PyTorch",
      "CNNs",
      "RNNs",
      "Autoencoders",
      "GANs",
      "U-Net",
      "Data Augmentation",
      "MSE/SSIM",
      "Variational Autoencoders",
      "Generative Models",
      "Gradient Descent & Optimization",
      "Machine Translation (seq2seq)"
    ],
  },
  {
    category: "🔌 Embedded & Hardware",
    items: [
      "Arduino (C/C++)",
      "Ultrasonic Sensors",
      "LCDs",
      "Servo Motors",
      "Circuit Design",
      "PCB (EasyEDA)",
      "RF Transmitters & Receivers (315 MHz)",
      "Power Management",
      "Breadboarding & Prototyping"
    ],
  },
  {
    category: "🛠 Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems (Processes, Threads, Synchronization, CPU Scheduling)",
      "Finite Automata (DFA/NFA)",
      "Database Management Systems",
      "Software Engineering (Agile, Modular Design)",
      "Computer Architecture (ALU, Memory, Assembly)"
    ],
  },
  {
    category: "🔒 Security & Reverse Engineering",
    items: [
      "Reverse Engineering (Assembly Analysis, Disassembly)",
      "Memory Management & Vulnerabilities",
      "Binary Exploitation Basics",
      "Screen Capture & Process Hooking Concepts",
      "Cybersecurity Fundamentals"
    ],
  },
  {
    category: "🛠 Other",
    items: [
      "Agile Dev",
      "REST APIs",
      "OpenAI API",
      "O*Net API",
      "UI/UX Basics",
      "Game Development (Unity basics, Chess, Simulation projects)"
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <header className={styles.head}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.sub}>The stack that powers my builds.</p>
      </header>

      <div className={styles.grid}>
        {skills.map((block, i) => (
          <article key={block.category} className={styles.card}>
            {/* gradient accent strip */}
            <span className={`${styles.accent} ${styles[`accent${(i % 4) + 1}`]}`} />

            {/* subtle glow aura */}
            <span className={styles.aura} aria-hidden />

            <h3 className={styles.cardTitle}>{block.category}</h3>

            <div className={styles.badges}>
              {block.items.map((skill) => (
                <span key={skill} className={styles.badge}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
