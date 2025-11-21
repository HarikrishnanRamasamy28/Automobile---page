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









/* js for book test drive */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bookingForm');

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if form is valid using HTML5 validation API
    if (form.checkValidity()) {
      // If all fields are valid → redirect to 404 page
      window.location.href = './404.html';
    } else {
      // If not valid → show validation UI
      form.reportValidity();  // This shows which field is invalid
    }
  });
});