const menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createHeading(
      "Best Sellers",
      "The coffees our customers love best. From dark to light, intense to bright, there's always a new cup worth experiencing."
    )
  );

  const img = "../dist/assets/paper-bag.png";

  const div = document.createElement("div");
  div.classList.add("menu-card-wrapper");
  div.appendChild(createCard(img, "Coffee package", "Regular", "$39 CAD"));
  div.appendChild(createCard(img, "Coffee package", "Dark", "$39 CAD"));
  div.appendChild(createCard(img, "Coffee package", "Surprise", "$39 CAD"));

  menu.appendChild(div);

  return menu;
};

const createHeading = (title, content) => {
  const div = document.createElement("div");
  div.classList.add("menu-heading");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = title;
  p.textContent = content;

  div.appendChild(h1);
  div.appendChild(p);

  return div;
};

const createCard = (image, altText, title, cost) => {
  const div = document.createElement("div");
  div.classList.add("menu-card");

  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const price = document.createElement("p");

  img.src = image;
  img.alt = altText;

  h1.textContent = title;

  price.textContent = cost;

  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(price);

  return div;
};

const menuLoader = () => {
  const main = document.getElementById("content");
  main.textContent = "";
  main.appendChild(menu());
};

export default menuLoader;
