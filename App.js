document.addEventListener('DOMContentLoaded', function () {
    const Buttons = document.querySelectorAll('.button');
    function AddCart() {
      const cartButton = document.getElementById('cart-value');
      const cartValue = parseInt(cartButton.textContent); 
      const CartValue = cartValue + 1;
      cartButton.textContent = CartValue;
    }
    Buttons.forEach(button => {
      button.addEventListener('click', AddCart);
    });
  });
