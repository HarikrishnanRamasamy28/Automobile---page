const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});











  // JS for filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modelItems = document.querySelectorAll('.model-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Make only clicked button active
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      modelItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });