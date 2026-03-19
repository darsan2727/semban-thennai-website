// WhatsApp Number (with country code, no +)
const phoneNumber = "919842817277";

// PRODUCT LIST (Your actual products)
const products = [
  {
    name: "Coconut Sapling",
    image: "https://images.unsplash.com/photo-1598514982846-1c4c6a1f4f0d"
  },
  {
    name: "Coconut",
    image: "https://images.unsplash.com/photo-1587502537745-84e5fba0c3d7"
  },
  {
    name: "Coconut Oil",
    image: "https://images.unsplash.com/photo-1604908177522-402f45f6f8ab"
  }
];

// Get container
const container = document.getElementById("product-container");

// Load products
if (container) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <button onclick="orderProduct('${product.name}')">
        Enquire on WhatsApp
      </button>
    `;

    container.appendChild(card);
  });
}

// WhatsApp function
function orderProduct(productName) {
  const message = `Hello, I'm interested in ${productName}. Please share details.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
