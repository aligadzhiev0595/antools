const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
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
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
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


<section class="carousel" id="portfolio">
        <div class="container">
          <h2 class="carousel__title">Мои работы</h2>
          <div class="flex-wrapper">
            <div class="slider-wrapper">
              <div class="slide active">
                <a
                  href="https://weather-app-tuesday.herokuapp.com/"
                  target="_blank"
                >
                  <img src="./src/image/portfolio/weather.webp" alt="" />
                </a>
              </div>
              <div class="slide">
                <a
                  href="https://todo-react-redux-v2.herokuapp.com/"
                  target="_blank"
                >
                  <img src="./src/image/portfolio/todoList.webp" alt="" />
                </a>
              </div>

              <div id="btn-prev"></div>
              <div id="btn-next"></div>
            </div>
          </div>
          <div class="dots-wrapper">
            <span class="dot active"></span>
            <span class="dot"></span>
            <!-- <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span> -->
          </div>
        </div>
      </section>


.carousel{
  // display: none;
  &__title {
      padding-bottom: 20px;
      color: #fff;
      text-align: center;
  }
  .flex-wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      border-radius: 10px;

      background: linear-gradient(95deg, rgb(33, 36, 44) 0%, rgba(15, 15, 16, 0) 100%);
  }
  .slider-wrapper{
      max-width: 800px;
      width: 100%;
      height: 490px;
      position: relative;
      box-shadow: 10px 10px 44px -10px rgba(0, 0, 0, 0.75);
  }
  #btn-prev, #btn-next{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50px;
      background: gray;
      opacity: 0.4;
      cursor: pointer;
      transition: opacity .2s ease-in-out;
  }
  #btn-prev{
      &:hover{
          opacity: 0.6;
      }
  }
  #btn-next{
      left: auto;
      right: 0;
      &:hover{
          opacity: 0.6;
      }
  }
  .slide{
      width: 100%;
      height: 100%;
      display: none;
  }
  .slide.active{
      display: block;
  }
  img{
      width: 100%;
      height: 100%;
  }
  .dots-wrapper{
      display: flex;
      justify-content: center;
      margin-top: 15px;
  }
  .dot.active{
      background: rgba(130,217,249,1);
  }
  span{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: gray;
      margin-right: 10px;
      cursor: pointer;
      &:last-child{
          margin-right: 0;
      }
  }
}