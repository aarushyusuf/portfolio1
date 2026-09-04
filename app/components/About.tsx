export default function About() {
  return (
    <section id="about">
      <div className="section-eyebrow reveal">About</div>
      <div className="about-grid">
        <h2 className="about-heading reveal">
          Engineering things that <em>actually</em> get built.
        </h2>
        <div className="about-body reveal">
          <p>
            I&apos;m an Aerospace Engineering student at the University of Sheffield, currently
            designing a safety-critical piston for a reusable liquid rocket engine at AVROS
            Rocketry and working on aerodynamics and mechanical design for Sheffield
            EcoMotorsport&apos;s solar race car.
          </p>
          <p>
            I care about the full lifecycle, not just designing something but seeing it
            manufactured, tested, and broken. I led a ten-person team to a live rocket launch at
            1,700 ft, then wrote the post-flight failure analysis that explained why the nosecone
            came off. I scratch-built an RC aircraft, and only got it flying after tracing a
            repeated in-flight failure to a centre of gravity sitting at 60% MAC.
          </p>
          <p>
            The pattern I keep coming back to is diagnosis: figuring out precisely why a thing
            failed, rather than replacing parts until it stops. That is usually where the
            engineering actually is.
          </p>
        </div>
      </div>
    </section>
  );
}
