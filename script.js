// Define today globally so it's available everywhere
const today = new Date().toISOString().split('T')[0];

// Set today's date as the default value for the date input
const safariDateInput = document.getElementById('safariDate');
if (safariDateInput) {
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
    fetch(MAIL_TRIGGER, {
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
            safariDateInput.value = today; // ✅ Will work now
        }
    })
    .catch(err => {
        alert("Error: " + err.message);
    });
});
