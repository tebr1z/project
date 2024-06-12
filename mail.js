document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      fullName: document.getElementById("name").value,
      phoneNumber: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      seats: document.getElementById("seats").value,
      email: document.getElementById("email").value,
      notes: document.getElementById("notes").value,
    };
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'none';
    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        messageElement.textContent = "Email successfully sent";
        messageElement.className = "message success";
      } else {
        messageElement.textContent = "Failed to send email";
        messageElement.className = "message error";
      }
    } catch (error) {
      console.error("Error:", error);
      messageElement.textContent = "An error occurred while sending email";
      messageElement.className = "message error";
    }

    messageElement.style.display = "block";
  });
