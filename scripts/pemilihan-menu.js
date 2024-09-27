const menuItems = [
    { id: 1, name: 'Rendang', category: 'Daging', price: 45000, image: '../assets/rendang.jpg' },
    { id: 2, name: 'Ayam Pop', category: 'Ayam', price: 35000, image: '../assets/ayam-pop.jpg' },
    { id: 3, name: 'Gulai Ikan', category: 'Ikan', price: 40000, image: '../assets/gulai-ikan.jpg' },
    { id: 4, name: 'Ayam Bakar Padang', category: 'Ayam', price: 38000, image: '../assets/ayam-bakar-padang.jpg' },
    { id: 5, name: 'Dendeng Batokok', category: 'Daging', price: 50000, image: '../assets/dendeng-batokok.jpg' },
    { id: 6, name: 'Sayur Nangka', category: 'Sayur', price: 25000, image: '../assets/sayur-nangka.jpg' },
    { id: 7, name: 'Kalio', category: 'Daging', price: 48000, image: '../assets/kalio.jpg' },
    { id: 8, name: 'Paru Goreng', category: 'Daging', price: 35000, image: '../assets/paru-goreng.jpg' },
    { id: 9, name: 'Perkedel', category: 'Sayur', price: 8000, image: '../assets/perkedel.jpg' },
    { id: 10, name: 'Telur Dadar Padang', category: 'Telur', price: 15000, image: '../assets/telor-dadar-padang.jpg' },
    { id: 11, name: 'Es Teh', category: 'Minuman', price: 5000, image: '../assets/es-teh.jpg' },
    { id: 12, name: 'Es Jeruk', category: 'Minuman', price: 7000, image: '../assets/es-jeruk.jpg' },
];

let cart = [];
let isMobile = window.innerWidth < 768;
document.addEventListener('DOMContentLoaded', function() {

  // Get the selected order method from localStorage
  const selectedOrderMethod = localStorage.getItem('selectedOrderMethod');

  console.log('Selected order method:', selectedOrderMethod);

  // Set the appropriate checkout link based on the selected order method
  let checkoutLink;
  try {
    if (selectedOrderMethod === 'Takeaway') {
      checkoutLink = 'takeaway-checkout.html';
    } else if (selectedOrderMethod === 'Delivery') {
      checkoutLink = 'delivery-checkout.html';
    } else if (selectedOrderMethod === 'Dine-in') {
      checkoutLink = 'booking-dinein.html';
    } else {
      throw new Error('Invalid or missing order method');
    }
  } catch (error) {
    console.error('Error setting checkout link:', error.message);
    // Default to dine-in if there's an error
    checkoutLink = 'booking-dinein.html';
  }

  console.log('Checkout link set to:', checkoutLink);

  // Store the checkout link in a global variable to use later
  window.checkoutLink = checkoutLink;  
  
    renderMenuItems();
    renderCart();
    setupEventListeners();
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
});

function renderMenuItems() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = menuItems.map(item => `
        <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-4">${item.category}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-amber-600">Rp ${item.price.toLocaleString()}</span>
                    <button onclick="addToCart(${item.id})" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded">
                        Tambah
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}
function renderCart() {
    const cartContent = getCartContent();
    document.getElementById('desktop-cart').innerHTML = cartContent;
    document.getElementById('mobile-cart').innerHTML = `
        <div class="p-4">
            <button id="close-mobile-cart" class="absolute top-4 right-4 p-2">
                <i data-lucide="x" class="h-8 w-8"></i>
            </button>
            <div class="cart-content mt-12">
                ${cartContent}
            </div>
        </div>
    `;
    updateCartCount();
    lucide.createIcons();
    
    // Add event listener for close button
    document.getElementById('close-mobile-cart').addEventListener('click', function() {
        document.getElementById('mobile-cart').classList.add('hidden');
    });    

    // Re-attach event listener for close button
    document.getElementById('close-mobile-cart').addEventListener('click', function() {
        document.getElementById('mobile-cart').classList.add('hidden');
    });
}
function getCartContent() {
    const itemsHtml = cart.length === 0
        ? '<p class="text-gray-500 my-4">Keranjang Anda kosong. Silakan tambahkan item untuk mulai berbelanja.</p>'
        : cart.map(item => `
            <div class="flex justify-between items-center mb-2">
                <span class="font-medium flex-grow mr-2">${item.name}</span>
                <div class="flex items-center">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i data-lucide="minus" class="h-4 w-4"></i>
                    </button>
                    <span class="mx-2 w-6 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i data-lucide="plus" class="h-4 w-4"></i>
                    </button>
                    <span class="ml-2 w-20 text-right">Rp ${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            </div>
        `).join('');

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const isCartEmpty = cart.length === 0;
    const checkoutLink = window.checkoutLink || 'booking-dinein.html'; // Default to dine-in if not set
    return `
        <div class="bg-white p-4 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4 text-amber-800">Keranjang</h2>
            ${itemsHtml}
            <div class="mt-4 pt-4 border-t border-gray-200">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-bold">Total:</span>
                    <span class="font-bold text-amber-600">Rp ${totalPrice.toLocaleString()}</span>
                </div>
                <a href="${isCartEmpty ? '#' : checkoutLink}" 
                   class="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded ${isCartEmpty ? 'opacity-50 cursor-not-allowed' : ''} inline-block text-center"
                   ${isCartEmpty ? 'onclick="return false;"' : ''}>
                    Pesan
                </a>
            </div>
        </div>
    `;
}

function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    renderCart();
}

function updateQuantity(id, newQuantity) {
    if (newQuantity === 0) {
        cart = cart.filter(item => item.id !== id);
    } else {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
        }
    }

    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (count > 0) {
        cartCountElement.textContent = count;
        cartCountElement.classList.remove('hidden');
    } else {
        cartCountElement.classList.add('hidden');
    }
}

function setupEventListeners() {
    document.getElementById('mobile-cart-button').addEventListener('click', function() {
        document.getElementById('mobile-cart').classList.remove('hidden');
    });

    document.getElementById('close-mobile-cart').addEventListener('click', function() {
        document.getElementById('mobile-cart').classList.add('hidden');
    });
}

function checkIsMobile() {
    isMobile = window.innerWidth < 768;
    document.getElementById('desktop-cart').classList.toggle('hidden', isMobile);
    document.getElementById('mobile-cart-button').classList.toggle('hidden', !isMobile);
}