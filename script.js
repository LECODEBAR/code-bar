function openPopup(type) {
  document.querySelector('.overlay').style.display = 'block';
  document.getElementById('popup-' + type).style.display = 'flex';
}

function closePopup() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
}
