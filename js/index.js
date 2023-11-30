document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("characterList");

    // Realizar la solicitud GET a la API
    const loadCharacters = () => {
    axios.get("http://localhost:3000/10000/")
        .then(response => {
            const characters = response.data;
            characters.forEach(character => {

                const characterContainer = document.createElement("div");
                characterContainer.className = "character-container";

                // Crear un elemento de imagen por cada personaje
                const characterImage1 = document.createElement("img");
                characterImage1.src = character.avatar;
                characterImage1.alt = character.avatar;
                characterImage1.className = "clothing";

                const characterImage2 = document.createElement("img");
                characterImage2.src = character.upper;
                characterImage2.alt = character.upper;
                characterImage2.id = "blusa";
                characterImage2.className = "clothing";

                const characterImage3 = document.createElement("img");
                characterImage3.src = character.lower;
                characterImage3.alt = character.lower;
                characterImage3.id = "pants";
                characterImage3.className = "clothing";

                const characterImage4 = document.createElement("img");
                characterImage4.src = character.shoes;
                characterImage4.alt = character.shoes;
                characterImage4.id = "shoes";
                characterImage4.className = "clothing";

                
                // Agregar la imagen al contenedor de la lista de personajes
                characterContainer.appendChild(characterImage1);
                characterContainer.appendChild(characterImage2);
                characterContainer.appendChild(characterImage3);
                characterContainer.appendChild(characterImage4);
                characterList.appendChild(characterContainer);
            });
        })
        .catch(error => {
            console.error("Error al obtener los personajes:", error);
            // Intenta cargar los personajes nuevamente después de un breve intervalo
            setTimeout(loadCharacters, 2000); // Intenta nuevamente después de 2 segundos
        });
    };

    // Cargar los personajes al cargar la página
    loadCharacters();
});
