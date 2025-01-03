import React from "react";

const IntroductionSection: React.FC = () => {
    return (
        <>
            <h1>შესავალი</h1>
            <p className="paragraph">
                Nest (NestJS) არის ჩარჩო, რომელიც გამოიყენება ეფექტური და
                მასშტაბირებადი
                <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>
                    Node.js
                </span>
                -ს სერვერული აპლიკაციების შესაქმნელად. ის იყენებს პროგრესულ
                JavaScript-ს, აგებულია{" "}
                <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>
                    TypeScript
                </span>
                -ზე და სრულად უჭერს მას მხარს (მიუხედავად ამისა, დეველოპერებს კვლავ
                შეუძლიათ სუფთა JavaScript-ში კოდის წერა). Nest აერთიანებს ობიექტზე
                ორიენტირებული პროგრამირების (OOP), ფუნქციონალური პროგრამირების (FP)
                და ფუნქციურად რეაქტიული პროგრამირების (FRP) ელემენტებს.
            </p>
            <p className="paragraph">
                შიდა სტრუქტურაში Nest იყენებს ძლიერი HTTP სერვერული ჩარჩოებს,
                როგორებიცაა{" "}
                <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>
                    Express
                </span>
                (ნაგულისხმევად) და სურვილისამებრ{" "}
                <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>
                    Fastify
                </span>
                -ს გამოყენებაც შესაძლებელია.
            </p>
            <p className="paragraph">
                Nest უზრუნველყოფს აბსტრაქციის მაღალ დონეს ამ ტიპურ Node.js ჩარჩოებზე
                (Express/Fastify), თუმცა ამავე დროს უშუალოდ აძლევს დეველოპერს
                წვდომას მათი API-ებზე. ეს დეველოპერებს თავისუფლებას აძლევს
                გამოიყენონ მრავალი მესამე მხარის მოდული, რომლებიც ხელმისაწვდომია
                Node.js პლატფორმისთვის.
            </p>
        </>
    );
};

export default IntroductionSection;
