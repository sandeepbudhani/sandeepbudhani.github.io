document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMessage").textContent = `Thanks for your feedback, ${name}!`;
    this.reset();
  } else {
    document.getElementById("responseMessage").textContent = "Please fill out all fields.";
  }
});
