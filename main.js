function openModule(name) {
  fetch(`modules/${name}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById("module-container").innerHTML = html;
    });
}