const loaded = () => console.log("Sahifa yuklandi...");

const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");
const darkBtn = document.querySelector(".darkBtn");

const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else sidebar.classList.add("hide")
}

const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide");
}

for (const card of cards.children) {
  card.onclick = () => {
    const menu = card.children[0].innerHTML;
    selected.innerHTML = menu;
  }
}

darkBtn.onclick = () => {
  if (document.body.id === "dark") {
    document.body.id = "";
  } else document.body.id = "dark";
}