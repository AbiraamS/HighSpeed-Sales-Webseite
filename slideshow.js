let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const totalSlides = slides.length;

  // Set all slides off-screen to the right
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = "translateX(100%)";
    slides[i].style.transition = "none"; // Deaktiviert die Animation vor der Positionierung
  }

  // Set the current slide to visible
  slides[slideIndex].style.transform = "translateX(0)";
  slides[slideIndex].style.transition = "transform 1s ease-in-out"; // Aktiviert die Animation

  // Set the next slide to come in from the right
  const nextSlideIndex = (slideIndex + 1) % totalSlides;
  slides[nextSlideIndex].style.transform = "translateX(100%)";
  slides[nextSlideIndex].style.transition = "none"; // Deaktiviert die Animation vor der Positionierung

  // Move the current slide out to the left and the next slide in
  setTimeout(() => {
    slides[slideIndex].style.transform = "translateX(-100%)"; // Schiebt das aktuelle Bild nach links
    slides[nextSlideIndex].style.transform = "translateX(0)"; // Bewegt das nächste Bild ins Sichtfeld
    slides[nextSlideIndex].style.transition = "transform 1s ease-in-out"; // Aktiviert die Animation
    slideIndex = nextSlideIndex; // Aktualisiert den Index
  }, 50); // Kurze Verzögerung, um die Animation zu synchronisieren

  setTimeout(showSlides, 8000); // Wechselt alle 5 Sekunden
}

showSlides(); // Startet die Slideshow