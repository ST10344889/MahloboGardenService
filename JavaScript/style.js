function addDateStamp() {
    var currentDate = new Date();
    var footer = document.querySelector('footer');
    var dateStamp = document.createElement('div');
    dateStamp.classList.add('date-stamp');
    dateStamp.textContent = '' + currentDate.toLocaleDateString();
    footer.appendChild(dateStamp);
  }
  window.addEventListener('load', addDateStamp);
  

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessageContainer = document.getElementById("error-message");

    if (name === "" || email === "" || message === "") {
        errorMessageContainer.textContent = "Please fill in all the required fields.";

        return false;
    }
    errorMessageContainer.textContent = "";

    return true;
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function myFunction(message) {
    alert(message);
}

// lightbox.js

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.content img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);

            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;

            lightbox.appendChild(img);

            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});





  