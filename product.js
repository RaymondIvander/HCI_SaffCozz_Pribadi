function openPopup(title, type, size, imgSrc, description, topnote, middlenote, basenote) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-type').textContent = 'Type: ' + type;
    document.getElementById('popup-size').textContent = 'Size: ' + size;
    document.getElementById('popup-img').src = imgSrc;
    document.getElementById('popup-description').textContent = description; 
    document.getElementById('popup-top-notes').textContent = topnote; 
    document.getElementById('popup-middle-notes').textContent = middlenote;
    document.getElementById('popup-base-notes').textContent = basenote;

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
