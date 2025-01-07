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

      // Remove 'visible' class if scrolled back to top
      if (isAtTop) {
        element.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Trigger the scroll handler on page load to animate elements already in view
  handleScroll();
});
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");

  // Hide all slides
  slides.forEach((slide) => (slide.style.display = "none"));

  // Increment slide index
  slideIndex = (slideIndex + 1) % slides.length;

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Repeat every 2 seconds
  setTimeout(showSlides, 2000);
}
