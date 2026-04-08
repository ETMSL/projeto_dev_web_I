const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let scrollAmount = 0;
const scrollStep = 388;

next.addEventListener("click", () => {
  slides.scrollBy({ left: scrollStep, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  slides.scrollBy({ left: -scrollStep, behavior: "smooth" });
});
