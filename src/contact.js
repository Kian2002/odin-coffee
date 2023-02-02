const contact = () => {
  const contact = document.createElement("h1");
  contact.classList.add("contact");
  contact.textContent = "Find our coffee at your local stores";

  return contact;
};

const contactLoader = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(contact());
};

export default contactLoader;
