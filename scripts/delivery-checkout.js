document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkoutForm');
    const submitButton = document.getElementById('submitButton');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const proceedToPaymentButton = document.getElementById('proceedToPayment');

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
        submitButton.textContent = 'Bayar';
        confirmationPopup.classList.remove('hidden');
    });

    proceedToPaymentButton.addEventListener('click', function() {
        confirmationPopup.classList.add('hidden');
        // Here you would typically redirect to a payment page
        alert('Redirecting to payment...');
    });

    // Initialize Lucide icons
    lucide.createIcons();
});