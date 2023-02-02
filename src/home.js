const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");

  const heading = document.createElement("h1");
  heading.textContent = "WE ARE, HUMAN & COFFEE";

  const p = document.createElement("p");
  p.textContent =
    "Our coffee products are guranteed to be 100% natural from gardening to processing the coffee beans.";

  const img = document.createElement("img");
  img.src = "assets/home.png";
  img.alt = "picture of coffee";

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");
  homeText.appendChild(heading);
  homeText.appendChild(p);

  home.appendChild(homeText);
  home.appendChild(img);

  return home;
};

const homeLoader = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(home());
};

export default homeLoader;
