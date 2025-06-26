function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartTableBody = document.querySelector('#cart-table tbody');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  cartTableBody.innerHTML = ''; // Tabelle leeren

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    const itemPrice = item.price || 0; // Preis des Artikels
    totalPrice += itemPrice; // Preis zur Gesamtsumme hinzufügen
  
    row.innerHTML = `
      <td>${item.cpu || '-'}</td>
      <td>${item.cpuCooler || '-'}</td>
      <td>${item.gpu || '-'}</td>
      <td>${item.motherboard || '-'}</td>
      <td>${item.ram || '-'}</td>
      <td>${item.storage || '-'}</td>
      <td>${item.powerSupply || '-'}</td>
      <td>${item.case || '-'}</td>
      <td>${item.os || '-'}</td> <!-- Betriebssystem hinzugefügt -->
      <td>${itemPrice}€</td>
      <td><button onclick="removeFromCart(${index})">Entfernen</button></td>
    `;
    cartTableBody.appendChild(row);
  });

  // Gesamtkosten anzeigen
  totalPriceElement.textContent = `${totalPrice}€`;
}
  
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Artikel entfernen
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Tabelle aktualisieren
    updateCartCount(); // Warenkorb-Anzeige aktualisieren
  }
  
  function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = cart.length;
    }
  }
  
  // Warenkorb laden, wenn die Seite geladen wird
  window.onload = function () {
    loadCart();
    updateCartCount();
  };