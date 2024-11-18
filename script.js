// script.js

let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
}

function updateCartCount() {
    const cartButton = document.querySelector('.cart button');
    cartButton.textContent = `Cart (${cart.length})`;
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    let cartDetails = "Your Cart:\n";
    let totalPrice = 0;
    
    cart.forEach(item => {
        cartDetails += `${item.productName} - $${item.price}\n`;
        totalPrice += item.price;
    });
    
    cartDetails += `\nTotal: $${totalPrice.toFixed(2)}`;
    alert(cartDetails);
}
