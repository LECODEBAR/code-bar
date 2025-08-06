document.getElementById("enterBtn").addEventListener("click", () => {
  const ageConfirmed = confirm("Avez-vous plus de 18 ans ?");
  if (!ageConfirmed) {
    document.getElementById("popupInterdit").classList.remove("hidden");
  } else {
    const underMaintenance = false; // Change to true to simulate maintenance
    if (underMaintenance) {
      document.getElementById("popupMaintenance").classList.remove("hidden");
    } else {
      alert("Bienvenue au Code Bar !");
      // Redirection possible ici
    }
  }
});
