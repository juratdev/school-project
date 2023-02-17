const loaded = () => console.log("Sahifa yuklandi...");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");
const textTitle = document.querySelector(".title__text");

const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else sidebar.classList.add("hide")
}

const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide");
}

textTitle.style.color = "#001845";
for (const card of cards.children) {
  card.onclick = () => {
    const menu = card.children[0].innerHTML;
    selected.innerHTML = menu;
    selected.style.color = "#001845";
  }
}