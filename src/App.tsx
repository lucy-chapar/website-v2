import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CircuitBoard,
  Coffee,
  Github,
  HeartHandshake,
  Mail,
  Mic2,
  Radio,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "LucyTTS",
    summary:
      "AI voice tooling shaped around accessible workflows, voice cloning experiments, and practical creator pipelines.",
    href: "https://github.com/lucy-chapar/LucyTTS",
    icon: Mic2,
    accent: "coral",
  },
  {
    title: "Maker hardware",
    summary:
      "Build notes, prototype breakdowns, repair logs, and useful machines from the bench to the internet.",
    href: "https://github.com/lucy-chapar",
    icon: CircuitBoard,
    accent: "green",
  },
  {
    title: "Creator systems",
    summary:
      "Reusable tools for publishing, documentation, experiments, and turning messy progress into something people can follow.",
    href: "https://github.com/lucy-chapar",
    icon: Wrench,
    accent: "yellow",
  },
];

const channels = [
  {
    title: "Build logs",
    detail: "Clear project posts from idea to finished artifact.",
    icon: BookOpen,
  },
  {
    title: "Demos",
    detail: "Short videos and working examples for things that are easier to see than explain.",
    icon: Radio,
  },
  {
    title: "Support",
    detail: "A home base for sponsors, commissions, and people who want the next weird useful thing to exist.",
    icon: HeartHandshake,
  },
];

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Lucy Chapar home">
          Lucy Chapar
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-media" role="img" aria-label="A creator studio workbench with electronics, microphone, notebook, and laptop" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Accessible tech. Maker projects. Creator tools.</p>
          <h1>Lucy Chapar</h1>
          <p className="hero-copy">
            I make useful, human-centered technology in public: AI voice tools,
            hardware experiments, documentation, and creator systems for people
            who learn by watching things become real.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              <Rocket size={18} aria-hidden="true" />
              <span>See the work</span>
            </a>
            <a className="button ghost" href="https://ko-fi.com/lucychapar">
              <Coffee size={18} aria-hidden="true" />
              <span>Support on Ko-fi</span>
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Jump to featured work">
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Public projects with a practical streak.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <a className={`project-card ${project.accent}`} href={project.href} key={project.title}>
                <span className="project-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="project-title-row">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
                <span className="project-summary">{project.summary}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section id="about" className="section split-section">
        <div>
          <p className="eyebrow">Point of view</p>
          <h2>Make the strange thing legible.</h2>
        </div>
        <div className="about-copy">
          <p>
            My lane is the overlap between invention and explanation: the moment
            a tool starts making sense to other people. I care about accessibility,
            repairability, honest build notes, and technology that feels like it
            belongs in a real person&apos;s hands.
          </p>
          <p>
            This site is the launchpad for the work: projects, writing, demos,
            sponsorships, collaborations, and the ongoing record of what I am
            learning out loud.
          </p>
        </div>
      </section>

      <section id="now" className="section channels-section">
        <div className="section-heading">
          <p className="eyebrow">What this becomes</p>
          <h2>A home base for making online.</h2>
        </div>
        <div className="channel-list">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div className="channel-row" key={channel.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{channel.title}</h3>
                <p>{channel.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <Sparkles size={24} aria-hidden="true" />
          <h2>Want to build something together?</h2>
          <p>
            I am open to collaborations, creator partnerships, commissions, and
            conversations around accessibility, hardware, AI voice, and practical
            maker education.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:lucianchapar@gmail.com">
              <Mail size={18} aria-hidden="true" />
              <span>Email Lucy</span>
            </a>
            <a className="button dark" href="https://github.com/lucy-chapar">
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Lucy Chapar</span>
        <a href="https://ko-fi.com/lucychapar">
          <Coffee size={16} aria-hidden="true" />
          <span>Ko-fi</span>
        </a>
      </footer>
    </main>
  );
}

export default App;
