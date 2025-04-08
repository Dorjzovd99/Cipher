function encrypt(plaintext, key, pc) {
    while(plaintext.length % key.length != 0) plaintext += pc.charAt(0);    
    var colLength = plaintext.length / key.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    var ciphertext = ""; 
    var k = 0;
    
    for (var i = 0; i < key.length; i++) {
        while (k < 26) {
            var t = key.indexOf(chars.charAt(k));
            var arrkw = key.split(""); 
            arrkw[t] = "_"; 
            key = arrkw.join("");
            if (t >= 0) break;
            else k++;
        }
        for (var j = 0; j < colLength; j++) {
            ciphertext += plaintext.charAt(j * key.length + t);
        }
    }
    return ciphertext;
}

function decrypt(ciphertext, key, pc) {
    var klen = key.length;
    if (klen <= 1) { 
        alert("Түлхүүр нь хамгийн багадаа 2 тэмдэгттэй байх ёстой"); 
        return; 
    }
    if (ciphertext.length % klen != 0) { 
        alert("Шифрлэлтийн утга дутуу байна, үр дүн буруу байж магадгүй (түлхүүр үг буруу байж магадгүй)."); 
    }

    // эхлээд түлхүүр үгийн уртаар нь текстийг багануудаар байрлуулна
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for (var i = 0; i < klen; i++) cols[i] = ciphertext.substr(i * colLength, colLength);

    // одоо бид багануудыг зөв байрлалд нь тохируулна
    var newcols = new Array(klen);
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    var j = 0; 
    var i = 0;

    while (j < klen) {
        var t = key.indexOf(chars.charAt(i));        
        if (t >= 0) {
            newcols[t] = cols[j++];
            var arrkw = key.split(""); 
            arrkw[t] = "_"; 
            key = arrkw.join("");
        } else i++;         
    }    

    // одоо багануудыг мөрөөр нь уншина
    var plaintext = "";
    for (var i = 0; i < colLength; i++) {
        for (var j = 0; j < klen; j++) {
            plaintext += newcols[j].charAt(i);
        }
    }            

    // padding тэмдэгтүүдийг арилгах
    var paddingChar = pc.charAt(0);  // padding тэмдэгтийг олж авна
    while (plaintext.charAt(plaintext.length - 1) === paddingChar) {
        plaintext = plaintext.slice(0, -1);  // padding тэмдэгтүүдийг устгана
    }

    return plaintext;    
}

function cipherButtonFunction() {
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    var pc = document.getElementById("enteredpc").value.toLowerCase().replace(/[^a-z]/g, "");
    
    if (message == "" || key == "" || pc == "") {
        alert("Шифрлэх / тайлах мессеж болон түлхүүр болон пад үсгийг оруулна уу!");
        return;
    }

    var result = encrypt(message, key, pc);
    document.getElementById('result').value = result;
}

function decipherButtonFunction() {
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    
    if (message == "" || key == "") {
        alert("Шифрлэх / тайлах мессеж болон түлхүүрийг оруулна уу!");
        return;
    }

    var pc = document.getElementById("enteredpc").value.toLowerCase().replace(/[^a-z]/g, ""); // get padding character
    var result = decrypt(message, key, pc);
    document.getElementById('result').value = result;
}
