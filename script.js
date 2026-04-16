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
    window.open("https://turristvanszakkozepisk-my.sharepoint.com/:v:/g/personal/horvathcsabapeter_turr_hu/IQDGemJjcBG6Qr0y5giTk2ILAdrSmCABt9zXumzplr46wYo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=yq3U9W", "_blank");
}


window.onclick = function(event) {
    let modal = document.getElementById("movieModal");
    if (event.target == modal) {
        closeModal();
    }
}