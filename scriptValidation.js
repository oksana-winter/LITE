document.querySelector("form").addEventListener("submit", function (e) {
  const firstName = document.getElementById("first-name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (firstName.length < 2) {
    alert("First name must be at least 2 characters.");
    e.preventDefault(); // Stop form submission
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});
