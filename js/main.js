const menuToggle = document.querySelector(".config");
const popUp = document.querySelector(".pop-up");
const footer = document.querySelector("footer");
const docs = document.querySelector("footer ul");
const clock = document.querySelector(".clock");

const logoButton = document.querySelector(".logo");
const header = document.querySelector("header ");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const desktop = document.querySelector(".desktop");

const bashPopUp = document.querySelector(".bash");
const bashOpen = document.querySelector(".bash-open");
const bashClose = document.querySelector(".bash-close");

function handleOpenTerminal() {
  bashPopUp.classList.toggle("show");
}

bashOpen.addEventListener("click", () => {
  handleOpenTerminal();
});

bashClose.addEventListener("click", () => {
  handleOpenTerminal();
});

function handleOpenSearchOptions() {
  header.classList.toggle("search-show");
  container.classList.toggle("search-show");
  search.classList.toggle("visible");
  desktop.classList.toggle("hidden");
}

logoButton.addEventListener("click", () => {
  handleOpenSearchOptions();
});

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function whatTimeIsIt() {
  var d = new Date();
  var day = d.getDate();
  var month = months[d.getMonth()];
  var hours = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
  var seconds = d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`;

  var minutes = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`;

  clock.innerHTML = `${day} de ${month} ${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function () {
  window.setInterval(() => {
    whatTimeIsIt();
  }, 1000);
});

footer.addEventListener("mouseover", () => {
  docs.style.transform = "translateY(0px)";
});

footer.addEventListener("mouseleave", () => {
  docs.style.transform = "translateY(60px)";
});

menuToggle.addEventListener("click", () => {
  popUp.classList.toggle("show");
});
