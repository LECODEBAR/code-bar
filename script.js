function showPopup(type) {
  document.getElementById(`popup-${type}`).style.display = 'block';
}

function closePopup(type) {
  document.getElementById(`popup-${type}`).style.display = 'none';
}

function openMaps() {
  const destination = encodeURIComponent("Code Bar, Saumur, France");
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
}
