function includeComponent(file, elementId) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
      })
      .catch(error => {
        console.error(`Error loading ${file}: ${error}`);
      });
  }
  document.addEventListener("DOMContentLoaded", function() {
    includeComponent("components/navbar.html", "navbar-container");
    includeComponent("components/footer.html", "footer-container");
  });