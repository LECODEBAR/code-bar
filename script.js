document.getElementById("enterBtn").addEventListener("click", () => {
  const ageConfirmed = confirm("Avez-vous plus de 18 ans ?");
  if (!ageConfirmed) {
    document.getElementById("popupInterdit").classList.remove("hidden");
  } else {
    const underMaintenance = false; // Mets à true pour simuler la maintenance
    if (underMaintenance) {
      document.getElementById("popupMaintenance").classList.remove("hidden");
    } else {
      alert("Bienvenue au Code Bar !");
      // Tu peux ajouter une redirection ici si tu veux
    }
  }
});
