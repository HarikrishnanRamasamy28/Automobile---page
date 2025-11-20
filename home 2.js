const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});









/* faq js code */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('open');

    // Close any open item (optional: only one open at a time)
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('open');
    });

    // Toggle current
    if (!isOpen) {
      faqItem.classList.add('open');
    }
  });
});