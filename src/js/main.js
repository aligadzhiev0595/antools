const burger = document.querySelector(".burger"),
  nav = document.querySelector(".header__nav"),
  link = document.querySelectorAll(".header__link")


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
	document.body.classList.toggle('overflow')
});

link.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
  })
})