const cipher = [ 
  '11000000', '11000001', '11000010', '11000011', '11000100', 
  '11000101', '11000110', '11000111', '11001000', '11001001',
  '11001010', '11001011', '11001100', '11001101', '11001110', 
  '11001111', '11010000', '11010001', '11010010', '11010011',
  '11010100', '11010101', '11010110', '11010111', '11011000',
  '11011001', '11011010', '11011011', '11011100', '11011101',
  '11011110', '11011111', '11100000', '11100001', '11100010',
  '11100011', '11100100', '11100101', '11100110', '11100111',
  '11101000', '11101001', '11101010', '11101011', '11101100',
  '11101101', '11101110', '11101111', '11110000', '11110001'
];

const orig = [
  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л',
  'М', 'Н', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ц',
  'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е',
  'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'ө', 'п', 'р',
  'с', 'т', 'у', 'ү', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю',
  'я'
];

// Мессежийг шифрлэх функц
var encodeMessage = function (message) {
  const final = [];
  const split = message.split('');
  for (let i = 0; i < split.length; i++) {
    let char = split[i].toUpperCase(); // жижиг үсгийг том болгох
    if (orig.includes(char)) {
      const index = orig.indexOf(char);
      final.push(cipher[index]);
    } else {
      final.push(char); // бусад тэмдэгтүүдийг шууд гаргаж ирнэ
    }
  }
  return final.join('');
};

// Мессежийг тайлах функц
var decodeMessage = function (message) {
  const final = [];
  const split = message.split('');
  let charGroup = [];
  for (let i = 0; i < split.length; i++) {
    const char = split[i];
    if (/[01]/.test(char)) {
      if (charGroup.length === 7) {
        charGroup.push(char);
        const index = cipher.indexOf(charGroup.join(''));
        final.push(orig[index]);
        charGroup = [];
      } else {
        charGroup.push(char);
      }
    } else {
      final.push(char); // бусад тэмдэгтүүдийг шууд гаргаж ирнэ
    }
  }
  return final.join('');
};

// Шифрлэх товч дарсны дараах үйлдэл
function cipherButtonFunction() {
  var message = document.getElementById("inputMessage").value;
  if (message == "") {
    alert("Шифрлэх / тайлах мессежийг оруулна уу!");
    return;
  }

  var result = encodeMessage(message); // Бинар кодоор шифрлэх
  document.getElementById("result").value = result; // Гаралтанд харуулах
}

// Тайлах товч дарсны дараах үйлдэл
function decipherButtonFunction() {
  var message = document.getElementById("inputMessage").value;
  if (message == "") {
    alert("Шифрлэх / тайлах мессежийг оруулна уу!");
    return;
  }

  var result = decodeMessage(message); // Бинар кодыг тайлах
  document.getElementById("result").value = result; // Гаралтанд харуулах
}
