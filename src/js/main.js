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

document.querySelector(".header__btn-login").onclick = function () {
  document.querySelector(".overlay").classList.add("overlay_active");
  document
    .querySelector(".popup__form-login")
    .classList.add("popup__form-login_active");
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
};
document.querySelector(".header__btn-signup").onclick = function () {
  document.querySelector(".overlay").classList.add("overlay_active");
  document
    .querySelector(".popup__form-signup")
    .classList.add("popup__form-signup_active");
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
};
document.querySelector(".popup__close").onclick = function () {
  document.querySelector(".overlay").classList.remove("overlay_active");
  document
    .querySelector(".popup__form-login")
    .classList.remove("popup__form-login_active");
  document
    .querySelector(".popup__form-signup")
    .classList.remove("popup__form-signup_active");
};