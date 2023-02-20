const loaded = () => console.log("Sahifa yuklandi...");

const sidebar = document.querySelector(".sidebar");
const cards = document.querySelector(".cards");
const selected = document.querySelector(".selected");
const dark = document.querySelector(".dark");
const darkBtn = document.querySelector(".darkBtn");
const addressBtn = document.querySelectorAll('.numbers button');

const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else sidebar.classList.add("hide")
}

const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide");
}

darkBtn.onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else document.body.classList.add("dark")
}

addressBtn.forEach(button => {
  button.onclick = () => {
    alert(button.value);
  }
})

for (const card of cards.children) {
  card.onclick = () => {
    const menu = card.children[0].innerHTML;
    selected.innerHTML = menu;
  }
}