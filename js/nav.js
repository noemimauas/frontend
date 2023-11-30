var html = '<nav class="navbar navbar-expand-lg bg-body-tertiary">\
              <div class="container-fluid">\
                <a class="navbar-brand">TP Fullstack</a>\
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                  <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
                    <li class="nav-item">\
                      <a class="nav-link active" aria-current="page" href="index.html">Home</a>\
                    </li>\
                    <li class="nav-item">\
                      <a class="nav-link active" id="dashboard" href="dashboard.html">Dashboard</a>\
                    </li>\
                    <li class="nav-item">\
                      <a class="nav-link active" id="create" href="create.html">Create</a>\
                    </li>\
                    <li class="nav-item">\
                      <a class="nav-link active" id="login" href="login.html">Login</a> \
                    </li>\
                    <li class="nav-item">\
                      <a class="nav-link active" id="register" href="register.html">register</a>\
                  </ul>\
                  <span class="navbar-text">\
                    <button class="btn btn-outline-success" type="submit" class="nav-link active" onClick="window.location.assign(window.location.href);" id="myButton">Logout</button>\
                  </span>\
                </div>\
              </div>\
            </nav>';
document.getElementById('nav-placeholder').innerHTML = html;

// Obtener token del usuario
const isAuthenticated = localStorage.getItem("key");
// Obtener los elementos de la interfaz a ocultar
const login = document.getElementById('login');
const register = document.getElementById('register');
const dashboard = document.getElementById('dashboard');
const create = document.getElementById('create');
const logout = document.getElementById('myButton');
if (isAuthenticated != null) {
  // Si el usuario está autenticado
  login.style.display = 'none';
  register.style.display = 'none';
} else {
  // Si el usuario no está autenticado
  login.style.display = 'block';
  register.style.display = 'block';
  dashboard.style.display = 'none';
  create.style.display = 'none';
  logout.style.display = 'none';
}
// Borrar el token del local storage
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  localStorage.removeItem("key");
});