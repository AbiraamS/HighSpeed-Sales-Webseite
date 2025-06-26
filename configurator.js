function saveConfiguration() {
    const configuration = {};
    let totalPrice = 0;

    // CPU
    const cpuSelect = document.getElementById('cpu');
    const cpuOption = cpuSelect.options[cpuSelect.selectedIndex];
    configuration.cpu = cpuOption.text;
    totalPrice += parseInt(cpuOption.getAttribute('data-price'));

    // CPU-Kühler
    const cpuCoolerSelect = document.getElementById('cpu-cooler');
    const cpuCoolerOption = cpuCoolerSelect.options[cpuCoolerSelect.selectedIndex];
    configuration.cpuCooler = cpuCoolerOption.text;
    totalPrice += parseInt(cpuCoolerOption.getAttribute('data-price'));

    // GPU
    const gpuSelect = document.getElementById('gpu');
    const gpuOption = gpuSelect.options[gpuSelect.selectedIndex];
    configuration.gpu = gpuOption.text;
    totalPrice += parseInt(gpuOption.getAttribute('data-price'));

    // Motherboard
    const motherboardSelect = document.getElementById('motherboard');
    const motherboardOption = motherboardSelect.options[motherboardSelect.selectedIndex];
    configuration.motherboard = motherboardOption.text;
    totalPrice += parseInt(motherboardOption.getAttribute('data-price'));

    // RAM
    const ramSelect = document.getElementById('ram');
    const ramOption = ramSelect.options[ramSelect.selectedIndex];
    configuration.ram = ramOption.text;
    totalPrice += parseInt(ramOption.getAttribute('data-price'));

    // Speicher
    const storageSelect = document.getElementById('storage');
    const storageOption = storageSelect.options[storageSelect.selectedIndex];
    configuration.storage = storageOption.text;
    totalPrice += parseInt(storageOption.getAttribute('data-price'));

    // Energieversorgung
    const powerSupplySelect = document.getElementById('power-supply');
    const powerSupplyOption = powerSupplySelect.options[powerSupplySelect.selectedIndex];
    configuration.powerSupply = powerSupplyOption.text;
    totalPrice += parseInt(powerSupplyOption.getAttribute('data-price'));

    // Gehäuse
    const caseSelect = document.getElementById('case');
    const caseOption = caseSelect.options[caseSelect.selectedIndex];
    configuration.case = caseOption.text;
    totalPrice += parseInt(caseOption.getAttribute('data-price'));

    // Betriebssystem
    const osSelect = document.getElementById('operating-system');
    const osOption = osSelect.options[osSelect.selectedIndex];
    configuration.os = osOption.text;
    totalPrice += parseInt(osOption.getAttribute('data-price'));

    // Speichere die Konfiguration im localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    configuration.price = totalPrice; // Gesamtkosten hinzufügen
    cart.push(configuration);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Popup mit der Konfiguration anzeigen
    let summary = `
        <h3>Ihre Konfiguration:</h3>
        <ul>
            <li><strong>CPU:</strong> ${configuration.cpu}</li>
            <li><strong>CPU-Kühler:</strong> ${configuration.cpuCooler}</li>
            <li><strong>GPU:</strong> ${configuration.gpu}</li>
            <li><strong>Motherboard:</strong> ${configuration.motherboard}</li>
            <li><strong>RAM:</strong> ${configuration.ram}</li>
            <li><strong>Speicher:</strong> ${configuration.storage}</li>
            <li><strong>Energieversorgung:</strong> ${configuration.powerSupply}</li>
            <li><strong>Gehäuse:</strong> ${configuration.case}</li>
            <li><strong>Betriebssystem:</strong> ${configuration.os}</li>
        </ul>
        <p><strong>Gesamtkosten:</strong> ${totalPrice}€</p>
    `;
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popup.innerHTML = summary;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Schließen';
    closeButton.style.marginTop = '10px';
    closeButton.onclick = () => document.body.removeChild(popup);
    popup.appendChild(closeButton);

    const cartButton = document.createElement('button');
    cartButton.textContent = 'Zum Warenkorb';
    cartButton.style.marginTop = '10px';
    cartButton.style.marginLeft = '10px';
    cartButton.onclick = () => window.location.href = 'cart.html';
    popup.appendChild(cartButton);

    document.body.appendChild(popup);

    updateCartCount(); // Aktualisiere den Warenkorb-Zähler
}

  // Funktion, um den Gesamtpreis zu berechnen und anzuzeigen
function updateTotalPrice() {
    let totalPrice = 0;

    // Alle Dropdowns durchlaufen und die Preise summieren
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        const price = parseInt(selectedOption.getAttribute('data-price')) || 0;
        totalPrice += price;
    });

    // Gesamtpreis im HTML aktualisieren
    document.getElementById('total-price').textContent = `${totalPrice}€`;
}

// Event-Listener für Änderungen an den Dropdowns hinzufügen
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', updateTotalPrice);
});

// Initiale Berechnung des Gesamtpreises beim Laden der Seite
window.onload = function () {
    updateTotalPrice(); // Gesamtpreis berechnen
    updateCartCount();  // Warenkorb-Anzeige aktualisieren
};

// Funktion, um die Anzahl der Artikel im Warenkorb zu aktualisieren
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length; // Anzahl der Artikel im Warenkorb
    }
}
// Aktualisiere die Warenkorb-Anzeige, wenn die Seite geladen wird
window.onload = function () {
    updateCartCount(); // Warenkorb-Anzeige aktualisieren
};