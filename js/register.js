document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const registerEmail = document.getElementById("registerEmail").value;
        const registerPassword = document.getElementById("registerPassword").value;

        // Enviar la solicitud de registro al servidor
        try {
            const response = await axios.post("http://localhost:3000/register", {
                name,
                email: registerEmail,
                password: registerPassword,
                isActive: true, // Puedes establecer el valor que desees
            });

            // Manejar la respuesta del servidor
            if (response.status === 201) {
                // Registro exitoso
                alert("Registro exitoso. Por favor, inicia sesión.");
                // Puedes redirigir a la página de inicio de sesión o mostrar un mensaje de éxito
            }
        } catch (error) {
            // Manejar errores de registro (puedes mostrar un mensaje de error)
            console.error("Error de registro:", error);
        }
    });
});
