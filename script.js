document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        errorMessage.textContent = "Todos los campos son obligatorios.";
    } else {
        alert("Formulario enviado correctamente.");
        document.getElementById("contact-form").reset();
    }
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

