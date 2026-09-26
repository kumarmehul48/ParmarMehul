
import { useState } from "react";

const sessions = [
  {
    en: "Introduction to Cyber Law",
    gu: "સાયબર કાયદાનો પરિચય",
    topics: [
      "Meaning, importance and scope of Cyber Law",
      "Evolution of Cyber Law in India",
      "International perspectives",
    ],
  },
  {
    en: "Information Technology Act, 2000",
    gu: "માહિતી ટેકનોલોજી અધિનિયમ, 2000",
    topics: [
      "Objectives and key provisions of the IT Act",
      "Important amendments",
      "Practical examples and case studies",
    ],
  },
  {
    en: "Cyber Crimes and Legal Provisions",
    gu: "સાયબર ગુનાઓ અને કાનૂની જોગવાઈઓ",
    topics: [
      "Hacking, phishing and identity theft",
      "Relevant legal provisions and penalties",
      "Cybercrime investigation and enforcement",
    ],
  },
  {
    en: "Data Protection and Privacy",
    gu: "ડેટા સુરક્ષા અને ગોપનીયતા",
    topics: [
      "Indian data protection laws",
      "Privacy rights and responsibilities",
      "International privacy standards",
    ],
  },
  {
    en: "Cybersecurity and Digital Safety",
    gu: "સાયબર સુરક્ષા અને ડિજિટલ સલામતી",
    topics: [
      "Cybersecurity policies and frameworks",
      "Role of CERT-In",
      "Practical cybersecurity best practices",
    ],
  },
  {
    en: "E-commerce and Digital Contracts",
    gu: "ઈ-કોમર્સ અને ડિજિટલ કરારો",
    topics: [
      "Electronic records and digital signatures",
      "E-commerce rules and online transactions",
      "Online dispute resolution",
    ],
  },
  {
    en: "Intellectual Property in Cyberspace",
    gu: "સાયબર જગતમાં બૌદ્ધિક સંપદા",
    topics: [
      "Copyright, trademarks and patents",
      "Domain name disputes",
      "Digital rights management",
    ],
  },
  {
    en: "Cybercrime Complaints and Bank Account Freezing",
    gu: "સાયબર ગુનાની ફરિયાદ અને બેંક ખાતા ફ્રીઝ",
    topics: [
      "How to file a cybercrime complaint",
      "Drafting complaints and preserving evidence",
      "Police, cyber cell and bank procedures",
      "Representations and remedies for frozen accounts",
    ],
  },
  {
    en: "Emerging Technologies and Legal Challenges",
    gu: "નવી ટેકનોલોજી અને કાનૂની પડકારો",
    topics: [
      "Artificial Intelligence and legal issues",
      "Blockchain and cryptocurrency",
      "Internet of Things (IoT)",
    ],
  },
  {
    en: "Revision, Discussion and Career Guidance",
    gu: "પુનરાવર્તન, ચર્ચા અને કારકિર્દી માર્ગદર્શન",
    topics: [
      "Course revision and doubt-solving",
      "Practical insights and discussion",
      "Career guidance and certificate instructions",
    ],
  },
];

function App() {
  const [language, setLanguage] = useState<"en" | "gu">("en");
  const [openSession, setOpenSession] = useState<number | null>(0);
  const gu = language === "gu";

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">CL</span>
          <span>Cyber Law <span className="brand-light">Academy</span></span>
        </a>
        <div className="nav-actions">
          <button
            className="language-button"
            onClick={() => setLanguage(gu ? "en" : "gu")}
          >
            {gu ? "ગુજરાતી | EN" : "EN | ગુજરાતી"}
          </button>
          <a className="nav-link" href="#curriculum">
            {gu ? "કોર્સ જુઓ" : "Explore course"}
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {gu ? "વ્યવહારુ શિક્ષણ · ભારત" : "PRACTICAL LEARNING · INDIA"}
          </p>
          <h1>
            {gu ? (
              <>કાયદાને સમજો.<br /><span>ડિજિટલ વિશ્વમાં આગળ વધો.</span></>
            ) : (
              <>Understand the law.<br /><span>Navigate the digital world.</span></>
            )}
          </h1>
          <p className="hero-description">
            {gu
              ? "ભારતીય સાયબર કાયદાનો વ્યવહારુ પરિચય. સરળ ભાષામાં પાઠ, ઉદાહરણો અને અભ્યાસ સામગ્રી."
              : "A guided introduction to Cyber Law in India, with practical examples and learning resources in English and Gujarati."}
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#curriculum">
              {gu ? "કોર્સ શરૂ કરો" : "Explore the curriculum"} <span>→</span>
            </a>
            <span className="course-meta">
              {gu ? "10 સત્રો · 5 અઠવાડિયા" : "10 sessions · 5 weeks"}
            </span>
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

      <section className="intro-strip">
        <div><span className="strip-number">01</span><span>{gu ? "કાયદાના પાયાની સમજ" : "Learn the legal foundations"}</span></div>
        <div><span className="strip-number">02</span><span>{gu ? "વાસ્તવિક ઉદાહરણો" : "Explore real-world scenarios"}</span></div>
        <div><span className="strip-number">03</span><span>{gu ? "વ્યવહારુ જાગૃતિ" : "Build practical awareness"}</span></div>
      </section>

      <section className="curriculum-preview" id="curriculum">
        <div className="curriculum-heading">
          <p className="eyebrow">{gu ? "અભ્યાસક્રમ" : "THE LEARNING PATH"}</p>
          <h2>{gu ? "સાયબર કાયદો, પગલું દર પગલું." : "Cyber Law, step by step."}</h2>
          <p className="section-copy">
            {gu
              ? "10 સત્રોમાં સાયબર કાયદાના મુખ્ય વિષયો શીખો."
              : "Explore the 10 sessions in this Cyber Law course."}
          </p>
        </div>

        <div className="session-list">
          {sessions.map((session, index) => (
            <article className="session-card" key={index}>
              <button
                className="session-toggle"
                onClick={() =>
                  setOpenSession(openSession === index ? null : index)
                }
                aria-expanded={openSession === index}
              >
                <span className="session-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="session-title">
                  <strong>{gu ? session.gu : session.en}</strong>
                  <small>{gu ? "સત્ર" : "SESSION"} {index + 1}</small>
                </span>
                <span className="session-chevron">
                  {openSession === index ? "−" : "+"}
                </span>
              </button>
              {openSession === index && (
                <div className="session-content">
                  <h3>{gu ? "આ સત્રમાં શીખશો" : "Topics covered"}</h3>
                  <ul>
                    {session.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                  <p className="lesson-note">
                    {gu
                      ? "વિગતવાર પાઠ અને અભ્યાસ સામગ્રી આગળના પગલાંમાં ઉમેરવામાં આવશે."
                      : "Detailed lessons and learning materials will be added in the next development steps."}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Cyber Law Academy</span>
        <span>{gu ? "શૈક્ષણિક સંસાધન · ભારત" : "Learning resource · India"}</span>
      </footer>
    </main>
  );
}

export default App;
