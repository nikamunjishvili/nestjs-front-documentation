import React from "react";
import IntroductionSection from "./IntroductionSection";
import PhilosophySection from "./PhilosophySection";
import InstallationSection from "./InstallationSection";

const MainContent: React.FC = () => {
    return (
        <div
            style={{
                marginLeft: "270px",
                flexGrow: 1,
                padding: "20px",
                height: "100%",
                color: "#dfdfe3",
            }}
        >
            <IntroductionSection />
            <PhilosophySection />
            <InstallationSection />
        </div>
    );
};

export default MainContent;
