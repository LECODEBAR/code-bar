document.getElementById("enterBtn").addEventListener("click", () => {
  showPopup("maintenance");
});

function showPopup(type) {
  document.getElementById(`popup${capitalize(type)}`).classList.remove("hidden");
}

function closePopup(type) {
  document.getElementById(`popup${capitalize(type)}`).classList.add("hidden");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
