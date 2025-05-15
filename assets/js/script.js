document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.banner-slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.banner-nav.prev');
  const nextBtn = document.querySelector('.banner-nav.next');
  let current = 0;

  // thu nhỏ sibar
  
document.getElementById('sidebarToggle').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');

  const icon = this.querySelector('i');
  icon.classList.toggle('fa-chevron-left');
  icon.classList.toggle('fa-chevron-right');
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


document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('quote-message');
    msg.textContent = 'Chúng tôi đã nhận thông tin và sẽ liên hệ lại trong thời gian sớm nhất. Xin chân thành cảm ơn.';
    msg.classList.add('visible');
    this.reset();
    setTimeout(() => {
      msg.classList.remove('visible');
    }, 3000);
  });



