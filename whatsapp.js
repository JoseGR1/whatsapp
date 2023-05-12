
  document.addEventListener("DOMContentLoaded", function() {
    var sendButton = document.getElementById("send-button");
    var messageInput = document.getElementById("message-input");
    var phoneNumber = "50230847600"; // Reemplaza con el número de teléfono deseado
  
    sendButton.addEventListener("click", function() {
      var message = messageInput.value.trim();
  
      if (message !== "") {
        var encodedMessage = encodeURIComponent(message);
        var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;
  
        // Redirigir al usuario a la aplicación de WhatsApp con el número de teléfono y mensaje predefinidos
        window.location.href = whatsappURL;
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function(event) {
    var logo = document.getElementById("company-logo");
    logo.classList.add("logo");
  });
  