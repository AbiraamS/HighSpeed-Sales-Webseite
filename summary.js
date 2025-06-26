// Funktion, um die Zusammenfassung zu laden
function loadSummary() {
    console.log("loadSummary wurde aufgerufen"); // Debugging-Log

    // Konfiguration aus dem LocalStorage laden
    const components = JSON.parse(localStorage.getItem('pcConfiguration')) || {};
    console.log("Geladene Konfiguration:", components); // Debugging-Log

    // Fülle die Zusammenfassung mit den Komponenten oder setze Standardwerte
    document.getElementById('summary-cpu').textContent = components.cpu || '-';
    document.getElementById('summary-cpu-cooler').textContent = components.cpuCooler || '-';
    document.getElementById('summary-gpu').textContent = components.gpu || '-';
    document.getElementById('summary-motherboard').textContent = components.motherboard || '-';
    document.getElementById('summary-ram').textContent = components.ram || '-';
    document.getElementById('summary-storage').textContent = components.storage || '-';
    document.getElementById('summary-power-supply').textContent = components.powerSupply || '-';
    document.getElementById('summary-case').textContent = components.case || '-';
}

// Funktion, um die Anzahl der Artikel im Warenkorb zu aktualisieren
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length; // Anzahl der Artikel im Warenkorb
    }
}

// Funktion, um die Konfiguration zum Warenkorb hinzuzufügen
function addToCart() {
    const cartItems = {
        cpu: document.getElementById("summary-cpu").innerText,
        cpuCooler: document.getElementById("summary-cpu-cooler").innerText,
        gpu: document.getElementById("summary-gpu").innerText,
        motherboard: document.getElementById("summary-motherboard").innerText,
        ram: document.getElementById("summary-ram").innerText,
        storage: document.getElementById("summary-storage").innerText,
        powerSupply: document.getElementById("summary-power-supply").innerText,
        case: document.getElementById("summary-case").innerText,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItems);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Die Konfiguration wurde erfolgreich zum Warenkorb hinzugefügt!");
    window.location.href = "cart.html"; // Weiterleitung zum Warenkorb
}

// Lade die Zusammenfassung und aktualisiere die Warenkorb-Anzeige, wenn die Seite geladen wird
window.onload = function () {
    loadSummary();
    updateCartCount(); // Warenkorb-Anzeige aktualisieren
};