function textHover(elementId, hoverText, originalText) {
    const element = document.getElementById(elementId);

    element.onmouseenter = function() {
        element.textContent = hoverText;
    };

    element.onmouseleave = function() {
        element.textContent = originalText;
    };
}
function imgHover(elementId, hoverImg) {
const element = document.getElementById(elementId);
const originalSrc = element.getAttribute('src');

element.onmouseenter = function() {
element.setAttribute('src', hoverImg);
};

element.onmouseleave = function() {
element.setAttribute('src', originalSrc);
};
}
textHover("name", "AHMED ALHARBI", "RICHARD SANCHEZ");
textHover("major", "COMPUTER SCINECE", "MARKITING MANGER");
textHover("profile", "I seek to join a competitive work team where I employ my skills and abilities to gain scientific expertise in record time and achieve progress in a way that achieves my personal goals and contributions to achieve the institutions achievements and success. " , "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, laudantium ad impedit excepturi expedita odio nesciunt tempore a omnis porro modi autem quidem eveniet debitis. Quas quo repudiandae ad harum?");
textHover("phone", "96652826271", "+123-456-7890");
textHover("mail", "ahmedfalahalharbi@gmail.com", "hello@reallygreatsite.com");
textHover("location", "Ryiadh Aziziah", "123 Anywhere St., Any City");
textHover("site", "https://github.com/AhmedFalahALharbi", "www.reallygreatsite.com");
textHover("graduateyear", "2019 - 2024", "2029 - 2030 ");
textHover("uniName", "TAIBAH UNIVERSITY", "WARDIERE UNIVERSITY");
textHover("major2", "Computer Scinece", "Master of BusinessManagement");
textHover("skill1", "Problem Solving", "Project Management");
textHover("skill2", "critical thinking Solving", "Public Relations ");
textHover("lan1", "English (intermidate)", "English (Fluent)");
textHover("lan2", "Arabic (Fluent)", "Frensh (Fluent)");
textHover("worktitle", "Tuwaiq", "Borcelle Studio");
textHover("workYear", "2023 - 2024", "2030 - PRESENT");
textHover("major3", "Computer Scinece", "Master of BusinessManagement");
textHover("city", "Ryiadh", "Estelle Darcy");
textHover("city2", "Medinah", "Harper Richard");
textHover("cop", "Tuwaiq", "Wardiere Inc. / CTO");
textHover("cop2", "haraj", "Wardiere Inc. / CTO");
textHover("phone2", "phone:966556412345", "phone:123-456-7890");
textHover("phone3", "phone:966556412345", "phone:123-456-7890");
textHover("mail2", "Email:ahmed@gmail.com", "Email:hello@reallygreatsite.com");
imgHover("logo", "Ahmed_IMG.jpg");