let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let carousel = document.querySelector(".carousel");
let paginationDotsContainer = document.querySelector(".pagination-dots");
let slides = document.getElementsByClassName("slide").length;
currentSlide = 0;

function startingSlide(index) {
  currentSlide = (index + slides) % slides;

  carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
  updateActiveDot();
}

function createPaginationDots() {
  for (let i = 0; i < slides; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.slideIndex = i;

    dot.addEventListener("click", function () {
      startingSlide(parseInt(dot.dataset.slideIndex));
    });
    paginationDotsContainer.appendChild(dot);
  }
  updateActiveDot();
}

function updateActiveDot() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function nextSlide(direction) {
  let index = currentSlide + direction;
  startingSlide(index);
}

function prevSlide(direction) {
  let index = currentSlide - direction;
  startingSlide(index);
}
nextBtn.addEventListener("click", function () {
  nextSlide(+1);
});
prevBtn.addEventListener("click", function () {
  prevSlide(-1);
});

createPaginationDots();
