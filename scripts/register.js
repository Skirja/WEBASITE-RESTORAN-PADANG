document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const submitButton = document.getElementById("submitButton");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Mendaftarkan...";

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    submitButton.disabled = false;
    submitButton.textContent = "Daftar";
    alert("Registrasi berhasil!");
  });

  // Initialize Lucide icons
  lucide.createIcons();

  // Animate decorative elements
  function rotateElement(element, duration, direction = 1) {
    let rotation = 0;
    setInterval(() => {
      rotation += direction;
      element.style.transform = `rotate(${rotation}deg)`;
    }, duration);
  }

  function bounceElement(element, distance, duration) {
    let position = 0;
    let direction = 1;
    setInterval(() => {
      position += direction;
      element.style.transform = `translateY(${position}px)`;
      if (Math.abs(position) >= distance) {
        direction *= -1;
      }
    }, duration);
  }

  rotateElement(document.getElementById("coffeeIcon"), 50);
  rotateElement(document.getElementById("utensilsIcon"), 60, -1);
  bounceElement(document.getElementById("flameIcon"), 20, 30);
});
