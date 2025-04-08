function encrypt(plaintext) { 
  // Монгол тэмдэгтүүдийг UTF-8 хэлбэрт кодлох
  var encoded = new TextEncoder().encode(plaintext);
  return btoa(String.fromCharCode(...encoded)); // Base64-р шифрлэх
}

function decrypt(ciphertext) {
  // Base64-ээр тайлах
  var decoded = atob(ciphertext);
  var byteArray = new Uint8Array(decoded.length);
  for (var i = 0; i < decoded.length; i++) {
      byteArray[i] = decoded.charCodeAt(i);
  }
  // UTF-8 кодоор буцааж хөрвүүлэх
  return new TextDecoder().decode(byteArray);
}

function cipherButtonFunction() {
  var message = document.getElementById("inputMessage").value; 

  if (message == "") {
      alert("Шифрийг тайлахын тулд текст оруулна уу");
      return;
  }
  
  var result = encrypt(message);
  document.getElementById("result").value = result;
}

function decipherButtonFunction() {
  var message = document.getElementById("inputMessage").value;

  if (message == "") {
      alert("Шифрийг тайлахын тулд текст оруулна уу");
      return;
  }

  var result = decrypt(message);
  document.getElementById("result").value = result;
}
