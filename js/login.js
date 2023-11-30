document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Enviar la solicitud de inicio de sesión al servidor
        try {
            const response = await axios.post("http://localhost:3000/auth/login/", { email, password });
            // Manejar la respuesta del servidor
            if (response.status === 200) {
                // Inicio de sesión exitoso
                const { token, userid } = response.data;
                console.log(response);
                // Almacena el token en el almacenamiento local (localStorage)
                localStorage.setItem("key", token);
                localStorage.setItem("userid", userid);
                console.log(response.data);
                // Redirige a la página del panel de control o a donde desees
                window.location.href = "dashboard.html";
            }
        } catch (error) {
            // Manejar errores de inicio de sesión (puedes mostrar un mensaje de error)
            console.error("Error de inicio de sesión:", error);
        }
    });
});
