
// script.js

// Attendre que la page soit complètement chargée
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading");
    const content = document.getElementById("content");

    // Masquer l'écran de chargement après 1 seconde
    setTimeout(() => {
        loadingScreen.style.display = "none";
        content.style.display = "block";
    }, 1000);
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}
const ratio = 0.2
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            console.log('Element visible')
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }else{
            console.log('Element invisible')
        }
    });
    
}  
  
const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})