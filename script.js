const phoneNumber = "919842817277";

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Products
const products = [
  {
    name: "Coconut Sapling",
    image: "sapling.jpg"
  },
  {
    name: "Coconut",
    image: "coconut.jpg"
  },
  {
    name: "Coconut Oil",
    image: "oil.jpg"
  }
];

const container = document.getElementById("product-container");

if (container) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.onclick = () => {
      const msg = `Hello, I'm interested in ${product.name}. Please share details.`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`);
    };

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
    `;

    container.appendChild(card);
  });
}
