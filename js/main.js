const burger = document.getElementById("burger");

const handleClick = () => burger.classList.toggle('open');

burger.addEventListener('click', handleClick);