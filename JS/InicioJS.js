document.addEventListener("DOMContentLoaded", function () {
  // Actualizar la fecha automáticamente
  function updateDate() {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateElement.textContent = currentDate.toLocaleDateString("es-ES", options);
  }

  // Obtener el nombre de usuario del almacenamiento local (si está disponible)
  const usernameDisplay = document.getElementById("usernameDisplay");
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    usernameDisplay.textContent = "Usuario: " + storedUsername;
  }

  updateDate();
});
