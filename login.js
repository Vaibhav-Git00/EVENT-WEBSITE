document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const overlayBtn = document.getElementById('overlayBtn');
    const signInButton = document.getElementById('signInButton');
    const container = document.getElementById('container');
    
    overlayBtn.addEventListener('click', function() {
      container.classList.toggle('right-panel-active');
    });
  
    signInButton.addEventListener('click', function() {
      container.classList.remove('right-panel-active');
    });
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const password = this.querySelector('input[name="password"]').value;
  
      // Store form data in local storage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Clear form fields
      this.reset();
    });
  
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = this.querySelector('input[name="email"]').value;
        const password = this.querySelector('input[name="password"]').value;
    
        // You can handle sign-in logic here, such as authentication
    
        // Clear form fields
        this.reset();
      });
    
      // Restore form data from local storage if available
      window.addEventListener('load', function() {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
    
        if (name && email) {
          const signUpForm = document.getElementById('signUpForm');
          signUpForm.querySelector('input[name="name"]').value = name;
          signUpForm.querySelector('input[name="email"]').value = email;
        }
      });
    });
    
  