document.addEventListener("DOMContentLoaded", function () {
    const safariHeaders = document.querySelectorAll(".safari-section .accordion-header");
    safariHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const row = header.parentElement;
        row.classList.toggle("open");
        const arrow = header.querySelector(".arrow");
        arrow.textContent = row.classList.contains("open") ? "−" : "+";
      });
    });
  });
  