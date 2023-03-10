import homeLoader from "./home";
import menuLoader from "./menu";
import contactLoader from "./contact";

// create header
const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerLogo = document.createElement("h1");
  headerLogo.classList.add("logo");
  headerLogo.textContent = "C☕FFEE";

  header.appendChild(headerLogo);
  header.appendChild(createNav());

  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const home = document.createElement("button");
  home.textContent = "Home";
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  const contact = document.createElement("button");
  contact.textContent = "Contact";

  home.onclick = homeLoader;
  menu.onclick = menuLoader;
  contact.onclick = contactLoader;

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

// main
const createMain = () => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";
  return main;
};

// footer
const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const heading = document.createElement("h2");
  const date = new Date().getFullYear();
  heading.innerText = `Copyright ${date} \u00A9 Kian2002`;

  const linkToGh = document.createElement("a");
  linkToGh.href = "https://github.com/Kian2002/odin-coffee";
  linkToGh.target = "_blank";
  linkToGh.classList.add("fa-brands");
  linkToGh.classList.add("fa-github");
  linkToGh.classList.add("fa-xl");

  footer.appendChild(heading);
  footer.appendChild(linkToGh);

  return footer;
};

const generateSite = () => {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  homeLoader();
};

document.addEventListener("DOMContentLoaded", generateSite());
