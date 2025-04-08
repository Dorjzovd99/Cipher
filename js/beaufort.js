function encrypt(message, key){    
  let alphabet = "аабвгдеёжзийклмнопрстуүфхцчшщыэюя";  // Монгол үсгүүд
  let ciphertext = "";
  for (let i = 0; i < message.length; i++) { 
      let mCharIndex = alphabet.indexOf(message[i]);  // Мессежийн үсгийн индексыг олох
      let kCharIndex = alphabet.indexOf(key[i % key.length]);  // Түлхүүрийн үсгийн индексыг олох
      
      if (mCharIndex !== -1) {
          let newIndex = (mCharIndex + kCharIndex) % alphabet.length;  // Шифрлэсэн үсгийн индекс
          ciphertext += alphabet[newIndex];
      } else {
          ciphertext += message[i];  // Монгол үсэг биш бол өөрчилөлгүй үлдээнэ
      }
  } 
  return ciphertext; 
}

function decrypt(message, key){    
  let alphabet = "аабвгдеёжзийклмнопрстуүфхцчшщыэюя";  // Монгол үсгүүд
  let plaintext = "";
  for (let i = 0; i < message.length; i++) { 
      let mCharIndex = alphabet.indexOf(message[i]);  // Мессежийн үсгийн индексыг олох
      let kCharIndex = alphabet.indexOf(key[i % key.length]);  // Түлхүүрийн үсгийн индексыг олох
      
      if (mCharIndex !== -1) {
          let newIndex = (mCharIndex - kCharIndex + alphabet.length) % alphabet.length;  // Тайлсан үсгийн индекс
          plaintext += alphabet[newIndex];
      } else {
          plaintext += message[i];  // Монгол үсэг биш бол өөрчилөлгүй үлдээнэ
      }
  } 
  return plaintext; 
}

function cipherButtonFunction(){
  var message = document.getElementById('inputMessage').value.replace(/[^а-яА-Я]/g, "").toLowerCase();  // Монгол үсгүүдийг л авах
  var enteredKey = document.getElementById('enteredKey').value.replace(/[^а-яА-Я]/g, "").toLowerCase();  // Монгол үсгүүдийг л авах
  
  if(enteredKey == "" || message == "") {
      alert("Шифрийг тайлахын тулд түлхүүр болон мессежийг оруулна уу!!!");
      return;
  }

  var result = encrypt(message, enteredKey);
  document.getElementById("result").value = result;
}

function decipherButtonFunction(){
  var message = document.getElementById('inputMessage').value.replace(/[^а-яА-Я]/g, "").toLowerCase();  // Монгол үсгүүдийг л авах
  var enteredKey = document.getElementById('enteredKey').value.replace(/[^а-яА-Я]/g, "").toLowerCase();  // Монгол үсгүүдийг л авах

  if(enteredKey == "" || message == "") {
      alert("Шифрийг тайлахын тулд түлхүүр болон мессежийг оруулна уу!!!");
      return;
  }

  var result = decrypt(message, enteredKey);
  document.getElementById("result").value = result;
}
