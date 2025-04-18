const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
let out = ""
for (var i = 0; i < this; i++) {
		out += alphabet[Math.floor(Math.random() * alphabet.length)]
	}

var encodeMessage = function (message, enteredKey) {

    var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}

	for (let i of enteredKey) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}

	for (let i in nText) {
		output += alphabet[(nText[i] + kText[i]) % 26]
	}
    
	return output;
}

var decodeMessage = function (message, enteredKey) {
    var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i of enteredKey) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}
	let out = ""
	for (let i in nText) {
		output += alphabet[(nText[i] - kText[i]) < 0 ? 26 + (nText[i] - kText[i]) : (nText[i] - kText[i]) % 26]
	}
	return output;
}


// gets the message and key entered by user and ciphers it
function cipherButtonFunction(){
  var enteredKey = document.getElementById('enteredKey').value;
  var message = document.getElementById("inputMessage").value;
  if(enteredKey == "" || message == ""){
    alert("Шифрлэх / тайлах мессеж болон түлхүүр болон пад үсгийг оруулна уу!");
    return;
  }

  if (message.length != enteredKey.length) {
    alert("Текст болон түлхүүр нь ижил урттай байх ёстой.");
    return;
}
  var result = encodeMessage(message, enteredKey);
  document.getElementById("result").value = result;


}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction(){
  var enteredKey = document.getElementById('enteredKey').value;
  var message = document.getElementById("inputMessage").value;

  if(enteredKey == "" || message == ""){
    alert("Шифрийг тайлахын тулд түлхүүр болон мессежийг оруулна уу!");
    return;
  }

  if (message.length != enteredKey.length) {
    alert("Текст болон түлхүүр нь ижил урттай байх ёстой.");
    return;
}
  var result = decodeMessage(message, enteredKey);
  document.getElementById("result").value = result;
}