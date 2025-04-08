
var reverse = function (message) {
  
    // Make an output variable
    var output = "";
    for (let i = message.length - 1; i >= 0; i--){
        output += message[i]
      }
    return output;
}

function reversecipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if( message == ""){
        alert("Шифрлэх / тайлах мессеж болон түлхүүр болон пад үсгийг оруулна уу!");
        return;
      }
    var result = reverse(message);
    document.getElementById('result').value = result;
}

function reversedecipherButtonFunction(){
    var message = document.getElementById('inputMessage').value;
    if(message == ""){
        alert("Шифрлэх / тайлах мессеж болон түлхүүр болон пад үсгийг оруулна уу!");
        return;
      }
    var result = reverse(message);
    document.getElementById('result').value = result;
}
