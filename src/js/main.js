const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");

const handleClick = () => {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
};

burger.addEventListener("click", handleClick);
