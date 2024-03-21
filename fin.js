// email.js

// Initialize EmailJS with your User ID
emailjs.init({
    publicKey: '8VSGEh4AnMjc3fe6',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

// Function to send email using EmailJS
function sendEmail(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = {
        name: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send('service_yeez0so', 'template_q376bel', formData).then(
        (response) => {
          console.log('SUCCESS!', response);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}

// Add event listener to the form submit button
document.getElementById("contact-form").addEventListener("submit", sendEmail);
