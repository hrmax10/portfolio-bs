// hamburger menu functionality
const menu = document.querySelector(".menuIconHolder");

menu.addEventListener("click", () => {
  menu.classList.toggle("openMenu");
});

//about tab functionality
const tabLinks = document.getElementsByClassName("tabLinks");
const tabContents = document.getElementsByClassName("tabContents");

function openTab(element) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("activeLinks");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("activeTab");
  }
  event.currentTarget.classList.add("activeLinks");
  document.getElementById(element).classList.add("activeTab");
}
