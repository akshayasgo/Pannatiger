document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split('T')[0];
  const safariDateInput = document.getElementById('safariDate');

  if (safariDateInput) {
    safariDateInput.value = today;
  }

  // Handle form submission
  const safariForm = document.getElementById("safariForm");
  if (safariForm) {
    safariForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send data to Google Apps Script or your server
      fetch(MAIL_TRIGGER, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(() => {
        document.getElementById("successMessage").style.display = "block";
        form.reset();
        if (safariDateInput) {
          safariDateInput.value = today;
        }
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
    });
  }

  // You can move your other DOMContentLoaded code here as well...
});
