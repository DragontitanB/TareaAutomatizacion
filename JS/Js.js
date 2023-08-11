document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (username === "") {
      alert("Por favor, introduce un nombre de usuario válido.");
      return;
    }

    // Guardar el nombre de usuario en el almacenamiento local
    localStorage.setItem("username", username);

    // Redirigir a la página de inicio
    window.location.href = "inicio.html";
  });
});
