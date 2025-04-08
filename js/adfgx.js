function encrypt(plaintext, keysquare, keyword)
{ 
    if(keysquare.length != 25){ alert("25 тэмдэгт урттай байх ёстой, зөвхөн a-z үсгүүдийг (j үсэггүй) агуулсан"); return; }
    if(keyword.length <= 1){ alert("Түлхүүр үг нь хамгийн багадаа 2 тэмдэгттэй байх ёстой"); return; }
    // first use polybius square to encipher plaintext
    adfgvx = "ADFGX";    ciphertext1 = "";
    for(i=0; i<plaintext.length; i++){
        index = keysquare.indexOf(plaintext.charAt(i));
        ciphertext1 += adfgvx.charAt(index/5) + adfgvx.charAt(index%5);
    }
    var colLength = ciphertext1.length / keyword.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    ciphertext = ""; k=0;
    for(i=0; i < keyword.length; i++){
        while(k<26){
            t = keyword.indexOf(chars.charAt(k));
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }
        for(j=0; j < colLength; j++) ciphertext += ciphertext1.charAt(j*keyword.length + t);
    }
    return ciphertext;
}

function decrypt(ciphertext, keysquare, keyword)
{
    klen = keyword.length;
    var re = /[^adfgx]/;

    // do some error checking
    if(ciphertext.length < 1){ alert("Зөвхөн шифрлэлтийн утгыг оруулна уу (зөвхөн үсэг))"); return; }    
    if(re.test(ciphertext)){alert("Шифрлэлт нь зөвхөн A, D, F, G эсвэл X үсэг агуулж байх ёстой."); return;};
    if(ciphertext.length % 2 != 0){ alert("Шифрлэлтийн үсэгний тоо тэгш байх ёстой"); return; }  
    if(keysquare.length != 25){ alert("25 тэмдэгт урттай байх ёстой"); return; }
    if(klen <= 1){ alert("Түлхүүр үг нь хамгийн багадаа 2 тэмдэгттэй байх ёстой"); return; }
    var numLongCols = ciphertext.length % klen;
    var cols = new Array(klen);
    var colLength = Math.floor(ciphertext.length / klen);
    // now we rearrange the columns so that they are in their unscrambled state
    chars="abcdefghijklmnopqrstuvwxyz";i=0;upto=0;
    for(j=0;j<klen;){
        t=keyword.indexOf(chars.charAt(i));        
        if(t >= 0){
            if(t<numLongCols) cl = colLength+1;
            else cl = colLength;
            cols[t] = ciphertext.substr(upto,cl);
            upto = upto+cl;
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
            j++;
        }else i++;         
    }    
    // now read off the columns row-wise
    plaintext1 = "";
    for(j=0; j < colLength+1; j++){
    for(i=0; i < klen; i++){
         plaintext1 += cols[i].charAt(j);
    }}
    // now undo the polybius square
    adfgvx = "adfgx"; plaintext = "";
    for(i=0; i<plaintext1.length; i+=2){
        keyindex = adfgvx.indexOf(plaintext1.charAt(i))*5 + adfgvx.indexOf(plaintext1.charAt(i+1));
        plaintext += keysquare.charAt(keyindex);
    }
    return plaintext;
}

function cipherButtonFunction(){
    var enteredKeysquare = document.getElementById('enteredKeysquare').value.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, ""); 
    var enteredKeyword = document.getElementById('enteredKeyword').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, "");  
  
    if(enteredKeysquare == "" || message == "" || enteredKeyword ==""){
      alert("Шифрийг тайлахын тулд түлхүүр болон мессежийг оруулна уу!!!");
      return;
    }
  
    var result = encrypt(message, enteredKeysquare, enteredKeyword);
    document.getElementById("result").value = result;
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var enteredKeysquare = document.getElementById('enteredKeysquare').value.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, ""); 
    var enteredKeyword = document.getElementById('enteredKeyword').value.toLowerCase().replace(/[^a-z]/g, ""); 
    var message = document.getElementById("inputMessage").value.toLowerCase().replace(/[^abcdefghiklmnopqrstuvwxyz]/g, "");  
  
    if(enteredKeysquare == "" || message == "" || enteredKeyword ==""){
      alert("Шифрийг тайлахын тулд түлхүүр болон мессежийг оруулна уу!!!");
      return;
    }
  
    var result = decrypt(message, enteredKeysquare, enteredKeyword);
    document.getElementById("result").value = result;
  }