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
  rightHomeContainer.innerText = "right";
  homeContentContainer.appendChild(rightHomeContainer);

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
  introductionContainer.innerText = "I am looking for a creative and exciting job that combines both working with people and technical projects. I read the description of this job and I realized that I have to give it a try! I am enthusiastic about facing new challenges, expressing my creativity and exploring new areas by learning something different. I love pushing myself into progress and I want to help others achieve their goals. My intention is for us to find the best solutions together, because improving the quality of life for people, along with effective communication is our common purpose.";
  leftHomeContainer.appendChild(introductionContainer);

  //STUDIES CONTAINER
  const studiesContainer = document.createElement("div");
  studiesContainer.id = "studies-container";
  contentContainer.appendChild(studiesContainer);

  const studiesTitle = document.createElement("div");
  studiesTitle.id = "studies-title";
  studiesTitle.innerText = "Studies";
  studiesContainer.appendChild(studiesTitle);

  //EXPERIENCE CONTAINER
  const experienceContainer = document.createElement("div");
  experienceContainer.id = "experience-container";
  contentContainer.appendChild(experienceContainer);

  const experienceTitle = document.createElement("div");
  experienceTitle.id = "experience-title";
  experienceTitle.innerText = "Experience";
  experienceContainer.appendChild(experienceTitle);

  //HOBBIES CONTAINER
  const hobbiesContainer = document.createElement("div");
  hobbiesContainer.id = "hobbies-container";
  contentContainer.appendChild(hobbiesContainer);

  const hobbiesTitle = document.createElement("div");
  hobbiesTitle.id = "hobbies-title";
  hobbiesTitle.innerText = "Hobbies";
  hobbiesContainer.appendChild(hobbiesTitle);

  //CONTACT CONTAINER
  const contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  contentContainer.appendChild(contactContainer);

  const contactTitle = document.createElement("div");
  contactTitle.id = "contact-title";
  contactTitle.innerText = "Contact";
  contactContainer.appendChild(contactTitle);

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
