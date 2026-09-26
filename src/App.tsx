function App() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Cyber Law Course home">
          <span className="brand-mark">CL</span>
          <span>Cyber Law <span className="brand-light">Academy</span></span>
        </a>
        <div className="nav-actions">
          <span className="language-label">EN <span aria-hidden="true">/</span> ગુજરાતી</span>
          <a className="nav-link" href="#curriculum">Explore course</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> PRACTICAL LEARNING · INDIA</p>
          <h1>Understand the law.<br /><span>Navigate the digital world.</span></h1>
          <p className="hero-description">
            A guided introduction to Cyber Law in India, with practical examples
            and learning resources in English and Gujarati.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#curriculum">Explore the curriculum <span aria-hidden="true">→</span></a>
            <span className="course-meta">10 sessions <span>·</span> 5 weeks</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="shield">
            <div className="shield-inner"><span className="shield-check">✓</span></div>
          </div>
          <span className="art-chip chip-top">DIGITAL RIGHTS</span>
          <span className="art-chip chip-bottom">CYBER SAFETY</span>
          <span className="art-spark spark-one">✳</span>
          <span className="art-spark spark-two">✦</span>
        </div>
      </section>

      <section className="intro-strip" id="curriculum">
        <div><span className="strip-number">01</span><span>Learn the legal foundations</span></div>
        <div><span className="strip-number">02</span><span>Explore real-world scenarios</span></div>
        <div><span className="strip-number">03</span><span>Build practical awareness</span></div>
      </section>

      <section className="curriculum-preview">
        <div>
          <p className="eyebrow">THE LEARNING PATH</p>
          <h2>Cyber Law, step by step.</h2>
          <p className="section-copy">The course outline and detailed lessons will be added in the next development steps.</p>
        </div>
        <div className="module-card">
          <span className="module-tag">MODULE 01</span>
          <h3>Introduction to Cyber Law</h3>
          <p>Meaning, importance, scope, and the evolution of Cyber Law in India.</p>
          <span className="coming-soon">Lesson content coming next <span aria-hidden="true">↗</span></span>
        </div>
      </section>
      <footer><span>Cyber Law Academy</span><span>Learning resource · India</span></footer>
    </main>
  );
}

export default App;
