import { certifications, education, interests, skills } from "../data/profile";

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="section-eyebrow reveal">Credentials</div>

      {/* Education */}
      <div className="cred-block reveal">
        <h3 className="cred-heading">Education</h3>
        <ul className="cred-education">
          {education.map((e) => (
            <li key={e.school}>
              <div className="cred-edu-head">
                <span className="cred-edu-school">{e.school}</span>
                <span className="cred-edu-period">{e.period}</span>
              </div>
              <div className="cred-edu-qual">{e.qualification}</div>
              <div className="cred-edu-result">{e.result}</div>
              <div className="cred-edu-detail">{e.detail}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical skills */}
      <div className="cred-block reveal">
        <h3 className="cred-heading">Technical Skills</h3>
        <div className="cred-skills">
          {skills.map((s) => (
            <div key={s.group}>
              <div className="cred-skill-group">{s.group}</div>
              <div className="acc-tags" style={{ marginBottom: 0 }}>
                {s.items.map((item) => (
                  <span key={item} className="ctag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications + interests share a row — both are short lists */}
      <div className="cred-split reveal">
        <div className="cred-block" style={{ marginBottom: 0 }}>
          <h3 className="cred-heading">Certifications</h3>
          <ul className="cred-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span className="cred-list-name">{c.name}</span>
                <span className="cred-list-detail">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cred-block" style={{ marginBottom: 0 }}>
          <h3 className="cred-heading">Interests</h3>
          <ul className="cred-list">
            {interests.map((i) => (
              <li key={i.name}>
                <span className="cred-list-name">{i.name}</span>
                <span className="cred-list-detail">{i.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
