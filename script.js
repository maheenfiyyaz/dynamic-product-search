
const products = [
    { name: "tomato", inStock: true },
    { name: "onion", inStock: false },
    { name: "potato", inStock: true },
    { name: "salt", inStock: true },
    { name: "biyani masla", inStock: false },
    { name: "oil", inStock: true },
  ];
  
  
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const productsContainer = document.getElementById("productsContainer");
  
  
  function searchProducts() {
    
    productsContainer.innerHTML = "";
  
    
    const query = searchInput.value.toLowerCase().trim();
  
    
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  
   
    filteredProducts.forEach(product => {
      
      const productButton = document.createElement("button");
      productButton.classList.add("product-button");
      productButton.textContent = product.name;
  
      if (product.inStock) {
        productButton.classList.add("in-stock");
        productButton.innerHTML += '<span>In Stock</span>';
      } else {
        productButton.classList.add("disabled");
        productButton.innerHTML += '<span>Out of Stock</span>';
        productButton.disabled = true;
      }
  
      
      productsContainer.appendChild(productButton);
    });
  
    
    if (filteredProducts.length === 0) {
      productsContainer.innerHTML = "<p>No products found.</p>";
    }
  }
  
  
  searchButton.addEventListener("click", searchProducts);
  

  searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      searchProducts();
    }
  });
  