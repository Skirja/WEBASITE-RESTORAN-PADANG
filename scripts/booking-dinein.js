document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const submitButton = document.getElementById('submitButton');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const paymentButton = document.getElementById('paymentButton');

    // Initialize Flatpickr for date input
    flatpickr("#date", {
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    // Pattern background animation
    const patternBackground = document.getElementById('pattern-background');
    let position = 0;
    setInterval(() => {
        position += 1;
        patternBackground.style.backgroundPosition = `${position}px ${position}px`;
    }, 50);

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = 'Memproses...';

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        submitButton.disabled = false;
        submitButton.textContent = 'Booking Sekarang';
        confirmationPopup.classList.remove('hidden');
    });

    paymentButton.addEventListener('click', function() {
        confirmationPopup.classList.add('hidden');
        // Here you would typically redirect to a payment page or open a payment modal
        alert('Redirecting to payment...');
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

    rotateElement(document.getElementById('utensilsIcon'), 50);
    rotateElement(document.getElementById('bookOpenIcon'), 60, -1);
});