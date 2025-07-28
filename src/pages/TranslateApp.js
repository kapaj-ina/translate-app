import TranslateField from "../components/TranslateField";
import "../index.css";

const TranslatePage = () => {
  return (
    <div className="translate-page">
      <img src="/logo.svg" alt="Translate Logo" />
      <div className="translate-fields">
        <TranslateField
          placeholder="Hello, how are you?"
          id="translate-input"
          value="Hello, how are you?"
          onChange={() => {}}
        />
        <TranslateField
          placeholder="Bonjour, comment allez-vous?"
          id="translate-output"
          value="Bonjour, comment allez-vous?"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default TranslatePage;
