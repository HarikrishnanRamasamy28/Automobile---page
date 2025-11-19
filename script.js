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











// buying guide js code 
// JavaScript to handle toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});
