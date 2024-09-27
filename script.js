document.addEventListener("DOMContentLoaded", function () {
  // Function to store the selected order method
  function storeOrderMethod(method) {
    localStorage.setItem("selectedOrderMethod", method);
  }

  // Add click event listeners to order method buttons
  document.querySelectorAll("#order-methods a").forEach((button) => {
    button.addEventListener("click", function () {
      const method = this.closest("div").querySelector("h3").textContent;
      storeOrderMethod(method);
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-amber-800", "shadow-lg");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-amber-800", "shadow-lg");
      navbar.classList.add("bg-transparent");
    }
  });
  // Order methods
  const orderMethods = [
    { title: "Dine-in", icon: "utensils", link: "./pages/booking-dinein.html" },
    {
      title: "Takeaway",
      icon: "shopping-bag",
      link: "./pages/pemilihan-menu.html",
    },
    { title: "Delivery", icon: "truck", link: "./pages/pemilihan-menu.html" },
  ];

  const orderMethodsContainer = document.getElementById("order-methods");
  orderMethods.forEach((method) => {
    const methodElement = document.createElement("div");
    methodElement.className = "w-full sm:w-1/2 md:w-1/3 lg:w-1/4";
    methodElement.innerHTML = `
            <div class="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
                <div data-lucide="${method.icon}" class="w-16 h-16 text-amber-600 mb-4"></div>
                <h3 class="text-xl font-semibold mb-2 text-amber-800">${method.title}</h3>
                <p class="text-gray-600 mb-4">Pesan makanan dengan metode ${method.title.toLowerCase()}</p>
                <button class="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-4 py-2 rounded">Pilih</button>
            </div>
        `;
    const button = methodElement.querySelector("button");
    button.addEventListener("click", function () {
      storeOrderMethod(method.title);
      window.location.href = method.link;
    });
    orderMethodsContainer.appendChild(methodElement);
  });

  // Create Lucide icons for this section
  lucide.createIcons(orderMethodsContainer);
  
  // Testimonials
  const testimonials = [
    {
      name: "Budi Santoso",
      text: "Rendangnya luar biasa lezat! Rasa rempahnya kuat dan dagingnya empuk.",
    },
    {
      name: "Siti Rahma",
      text: "Pelayanannya ramah dan cepat. Suasana restorannya juga nyaman dan bersih.",
    },
    {
      name: "Agus Purnomo",
      text: "Harga terjangkau untuk kualitas makanan yang sangat baik. Pasti akan kembali lagi!",
    },
  ];

  const testimonialsContainer = document.getElementById("testimonials");

  function createTestimonialElement(testimonial) {
    const testimonialElement = document.createElement("div");
    testimonialElement.className =
      "testimonial-item p-6 bg-white shadow-md rounded-lg mx-4";
    testimonialElement.innerHTML = `
      <p class="mb-4 text-gray-600 italic">"${testimonial.text}"</p>
      <p class="font-semibold text-amber-800">- ${testimonial.name}</p>
    `;
    return testimonialElement;
  }

  function populateTestimonials() {
    // Create original set of testimonials
    testimonials.forEach(testimonial => {
      testimonialsContainer.appendChild(createTestimonialElement(testimonial));
    });

    // Clone the testimonials to create a seamless loop
    const testimonialsWidth = testimonialsContainer.scrollWidth;
    let cloneCount = Math.ceil(window.innerWidth / testimonialsWidth) + 1;

    for (let i = 0; i < cloneCount; i++) {
      testimonials.forEach(testimonial => {
        testimonialsContainer.appendChild(createTestimonialElement(testimonial));
      });
    }
  }

  populateTestimonials();

  // Adjust scroll position for seamless looping
  function checkScroll() {
    const containerWidth = testimonialsContainer.scrollWidth / (testimonials.length + 1);
    if (testimonialsContainer.scrollLeft >= containerWidth) {
      testimonialsContainer.scrollLeft -= containerWidth;
    } else if (testimonialsContainer.scrollLeft <= 0) {
      testimonialsContainer.scrollLeft += containerWidth;
    }
  }

  // Animate the scroll
  function scrollTestimonials() {
    testimonialsContainer.scrollLeft += 1;
    checkScroll();
    requestAnimationFrame(scrollTestimonials);
  }

  // Start the animation
  scrollTestimonials();

  // Initialize Lucide icons
  lucide.createIcons();
});
