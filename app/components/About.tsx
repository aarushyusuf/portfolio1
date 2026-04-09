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
            I&apos;m a first-year Aerospace Engineering student at the University of Sheffield,
            with hands-on experience ranging from aircraft maintenance internships in Dubai to
            founding and leading a competitive student rocketry team.
          </p>
          <p>
            I care about the full lifecycle &mdash; not just designing something, but seeing it
            manufactured, tested, and shipped. Whether that&apos;s iterating a battery mount six
            times until the FEA passes, or building a web tool from scratch that now serves eight
            mosques across the UK, I see things through.
          </p>
        </div>
      </div>
    </section>
  );
}
