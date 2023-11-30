document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("characterList");
  
    const save = async () => {
      var avatar = document.getElementById("avatar").src;
      var upper = document.getElementById("blusa").src;
      var lower = document.getElementById("pants").src;
      var shoes = document.getElementById("shoes").src;
  
      var baseUrl = window.location.origin;
      avatar = avatar.replace(baseUrl, "");
      upper = upper.replace(baseUrl, "");
      lower = lower.replace(baseUrl, "");
      shoes = shoes.replace(baseUrl, "");
  
      const characterData = {
        avatar,
        upper,
        lower,
        shoes,
      };
  
      let token = localStorage.getItem("key");
  
      if (isAuthenticated != null) {
        
        const headers = {
          "Content-type": "application/json; charset=utf-8",
          Authorization: `Bearer ${isAuthenticated}`,
        };
  
        const options = {
          method: "POST",
          headers,
          data: characterData,
        };
  
        const createResponse = await axios.post("http://localhost:3000/dashboard/", characterData, { headers });
        const json = createResponse.data;
  
        location.reload();
      } else {
          alert("No se ha iniciado sesión");
          window.location.href = "login.html"
      }
    };
  
    document.getElementById("saveButton").addEventListener("click", save);
  });
  