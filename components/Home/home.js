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

  //profile photo
  const photoContainer = document.createElement("div");
  photoContainer.id = "photo-container";
  menuContainer.appendChild(photoContainer);

  const profilePhoto = document.createElement("img");
  profilePhoto.id = "profile-photo";
  profilePhoto.setAttribute("src", "profile.jpg");
  menuContainer.appendChild(profilePhoto);

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
    console.log("i was clicked");
    //content container
    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    contentContainer.appendChild(homeContainer);
  });

  const studiesButton = document.createElement("button");
  studiesButton.id = "studiesButton";
  studiesButton.classList.add("noselect");
  studiesButton.innerText = "Studies";
  const circle2 = document.createElement("div");
  circle2.classList.add("circle");

  buttonsContainer.appendChild(studiesButton);
  studiesButton.appendChild(circle2);

  const experienceButton = document.createElement("button");
  experienceButton.id = "experienceButton";
  experienceButton.classList.add("noselect");
  experienceButton.innerText = "Experience";
  const circle3 = document.createElement("div");
  circle3.classList.add("circle");

  buttonsContainer.appendChild(experienceButton);
  experienceButton.appendChild(circle3);

  const hobbiesButton = document.createElement("button");
  hobbiesButton.id = "hobbiesButton";
  hobbiesButton.classList.add("noselect");
  hobbiesButton.innerText = "Hobbies";
  const circle4 = document.createElement("div");
  circle4.classList.add("circle");

  buttonsContainer.appendChild(hobbiesButton);
  hobbiesButton.appendChild(circle4);

  const contactButton = document.createElement("button");
  contactButton.id = "contactButton";
  contactButton.classList.add("noselect");
  contactButton.innerText = "Contact";
  const circle5 = document.createElement("div");
  circle5.classList.add("circle");

  buttonsContainer.appendChild(contactButton);
  contactButton.appendChild(circle5);
}

generateHomePage();
