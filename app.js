const icons = document.querySelectorAll('.icons a');
const bullets = document.querySelectorAll('.swiper-pagination-bullet');

icons.forEach((icon, idx) => {
  icon.addEventListener('click', () => {
    bullets[idx].click();
  });
});
