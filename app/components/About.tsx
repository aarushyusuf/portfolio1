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
            I&apos;m an Aerospace Engineering student at the University of Sheffield. Right now
            I&apos;m doing aerodynamics and mechanical design for Sheffield EcoMotorsport&apos;s
            solar race car, and project managing a quadcopter UAS build. Before that I designed
            a safety-critical piston for a reusable liquid rocket engine at AVROS Rocketry.
          </p>
          <p>
            I led a ten-person team to a live rocket launch at 1,700 ft, then wrote the
            post-flight failure analysis that explained why the nosecone came off. I
            scratch-built an RC aircraft and only got it flying after tracing a repeated
            in-flight failure to a centre of gravity sitting at 60% chord.
          </p>
          <p>
            The work I find most useful is figuring out exactly why something failed, rather
            than swapping parts until it stops.
          </p>
        </div>
      </div>
    </section>
  );
}
