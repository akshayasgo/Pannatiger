// Floating Chatbot Toggle
function toggleChatOptions() {
  document.getElementById('chatOptions').classList.toggle('show');
}

// Jungle Carousel Dragging Functionality
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.jungle-carousel');
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  carousel.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Speed of scroll (increase multiplier for faster)
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Optional: Automatically scroll the carousel every 3 seconds
  setInterval(() => {
    const scrollAmount = carousel.scrollWidth / carousel.children.length;
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const row = header.parentElement;
      row.classList.toggle("open");
      const arrow = header.querySelector(".arrow");
      arrow.textContent = row.classList.contains("open") ? "−" : "+";
    });
  });
});

    // Set today's date as the default value for the date input
    const safariDateInput = document.getElementById('safariDate');
    if (safariDateInput) {
        const today = new Date().toISOString().split('T')[0];
        safariDateInput.value = today;
    }

    // Handle form submission
    document.getElementById("safariForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
    
        // Send data to Google Apps Script or your server
        fetch("https://script.google.com/macros/s/AKfycbzqhBmRGwdVpJSOodAXIPp0-VhJyPc5Y5LRWaDI7tXE6q_agnXAxXkg7awAaez_XFYz/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            // Show success message and reset the form
            document.getElementById("successMessage").style.display = "block";
            form.reset();
            if (safariDateInput) {
                safariDateInput.value = today;
            }
        })
        .catch(err => {
            // Handle any errors
            alert("Error: " + err.message);
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
      const links = [
        { id: 'homeLink', target: 'home' },
        { id: 'safariInfoLink', target: 'safari-info' },
        { id: 'zonesLink', target: 'entry-gates' },
        { id: 'timeing', target: 'time' },
        { id: 'bookSafariLink', target: 'testc' }
      ];
  
      links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
          element.addEventListener('click', function(event) {
            event.preventDefault();
            const targetElement = document.getElementById(link.target);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
              console.log(`Element with ID "${link.target}" not found.`);
            }
          });
        }
      });
    });

    function scrollToTestc() {
      // Scroll to the section with the ID 'testc'
      document.getElementById('testc').scrollIntoView({ behavior: 'smooth' });
  }
