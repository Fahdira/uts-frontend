const API_BASE_URL = "";

async function loadProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/products`);
    const products = await res.json();

    const container = document.getElementById('products');
    container.innerHTML = '';

    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product-card');
      div.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Failed to load products:", err);
  }
}

loadProducts();
