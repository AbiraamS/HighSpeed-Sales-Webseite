document.addEventListener('DOMContentLoaded', () => {
    const totalPriceElement = document.getElementById('total-price');

    // Warenkorb-Daten aus localStorage abrufen
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart Data:', cart); // Debugging-Ausgabe
    let totalPrice = 0;

    // Gesamtkosten berechnen
    cart.forEach(item => {
        const itemPrice = item.price || 0; // Preis des Artikels
        totalPrice += itemPrice * (item.quantity || 1); // Gesamtkosten berechnen
    });

    // Gesamtkosten anzeigen
    totalPriceElement.textContent = `${totalPrice}€`;
});