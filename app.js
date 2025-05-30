const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 35.99,
      image: "tod.jpg",
      description: "Comfortable cotton T-shirt."
    },
    {
      id: 2,
      name: "Sneakers",
      price: 99.99,
      image: "kod.jpg",
      description: "Stylish everyday sneakers."
    }
  ];
  
  let cartCount = 0;
  
  function renderProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-title">${product.name}</div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <p>${product.description}</p>
        <button onclick="addToCart()">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }
  
  function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  }
  
  renderProducts();
  