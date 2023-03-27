/**
 * brief: burger menu
 */
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

/**
 * brief: btn login & sign-up
 */

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

/**
 * brief: logic for loading additional cards
 */

document.querySelector(".tools__more").onclick = function () {
  document.querySelector(".tools__more").classList.toggle("active");
  if (document.querySelector(".tools__more").classList.contains("active")) {
    document.querySelector(".tools__more").textContent = "Hide";
  } else {
    document.querySelector(".tools__more").textContent = "Load more...";
  }
  document.querySelectorAll(".hide").forEach((el) => {
    el.classList.toggle("active");
  });
};

/**
 * brief: logic for  sliders
 */

const prev = document.querySelector(".btn-prev"),
  next = document.querySelector(".btn-next"),
  sliders = document.querySelectorAll(".review__wrapper"),
  dots = document.querySelectorAll(".dot");
console.log(sliders);
let index = 0;

const activeSlide = (n) => {
  for (slide of sliders) {
    slide.classList.remove("active");
  }
  sliders[n].classList.add("active");

};
const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == sliders.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = sliders.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// setInterval(nextSlide, 2500)