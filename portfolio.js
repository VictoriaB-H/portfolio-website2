document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".slide-in");

  const handleScroll = () => {
    const isAtTop = window.scrollY === 0;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (elementVisible) {
        element.classList.add("visible");
      }

      // Fjerner 'visible' class hvis (if) der er scrolled tilbage til toppen
      if (isAtTop) {
        element.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");

  slides.forEach((slide) => (slide.style.display = "none"));

  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].style.display = "block";

  setTimeout(showSlides, 2000);
}
