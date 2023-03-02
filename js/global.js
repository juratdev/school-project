const sidebar = document.querySelector(".sidebar");
const dark = document.querySelector(".dark");
const darkBtn = document.querySelector(".darkBtn");

// Sidebar hide
const toggleSidebar = () => {
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else sidebar.classList.add("hide")
}
// Sidebar hide Esc
const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide");
}
// Dark mode
darkBtn.onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else document.body.classList.add("dark")
}
