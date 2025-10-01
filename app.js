let products = [
  { name: "Teddy Bear", price: 500, img: "images/teddy.jpg" },
  { name: "Flower Bouquet", price: 300, img: "images/flowers.jpg" },
  { name: "Chocolate Box", price: 450, img: "images/chocolate.jpg" },
  { name: "Wrist Watch", price: 1200, img: "images/watch.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
  let productList = document.getElementById("productList");
  if (!productList) return;
  products.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" width="150"><br>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  if (!cartItems) return;
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = total;
}

function placeOrder(event) {
  event.preventDefault();
  alert("🎉 Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

loadProducts();
displayCart();
