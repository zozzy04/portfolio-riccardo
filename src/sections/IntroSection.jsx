export default function IntroSection({ intro }) {
  return (
    <section className="intro-section reveal">
      <h2>{intro.title}</h2>
      <p>{intro.body}</p>
    </section>
  );
}
