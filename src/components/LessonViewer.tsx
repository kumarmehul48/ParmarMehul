
import type { Lesson } from "../data/lesson1";

type LessonViewerProps = {
  lesson: Lesson;
  language: "en" | "gu";
};

export default function LessonViewer({
  lesson,
  language,
}: LessonViewerProps) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <article className="lesson-viewer">
      <header className="lesson-header">
        <p className="eyebrow">{lesson.subtitle}</p>
        <h2>{lesson.title}</h2>
      </header>

      <section className="lesson-objectives">
        <h3>{language === "gu" ? "અભ્યાસના હેતુઓ" : "Learning objectives"}</h3>
        <ul>
          {lesson.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </section>

      {lesson.sections.map((section, index) => (
        <section className="lesson-section" key={index}>
          <h3>{section.heading}</h3>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="lesson-activity">
        <h3>{language === "gu" ? "વિદ્યાર્થી પ્રવૃત્તિ" : "Student activity"}</h3>
        <p>{lesson.activity.prompt}</p>
        <button
          type="button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer
            ? language === "gu" ? "જવાબ છુપાવો" : "Hide answer"
            : language === "gu" ? "મોડેલ જવાબ જુઓ" : "Show model answer"}
        </button>
        {showAnswer && (
          <div className="model-answer">
            <strong>
              {language === "gu" ? "મોડેલ જવાબ" : "Model answer"}
            </strong>
            <p>{lesson.activity.answer}</p>
          </div>
        )}
      </section>

      <section className="lesson-references">
        <h3>{language === "gu" ? "કાનૂની સંદર્ભો" : "Legal references"}</h3>
        <ul>
          {lesson.references.map((reference, index) => (
            <li key={index}>
              <a href={reference.url} target="_blank" rel="noreferrer">
                {reference.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

import React from "react";
