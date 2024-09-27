document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const submitButton = document.getElementById("submitButton");
  const togglePasswordButton = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  // Pattern background animation
  const patternBackground = document.getElementById("pattern-background");
  let position = 0;
  setInterval(() => {
    position += 1;
    patternBackground.style.backgroundPosition = `${position}px ${position}px`;
  }, 50);

  // Toggle password visibility
  togglePasswordButton.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePasswordButton.innerHTML =
      type === "password"
        ? '<i data-lucide="eye" class="w-5 h-5"></i>'
        : '<i data-lucide="eye-off" class="w-5 h-5"></i>';
    lucide.createIcons();
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Memproses...";

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    submitButton.disabled = false;
    submitButton.textContent = "Masuk";
    alert("Login berhasil!");
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
