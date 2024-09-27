const menuItems = [
  { id: 1, name: 'Rendang', category: 'Daging', price: 45000, image: '../assets/rendang.jpg', description: 'Daging sapi yang dimasak dengan rempah-rempah khas Padang' },
  { id: 2, name: 'Ayam Pop', category: 'Ayam', price: 35000, image: '../assets/ayam-pop.jpg', description: 'Ayam goreng khas Padang dengan tekstur lembut' },
  { id: 3, name: 'Gulai Ikan', category: 'Ikan', price: 40000, image: '../assets/gulai-ikan.jpg', description: 'Ikan dimasak dengan kuah santan dan rempah-rempah' },
  { id: 4, name: 'Ayam Bakar Padang', category: 'Ayam', price: 38000, image: '../assets/ayam-bakar-padang.jpg', description: 'Ayam bakar dengan bumbu khas Padang' },
  { id: 5, name: 'Dendeng Batokok', category: 'Daging', price: 50000, image: '../assets/dendeng-batokok.jpg', description: 'Irisan daging sapi yang dipukul-pukul dan digoreng kering' },
  { id: 6, name: 'Sayur Nangka', category: 'Sayur', price: 25000, image: '../assets/sayur-nangka.jpg', description: 'Nangka muda yang dimasak dengan santan dan rempah' },
  { id: 7, name: 'Kalio', category: 'Daging', price: 48000, image: '../assets/kalio.jpg', description: 'Hidangan daging bersantan mirip rendang dengan warna lebih terang' },
  { id: 8, name: 'Paru Goreng', category: 'Daging', price: 35000, image: '../assets/paru-goreng.jpg', description: 'Irisan paru sapi yang digoreng kering dan renyah' },
  { id: 9, name: 'Perkedel', category: 'Sayur', price: 8000, image: '../assets/perkedel.jpg', description: 'Gorengan kentang dengan daging cincang' },
  { id: 10, name: 'Telur Dadar Padang', category: 'Telur', price: 15000, image: '../assets/telor-dadar-padang.jpg', description: 'Telur dadar tebal khas Padang' },
  { id: 11, name: 'Es Teh', category: 'Minuman', price: 5000, image: '../assets/es-teh.jpg', description: 'Teh manis dingin yang menyegarkan' },
  { id: 12, name: 'Es Jeruk', category: 'Minuman', price: 7000, image: '../assets/es-jeruk.jpg', description: 'Jus jeruk segar dengan es' },
];

const categories = ['Semua', ...new Set(menuItems.map(item => item.category))];
let activeCategory = 'Semua';

function renderCategories() {
  const categoryFilters = document.getElementById('category-filters');
  categoryFilters.innerHTML = categories.map(category => `
    <button
      onclick="setActiveCategory('${category}')"
      class="category-btn ${activeCategory === category ? 'bg-amber-600 text-white' : 'text-amber-600 border-amber-600 hover:bg-amber-100'} px-4 py-2 rounded-full transition-all duration-300 ease-in-out"
    >
      ${category === 'Semua' ? 'Semua Menu' : category}
    </button>
  `).join('');
}

function renderMenuItems() {
  const menuItemsContainer = document.getElementById('menu-items');
  const filteredItems = activeCategory === 'Semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  menuItemsContainer.innerHTML = filteredItems.map(item => `
    <div class="menu-item bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="relative h-48">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <span class="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-sm">
          ${item.category}
        </span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-amber-800">${item.name}</h3>
        <p class="text-gray-600 mb-4">${item.description}</p>
        <div class="flex justify-end items-center">
          <span class="text-lg font-bold text-amber-600">
            Rp ${item.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function setActiveCategory(category) {
  activeCategory = category;
  renderCategories();
  renderMenuItems();
}

function updateStats() {
  const foodCount = menuItems.filter(item => item.category !== 'Minuman').length;
  const drinkCount = menuItems.filter(item => item.category === 'Minuman').length;

  document.getElementById('food-count').textContent = `${foodCount} Makanan`;
  document.getElementById('drink-count').textContent = `${drinkCount} Minuman`;
}

// Initial render
renderCategories();
renderMenuItems();
updateStats();