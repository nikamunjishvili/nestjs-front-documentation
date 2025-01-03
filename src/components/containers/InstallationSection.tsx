import React from "react";
import CommandBlock from "../../components/_organismes/CommandBlock";

const InstallationSection: React.FC = () => {
    return (
        <div style={{ marginTop: 20, paddingBottom: 30 }}>
            <h1>ინსტალაცია</h1>
            <p className="paragraph">
                პროექტის დასაწყებად შეგიძლიათ ან  <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>Nest CLI</span>-ით შაბლონის გენერირება,
                ან <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>საწყისი პროექტის კლონირება </span>(ორივე მეთოდი იძლევა ერთსა და იმავე
                შედეგს). პროექტის გენერირებისთვის Nest CLI-ის გამოყენებით, გაუშვით
                შემდეგი ბრძანებები. ეს შექმნის ახალ საქაღალდეს, შევსებულს ძირითადი
                Nest ფაილებითა და დამხმარე მოდულებით, რაც უზრუნველყოფს თქვენი
                პროექტის სტანდარტულ საბაზისო სტრუქტურას. რეკომენდირებულია Nest
                CLI-ის გამოყენება დამწყებთათვის. ჩვენ ამ მიდგომით გავაგრძელებთ
                <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}> First Steps </span>სექციაში.
            </p>
            <CommandBlock
                commands={[
                    "$ npm i -g @nestjs/cli",
                    "$ nest new project-name",
                ]}
            />
        </div>
    );
};

export default InstallationSection;
