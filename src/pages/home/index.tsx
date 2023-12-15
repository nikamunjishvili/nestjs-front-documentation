import { useTranslation } from "react-i18next";
import MainLayout from "../../components/layouts/MainLayout";
import "../../styles/home/style.css";
import { Button } from "../../components/_molecules";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="home_container">
        <div className="container">
          <h1 style={{ color: "#ffffff", fontSize: "2em" }}>
            {t("home.title")}
          </h1>
          <p style={{ fontSize: "18px", color: "#ffffff", width: "40rem" }}>
            {t("home.description")}
          </p>
          <div className="button_container">
            <Link to="/documentation">
              <Button
                value={t("home.documentation")}
                width={200}
                height={50}
                backgroundColor="#ea2845"
                rounded={10}
                border="none"
                color="#FFFF"
              />
            </Link>
            <Button
              value={t("home.buttonCode")}
              width={200}
              height={50}
              backgroundColor="#ea2845"
              rounded={10}
              border="none"
              color="#FFFF"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
