// Event-Listener für das Code-Formular
document.getElementById("code-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Standardformularverhalten

  const codeInput = document.getElementById("code-input").value;
  const errorMessage = document.getElementById("error-message");

  // Beispiel: Der richtige Code ist "12345"
  if (codeInput === "12345") {
      // Weiterleitung zur nächsten Seite
      window.location.href = "home.html"; // Ersetze "home.html" durch die Zielseite
  } else {
      // Fehlermeldung anzeigen
      errorMessage.textContent = "Der eingegebene Code ist falsch. Bitte versuchen Sie es erneut.";
  }
});

// Funktion, um die Anzahl der Artikel im Warenkorb zu aktualisieren
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log("Warenkorb-Inhalt:", cart); // Debugging-Ausgabe
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
      cartCountElement.textContent = cart.length; // Anzahl der Artikel im Warenkorb
      console.log("Warenkorb-Anzahl aktualisiert:", cart.length); // Debugging-Ausgabe
  } else {
      console.log("Element mit ID 'cart-count' nicht gefunden."); // Debugging-Ausgabe
  }
}

window.onload = function () {
  console.log("Home-Seite geladen."); // Debugging-Ausgabe
  updateCartCount();
};