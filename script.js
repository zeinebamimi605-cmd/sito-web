
document.addEventListener("DOMContentLoaded", () => {

    // LIGHTBOX
    const lightboxLinks = document.querySelectorAll('.lightbox');

    lightboxLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');

            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = 10000;
            overlay.style.cursor = 'pointer';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';

            overlay.appendChild(img);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });

    // FORM GOOGLE SCRIPT
    const scriptURL = 'Your Google App Script URL';
    const form = document.forms['contact-form'];

    if(form){
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you! Form is submitted"))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
        });
    }

    // POPUP CONTATTI
    const openBtn = document.getElementById("openFormBtn");
    const contactBox = document.getElementById("contactBox");

    if(openBtn && contactBox){
        openBtn.addEventListener("click", () => {
            contactBox.style.display = "flex";
        });

        window.chiudiForm = function() {
            contactBox.style.display = "none";
        };
    }

});


// CARRELLO //

// Aggiorna contatore icona carrello //
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;
    cart.forEach(item => count += item.quantity);
    const cartCount = document.getElementById("cartCount");
    if(cartCount) cartCount.textContent = count;
}

// Aggiungi prodotto al carrello //
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Controlla se prodotto già presente //
    let existing = cart.find(item => item.name === name);
    if(existing){
        existing.quantity += 1;
    } else {
        cart.push({name, price, img, quantity:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " aggiunto al carrello!");
}


// POPUP CONTATTI //

document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openFormBtn");
    const contactBox = document.getElementById("contactBox");

    if(openBtn && contactBox){
        // Apri popup //
        openBtn.addEventListener("click", () => {
            contactBox.style.display = "flex";
        });

        // Funzione globale per chiudere //
        window.chiudiForm = function() {
            contactBox.style.display = "none";
        };
    }

    // Inizializza contatore carrello //
    updateCartCount();

    // Lightbox già incluso via GLightbox //
});












