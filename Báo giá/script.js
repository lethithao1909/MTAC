document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.banner-slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.banner-nav.prev');
  const nextBtn = document.querySelector('.banner-nav.next');
  let current = 0;

  function goToSlide(idx) {
    const img = slides[idx];
    if (!img.src) {
      img.src = img.dataset.src;
    }
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    slides[idx].classList.add('active');
    dots[idx].classList.add('active');
    current = idx;
  }

  prevBtn.addEventListener('click', () => {
    const prevIdx = (current - 1 + slides.length) % slides.length;
    goToSlide(prevIdx);
  });
  nextBtn.addEventListener('click', () => {
    const nextIdx = (current + 1) % slides.length;
    goToSlide(nextIdx);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(+dot.dataset.index);
    });
  });

  goToSlide(0);
  });
  const serviceCards = document.querySelector('.service-cards');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelector(".service-cards");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    const scrollAmount = 320;
  
    leftArrow.addEventListener("click", () => {
      serviceCards.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  
    rightArrow.addEventListener("click", () => {
      serviceCards.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  
 

