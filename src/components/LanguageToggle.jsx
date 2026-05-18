export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <button
        className={language === "it" ? "active" : ""}
        onClick={() => setLanguage("it")}
      >
        IT
      </button>
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
