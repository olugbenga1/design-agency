let nav = document.querySelector(".nav-links");

let navList = document.createElement("ul");
navList.classList.add("menu");

// Creating the nav link (about)
let aboutList = document.createElement("li");
let aboutLink = document.createElement("a");
aboutLink.href = "javascript:void(0)";
aboutLink.id = "aboutId";
aboutLink.classList = "menuItem";
aboutLink.textContent = "About";
aboutList.appendChild(aboutLink);
navList.appendChild(aboutList);
nav.appendChild(navList);

// get the aboutLink id and about section id
let aboutLinkId = document.getElementById("aboutId");
let about = document.getElementById("about");

// adding the scroll function to the about link
addScroll(aboutLinkId, about);

// creating the nav link (services)
let servicesList = document.createElement("li");
let servicesLink = document.createElement("a");
servicesLink.href = "javascript:void(0)";
servicesLink.id = "servicesId";
servicesLink.classList = "menuItem";
servicesLink.textContent = "Services";
servicesList.appendChild(servicesLink);
navList.appendChild(servicesList);
nav.appendChild(navList);

// get the servicesLink and services section id
let servicesLinkId = document.getElementById("servicesId");
let services = document.getElementById("services");

// add scroll function to the services link
addScroll(servicesLinkId, services);

// creating the nav link (portfolio)
let portfolioList = document.createElement("li");
let portfolioLink = document.createElement("a");
portfolioLink.href = "javascript:void(0)";
portfolioLink.id = "portfolioId";
portfolioLink.classList = "menuItem";
portfolioLink.textContent = "Portfolio";
portfolioList.appendChild(portfolioLink);
navList.appendChild(portfolioList);
nav.appendChild(navList);

// get the portfolioLink and portfolio section id
let portfolioLinkId = document.getElementById("portfolioId");
let portfolio = document.getElementById("portfolio");

// add scroll function to services
addScroll(portfolioLinkId, portfolio);

// creating the nav link (team)
let teamList = document.createElement("li");
let teamLink = document.createElement("a");
teamLink.href = "javascript:void(0)";
teamLink.id = "teamId";
teamLink.classList = "menuItem";
teamLink.textContent = "Team";
teamList.appendChild(teamLink);
navList.appendChild(teamList);
nav.appendChild(navList);

// get the teamLink and team section id
let teamLinkId = document.getElementById("teamId");
let team = document.getElementById("team");

// add scroll function to team
addScroll(teamLinkId, team);

// creating the nav link (contact)
let contactList = document.createElement("li");
let contactLink = document.createElement("a");
contactLink.href = "javascript:void(0)";
contactLink.id = "contactId";
contactLink.classList = "menuItem";
contactLink.textContent = "Contact";
contactList.appendChild(contactLink);
navList.appendChild(contactList);
nav.appendChild(navList);

// get the contactLink and contact section id
let contactLinkId = document.getElementById("contactId");
let contact = document.getElementById("contact");

// add scroll function to contact
addScroll(contactLinkId, contact, contactLink);

// get the boundless logo and hero section id
let logo = document.getElementById("logo");
let hero = document.getElementById("hero");

// add scroll function to the hero section
addScroll(logo, hero);

// javascript to toggle nav menu
const menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menuItem");
const navToggle = document.querySelector(".nav-toggle");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const current = document.querySelector(".active");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  }
}

navToggle.addEventListener("click", toggleMenu);

// To close the menu when you click a nav link in mobile mode.
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

// the scroll function
function addScroll(linkId, sectionId) {
  linkId.addEventListener("click", function () {
    sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// function addScroll(linkId, sectionId, menuItems) {
//     linkId.addEventListener("click", function() {
//         let scrolled = sectionId.scrollIntoView({behavior: "smooth", block: "start"});
//         return scrolled;
//     });
//     for (let i = 0; i < menuItems.length; i++) {
//         if (scrolled){
//         menuItems[i].classList.add(".active");
//         } else {
//             menuItems[i].classList.remove("active");
//         }
//     }
// }
