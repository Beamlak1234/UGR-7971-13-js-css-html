// Toggle the navigation menu//
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "flex" || navbar.style.display === "") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  }
  
  // Add event listener to the hamburger icon
  var hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", toggleMenu);
  document.addEventListener('DOMContentLoaded', function () {
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const submitButton = document.querySelector('#contactForm button');
    const contactForm = document.getElementById('contactForm');
  
    messageTextarea.addEventListener('input', function () {
      const currentCharCount = this.value.length;
      const maxCharLimit = 200; // Set your desired character limit
  
      charCount.textContent = `Character count: ${currentCharCount}`;
  
      if (currentCharCount <= maxCharLimit) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
  
    contactForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Add your form submission logic here
      // For now, let's show an alert
      alert('Form submitted successfully!');
    });
  });
  
  