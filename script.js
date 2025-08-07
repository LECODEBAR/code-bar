function showPopup(type) {
  const popup = document.getElementById(`popup-${type}`);
  if (popup) {
    popup.style.display = 'flex';
  }
}

function closePopup(type) {
  const popup = document.getElementById(`popup-${type}`);
  if (popup) {
    popup.style.display = 'none';
  }
}
