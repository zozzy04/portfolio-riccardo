export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-bottom footer-bottom--centered">
        <p className="footer-copy">
          © {year} Riccardo Zozzolotto. Made with ♥
        </p>
      </div>
    </footer>
  );
}
