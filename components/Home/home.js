function generateHomePage() {
  const homePage = document.createElement("div");
  homePage.id = "home-page";
  document.body.appendChild(homePage);

  //menu container
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  homePage.appendChild(menuContainer);

  //content container
  const contentContainer = document.createElement("div");
  contentContainer.id = "content-container";
  homePage.appendChild(contentContainer);

  const headerContainer = document.createElement("div");
  headerContainer.id = "header-container";
  contentContainer.appendChild(headerContainer);

  const name = document.createElement("p");
  name.id = "name";
  name.innerText = "ARDIUS MARIA";
  const position = document.createElement("p");
  position.id = "position";
  position.innerText = "Web Developer";

  headerContainer.appendChild(name);
  headerContainer.appendChild(position);

  //HOME CONTAINER
  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";
  contentContainer.appendChild(homeContainer);

  const homeContentContainer = document.createElement("div");
  homeContentContainer.id = "home-content-container";
  homeContainer.appendChild(homeContentContainer);

  const leftHomeContainer = document.createElement("div");
  leftHomeContainer.id = "left-home-container";
  homeContentContainer.appendChild(leftHomeContainer);

  const rightHomeContainer = document.createElement("div");
  rightHomeContainer.id = "right-home-container";
  homeContentContainer.appendChild(rightHomeContainer);

  const socialContainer = document.createElement("div");
  socialContainer.id = "social-container";
  socialContainer.innerText = "Social Media";
  rightHomeContainer.appendChild(socialContainer);

  const iconsContainer = document.createElement("div");
  iconsContainer.id = "icons-container";
  rightHomeContainer.appendChild(iconsContainer);

  const helloContainer = document.createElement("div");
  helloContainer.id = "hello-container";
  helloContainer.innerText = "-Hello!";
  leftHomeContainer.appendChild(helloContainer);

  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.id = "aboutme-container";
  aboutMeContainer.innerText = "About me";
  leftHomeContainer.appendChild(aboutMeContainer);

  const introductionContainer = document.createElement("div");
  introductionContainer.id = "introduction-container";
  introductionContainer.innerText =
    "I am looking for a creative and exciting job that combines both working with people and technical projects. I read the description of this job and I realized that I have to give it a try! I am enthusiastic about facing new challenges, expressing my creativity and exploring new areas by learning something different. I love pushing myself into progress and I want to help others achieve their goals. My intention is for us to find the best solutions together, because improving the quality of life for people, along with effective communication is our common purpose.";
  leftHomeContainer.appendChild(introductionContainer);

  //STUDIES CONTAINER
  const studiesContainer = document.createElement("div");
  studiesContainer.id = "studies-container";
  contentContainer.appendChild(studiesContainer);

  const studiesInfoContainer = document.createElement("div");
  studiesInfoContainer.id = "studiesInfo-container";
  studiesContainer.appendChild(studiesInfoContainer);
  //school of it
  const schoolIt = document.createElement("a");
  schoolIt.id = "itschool-container";
  schoolIt.innerText = "SCOALA INFORMALA DE IT | CLUJ-NAPOCA";
  schoolIt.href = "https://scoalainformala.ro/";
  schoolIt.target = "_blank";
  studiesInfoContainer.appendChild(schoolIt);

  const schoolItsection = document.createElement("p");
  schoolItsection.id = "itschoolsection-container";
  schoolItsection.innerText = "Web Development | 2020 ";
  studiesInfoContainer.appendChild(schoolItsection);

  const schoolItinfo = document.createElement("div");
  schoolItinfo.id = "schoolItinfo-container";
  schoolItinfo.innerHTML =
    "I know how to build an User Interface using HTML5 and CSS3. In JavaScript I learned how to use variables, functions, objects, scope, AJAX, jQuery, DOM. From HTTP, I know fundamentals about the protocol: methods, headers, error codes. About PHP I learned how to use variables, functions, classes, includes, interaction with the browser and CRUD operations on a database, updating and creating tables (MySQL). With OOP we practiced the basics about classes, objects and inheritance in PHP. I used ReactJS and NodeJS to build the final team project and single project.";
  studiesInfoContainer.appendChild(schoolItinfo);

  //faculty
  const etti = document.createElement("a");
  etti.id = "etti-container";
  etti.innerText =
    "TECHNICAL UNIVERSITY, FACULTY OF ELECTRONICS AND TELECOMUNICATIONS | CLUJ-NAPOCA";
  etti.href = "https://etti.utcluj.ro/";
  etti.target = "_blank";
  studiesInfoContainer.appendChild(etti);

  const ettiSection = document.createElement("p");
  ettiSection.id = "ettiSection-container";
  ettiSection.innerText = "Economical Engeneering | 2016-2018";
  studiesInfoContainer.appendChild(ettiSection);

  const ettiInfo = document.createElement("div");
  ettiInfo.id = "ettiInfo-container";
  ettiInfo.innerHTML =
    "I have the basic knowledge in Electronic Science and Technology. I learned how to build and play with electronic circuits ( on breadboard ) + small single and team projects. I know how to use a digital multimeter and the analog oscilloscope.";
  studiesInfoContainer.appendChild(ettiInfo);

  //liceu

  const colegium = document.createElement("a");
  colegium.id = "colegium-container";
  colegium.innerText = "COLEGIUL NATIONAL TITU MAIORESCU | AIUD";
  colegium.href = "https://www.titumaiorescuaiud.ro/";
  colegium.target = "_blank";
  studiesInfoContainer.appendChild(colegium);

  const colegiumSection = document.createElement("p");
  colegiumSection.id = "colegiumSection-container";
  colegiumSection.innerText = "Mathematical Informatics | 2012-2016";
  studiesInfoContainer.appendChild(colegiumSection);

  //EXPERIENCE CONTAINER
  const experienceContainer = document.createElement("div");
  experienceContainer.id = "experience-container";
  contentContainer.appendChild(experienceContainer);

  const experienceContent = document.createElement("div");
  experienceContent.id = "experience-content";
  experienceContainer.appendChild(experienceContent);

  const professionalH = document.createElement("div");
  professionalH.id = "professional-history";
  professionalH.innerText = "Professional History";
  experienceContent.appendChild(professionalH);

  const finP = document.createElement("p");
  finP.innerText = "Financial Planning Consultant";
  professionalH.appendChild(finP);
  const finPperiod = document.createElement("span");
  finPperiod.innerText = "OVB Allfinanz | April 2020 - present";
  professionalH.appendChild(finPperiod);
  const baristaM = document.createElement("p");
  baristaM.innerText = "Barista";
  professionalH.appendChild(baristaM);
  const baristaMP = document.createElement("span");
  baristaMP.innerText = "Meron Roastery | July 2020 - present";
  professionalH.appendChild(baristaMP);

  const baristaN = document.createElement("p");
  baristaN.innerText = "Barista";
  professionalH.appendChild(baristaN);
  const baristaNP = document.createElement("span");
  baristaNP.innerText = "Narcoffee Roasters | August 2018 - July 2020";
  professionalH.appendChild(baristaNP);

  const bartender = document.createElement("p");
  bartender.innerText = "Bartender";
  professionalH.appendChild(bartender);
  const bartenderP = document.createElement("span");
  bartenderP.innerText = "/Form Space | November 2017 - Octomber 2018";
  professionalH.appendChild(bartenderP);

  const technicalExp = document.createElement("div");
  technicalExp.id = "technical-exp";
  technicalExp.innerText = "Technical Skills";
  experienceContent.appendChild(technicalExp);

  const technicalStudies = document.createElement("p");
  technicalStudies.innerText = "Technical Studies";
  technicalExp.appendChild(technicalStudies);

  const eIng = document.createElement("span");
  eIng.innerText = "- Economical Engineering";
  technicalExp.appendChild(eIng);

  const microsoftOffice = document.createElement("p");
  microsoftOffice.innerText = "Microsoft Office";
  technicalExp.appendChild(microsoftOffice);

  const mW = document.createElement("span");
  mW.innerText = "- Microsoft Word";
  technicalExp.appendChild(mW);
  const mE = document.createElement("span");
  mE.innerText = "- Microsoft Excel";
  technicalExp.appendChild(mE);
  const mPP = document.createElement("span");
  mPP.innerText = "- Microsoft PowerPoint";
  technicalExp.appendChild(mPP);

  const webDev = document.createElement("p");
  webDev.innerText = "Web Development";
  technicalExp.appendChild(webDev);

  const HC = document.createElement("span");
  HC.innerText = "- HTML, CSS";
  technicalExp.appendChild(HC);
  const jS = document.createElement("span");
  jS.innerText = "- Javascript";
  technicalExp.appendChild(jS);
  const nJ = document.createElement("span");
  nJ.innerText = "- NodeJS";
  technicalExp.appendChild(nJ);
  const rJ = document.createElement("span");
  rJ.innerText = "- ReactJS  ";
  technicalExp.appendChild(rJ);
  const gD = document.createElement("span");
  gD.innerText = "- Graphic design";
  technicalExp.appendChild(gD);

  //HOBBIES CONTAINER
  const hobbiesContainer = document.createElement("div");
  hobbiesContainer.id = "hobbies-container";
  contentContainer.appendChild(hobbiesContainer);

  const hobbiesContent = document.createElement("div");
  hobbiesContent.id = "hobbies-content";
  hobbiesContainer.appendChild(hobbiesContent);
  //hobbie1
  const hobbie1 = document.createElement("div");
  hobbie1.id = "hobbie1-container";
  hobbiesContent.appendChild(hobbie1);

  const hobbies1Title = document.createElement("p");
  hobbies1Title.innerText = "Making Coffee & Cooking";
  hobbie1.appendChild(hobbies1Title);

  const hobbiephoto1 = document.createElement("img");
  hobbiephoto1.id = "profile-photo";
  hobbiephoto1.setAttribute("src", "coffee.jpg");
  hobbie1.appendChild(hobbiephoto1);

  //hobbie2

  const hobbie2 = document.createElement("div");
  hobbie2.id = "hobbie2-container";
  hobbiesContent.appendChild(hobbie2);

  const hobbies2Title = document.createElement("p");
  hobbies2Title.innerText = "Tattoos & The Sea";
  hobbie2.appendChild(hobbies2Title);

  const hobbiephoto2 = document.createElement("img");
  hobbiephoto2.id = "profile-photo";
  hobbiephoto2.setAttribute("src", "tattoos.jpg");
  hobbie2.appendChild(hobbiephoto2);

  //hobbie3
  const hobbie3 = document.createElement("div");
  hobbie3.id = "hobbie3-container";
  hobbiesContent.appendChild(hobbie3);

  const hobbies3Title = document.createElement("p");
  hobbies3Title.innerText = "All the Cats";
  hobbie3.appendChild(hobbies3Title);

  const hobbiephoto3 = document.createElement("img");
  hobbiephoto3.id = "profile-photo";
  hobbiephoto3.setAttribute("src", "cat.jpg");
  hobbie3.appendChild(hobbiephoto3);

  //hobbie4
  const hobbie4 = document.createElement("div");
  hobbie4.id = "hobbie2-container";
  hobbiesContent.appendChild(hobbie4);

  const hobbies4Title = document.createElement("p");
  hobbies4Title.innerText = "Drawing Mandala & Painting";
  hobbie4.appendChild(hobbies4Title);

  const hobbiephoto4 = document.createElement("img");
  hobbiephoto4.id = "profile-photo";
  hobbiephoto4.setAttribute("src", "mandala.jpg");
  hobbie4.appendChild(hobbiephoto4);

  //CONTACT CONTAINER
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  contentContainer.appendChild(contactContainer);

  const contactTitle = document.createElement("div");
  contactTitle.id = "contact-title";
  contactTitle.innerText = "Find me here!";
  contactContainer.appendChild(contactTitle);

  const phone = document.createElement("p");
  phone.innerText = "Phone: ";
  contactTitle.appendChild(phone);

  const phoneN = document.createElement("span");
  phoneN.innerText = "0729166396";
  contactTitle.appendChild(phoneN);

  const mail = document.createElement("p");
  mail.innerText = "E-mail: ";
  contactTitle.appendChild(mail);

  const mailA = document.createElement("span");
  mailA.innerText = "ardius.maria97@gmail.com";
  contactTitle.appendChild(mailA);

  const linkedIn = document.createElement("p");
  linkedIn.innerText = "linkedIn: ";
  contactTitle.appendChild(linkedIn);

  const linkedInP = document.createElement("a");
  linkedInP.innerText = "Ardius Maria";
  linkedInP.href = "https://www.linkedin.com/in/maria-ardius-69419b195/";
  linkedInP.target = "_blank";
  contactTitle.appendChild(linkedInP);

  const address = document.createElement("p");
  address.innerText = "Address: ";
  contactTitle.appendChild(address);

  const adressL = document.createElement("span");
  adressL.innerText = "Cluj-Napoca, Observatorului Street";
  contactTitle.appendChild(adressL);

  //profile photo
  const photoContainer = document.createElement("div");
  photoContainer.id = "photo-container";
  menuContainer.appendChild(photoContainer);

  const profilePhoto = document.createElement("img");
  profilePhoto.id = "profile-photo";
  profilePhoto.setAttribute("src", "profile.jpg");
  menuContainer.appendChild(profilePhoto);

  document.getElementById("home-container").style.display = "block";
  document.getElementById("studies-container").style.display = "none";
  document.getElementById("experience-container").style.display = "none";
  document.getElementById("hobbies-container").style.display = "none";
  document.getElementById("contact-container").style.display = "none";

  //menu buttons

  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttons-container";
  menuContainer.appendChild(buttonsContainer);

  const homeButton = document.createElement("button");
  homeButton.id = "homeButton";
  homeButton.classList.add("noselect");
  homeButton.innerText = "Home";
  const circle1 = document.createElement("div");
  circle1.classList.add("circle");

  buttonsContainer.appendChild(homeButton);
  homeButton.appendChild(circle1);

  //click on Home
  homeButton.addEventListener("click", () => {
    console.log("i was clicked home");
    document.getElementById("home-container").style.display = "block";
    document.getElementById("studies-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("hobbies-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
  });

  const studiesButton = document.createElement("button");
  studiesButton.id = "studiesButton";
  studiesButton.classList.add("noselect");
  studiesButton.innerText = "Studies";
  const circle2 = document.createElement("div");
  circle2.classList.add("circle");

  buttonsContainer.appendChild(studiesButton);
  studiesButton.appendChild(circle2);

  //click on Studies
  studiesButton.addEventListener("click", () => {
    console.log("i was clicked studies");
    document.getElementById("home-container").style.display = "none";
    document.getElementById("studies-container").style.display = "block";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("hobbies-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
  });

  const experienceButton = document.createElement("button");
  experienceButton.id = "experienceButton";
  experienceButton.classList.add("noselect");
  experienceButton.innerText = "Experience";
  const circle3 = document.createElement("div");
  circle3.classList.add("circle");

  buttonsContainer.appendChild(experienceButton);
  experienceButton.appendChild(circle3);

  //click on Experience
  experienceButton.addEventListener("click", () => {
    console.log("i was clicked experience");
    document.getElementById("home-container").style.display = "none";
    document.getElementById("studies-container").style.display = "none";
    document.getElementById("experience-container").style.display = "block";
    document.getElementById("hobbies-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
  });

  const hobbiesButton = document.createElement("button");
  hobbiesButton.id = "hobbiesButton";
  hobbiesButton.classList.add("noselect");
  hobbiesButton.innerText = "Hobbies";
  const circle4 = document.createElement("div");
  circle4.classList.add("circle");

  buttonsContainer.appendChild(hobbiesButton);
  hobbiesButton.appendChild(circle4);

  //click on Hobbies
  hobbiesButton.addEventListener("click", () => {
    console.log("i was clicked hobbies");
    document.getElementById("home-container").style.display = "none";
    document.getElementById("studies-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("hobbies-container").style.display = "block";
    document.getElementById("contact-container").style.display = "none";
  });

  const contactButton = document.createElement("button");
  contactButton.id = "contactButton";
  contactButton.classList.add("noselect");
  contactButton.innerText = "Contact";
  const circle5 = document.createElement("div");
  circle5.classList.add("circle");

  buttonsContainer.appendChild(contactButton);
  contactButton.appendChild(circle5);

  //click on Contact
  contactButton.addEventListener("click", () => {
    console.log("i was clicked contact");
    document.getElementById("home-container").style.display = "none";
    document.getElementById("studies-container").style.display = "none";
    document.getElementById("experience-container").style.display = "none";
    document.getElementById("hobbies-container").style.display = "none";
    document.getElementById("contact-container").style.display = "block";
  });
}

generateHomePage();
