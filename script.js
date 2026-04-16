let currentFileName = "";

function openModal(title, desc, imgSrc, rating, fileName) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = desc;
    // Ez a sor rakja be a megfelelő képet a modalba kattintáskor
    document.getElementById("modalImg").src = imgSrc; 
    document.getElementById("modalRating").innerText = "Értékelés: " + rating;
    document.getElementById("modalFileName").innerText = fileName;
    
    currentFileName = fileName; 
    
    document.getElementById("movieModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function openIMDb() {
    // Ha Mario, akkor a Mario IMDb-t nyitja meg, egyébként a GOAT-ot
    if (currentFileName.includes("Mario")) {
        window.open("https://www.imdb.com/title/tt6718170/", "_blank");
    } else {
        window.open("https://www.imdb.com/title/tt27613895/", "_blank");
    }
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function startMovie() {
    if (currentFileName === "Super Mario Galaxis A film HD MOZI - online filmek sorozatok kiv.mp4") {
        window.open("https://turristvanszakkozepisk-my.sharepoint.com/:v:/g/personal/horvathcsabapeter_turr_hu/IQAqhTtAip4LQLkSoGemID9jATMNqQqaqVejKteRU9VpeJw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=VOIGil", "_blank");
    } 
    else if (currentFileName.includes("GOAT")) {
        window.open("https://turristvanszakkozepisk-my.sharepoint.com/:v:/g/personal/horvathcsabapeter_turr_hu/IQDGemJjcBG6Qr0y5giTk2ILAdrSmCABt9zXumzplr46wYo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=yq3U9W", "_blank");
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("movieModal");
    if (event.target == modal) {
        closeModal();
    }
}