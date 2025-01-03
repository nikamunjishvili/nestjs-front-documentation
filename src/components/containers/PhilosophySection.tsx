import React from "react";

const PhilosophySection: React.FC = () => {
    return (
        <div style={{ marginTop: 20 }}>
            <h1>ფილოსოფია</h1>
            <p className="paragraph">
                ბოლო წლებში, Node.js-ის წყალობით, JavaScript ვებ-აპლიკაციების
                "ლინგვა ფრანკად" იქცა როგორც ფრონტენდ, ასევე ბექენდ
                პროექტებისთვის. ამან საფუძველი ჩაუყარა შესანიშნავ პროექტებს,
                როგორებიცაა <span style={{ color: "#f1455f", fontWeight: 600, display: "inline" }}>Angular, React და Vue,</span> რომლებიც აუმჯობესებენ
                დეველოპერების პროდუქტიულობას და შესაძლებელს ხდიან სწრაფი,
                ტესტირებადი და მარტივად გაფართოებადი ფრონტენდ აპლიკაციების
                შექმნას. თუმცა, მიუხედავად იმისა, რომ Node.js-ს (და სერვერულ
                JavaScript-ს) ბევრი ბრწყინვალე ბიბლიოთეკა, დამხმარე ინსტრუმენტი და
                ხელსაწყო აქვს, არცერთი მათგანი ეფექტურად არ წყვეტს არქიტექტურის
                მთავარ პრობლემას.
            </p>
            <p className="paragraph">
                Nest უზრუნველყოფს მზა აპლიკაციური არქიტექტურას,
                რომელიც დეველოპერებსა და გუნდებს საშუალებას აძლევს შექმნან
                ტესტირებადი, მასშტაბირებადი, სუსტად დაკავშირებული და მარტივად
                მართვადი აპლიკაციები. Nest-ის არქიტექტურა დიდწილად შთაგონებულია
                Angular-ით.
            </p>
        </div>
    );
};

export default PhilosophySection;