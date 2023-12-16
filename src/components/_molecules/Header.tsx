import { Link } from "react-router-dom";
import "../../styles/components/header/style.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <ul className="list">
        <Link to="/">
          <img
            src={require("../../images/logo.png")}
            alt=""
            style={{ width: 70, height: 67 }}
          />
        </Link>
        <Link to="/documentation" style={{ textDecoration: "none" }}>
          <li className="documentation_link">{t("header.documentation")}</li>
        </Link>
      </ul>
      <div className="languages_container">
        <button onClick={() => i18n.changeLanguage("en")}>
          <img
            style={{ width: 20 }}
            src={require("../../images/us-flag.png")}
            alt=""
          />
        </button>
        <button onClick={() => i18n.changeLanguage("ge")}>
          <img
            style={{ width: 20 }}
            src={require("../../images/geo-flag.png")}
            alt=""
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
