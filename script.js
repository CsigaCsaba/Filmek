let currentFileName = "";

function openModal(title, desc, imgSrc, rating, fileName) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = desc;
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("modalRating").innerText = "Értékelés: " + rating;
    document.getElementById("modalFileName").innerText = fileName;
    
    currentFileName = fileName; // Eltároljuk a fájlnevet a lejátszáshoz
    
    document.getElementById("movieModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// A tényleges lejátszás függvénye
function startMovie() {
    window.open("GOAT - Will a bajnok 2026.1080p.WEBRip.HUN-MOVIE.mkv", "_blank");
}


window.onclick = function(event) {
    let modal = document.getElementById("movieModal");
    if (event.target == modal) {
        closeModal();
    }
}