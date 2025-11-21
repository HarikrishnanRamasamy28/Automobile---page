const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});








// document.addEventListener("DOMContentLoaded", function() {
//   const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       console.log("Entry:", entry, "isIntersecting:", entry.isIntersecting);

//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//         obs.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.2 });

//   // Observe all elements that should animate when scrolled into view
//   document.querySelectorAll(".animate-on-scroll").forEach(el => {
//     observer.observe(el);
//   });
// });







/* subscribe button js code */

const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');

  form.addEventListener('submit', function(event) {
    // Prevent default submit
    event.preventDefault();

    // Check if form is valid using HTML5 validation API
    if (form.checkValidity()) {
      // If valid, redirect
      window.location.href = './404.html';
    } else {
      // If not valid, show the browser's default validation UI
      emailInput.reportValidity();  
      // Or you can show a custom message / UI
    }
  });








// buying guide js code 
// JavaScript to handle toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});
