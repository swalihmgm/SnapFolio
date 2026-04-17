
document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  event.preventDefault(); // This stops the form from submitting the old way


 
  const phoneNumber = '918589878078'; 
  // ---------------------------------------------

  // Get the data from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Create the message text for WhatsApp
  const whatsappMessage = 
    `*Hi* 📄\n` +
    `*I am:* ${name}\n\n` +
    `*Email:* ${email}\n` +
    `*Subject:* ${subject}\n\n` +
    `*Message:*\n${message}`;

  // Create the final WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp in a new tab to send the message
  window.open(whatsappURL, '_blank').focus();
});
