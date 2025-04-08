// Монгол үсгүүдийн ASCII кодууд
const cipher = [
  '097', '098', '099', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122',
  '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148',
  '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174',
  '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191'
];

// Монгол үсгүүдийн тэмдэгтүүд
const orig = [
  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
  'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'ө', 'п', 'р', 'с', 'т', 'у', 'ү', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'
];

// Текстийг шифрлэх функц
function encodeMessage(message) {
  const final = [];
  const split = message.split('');
  for (let i = 0; i < split.length; i++) {
    const char = split[i];
    if (orig.includes(char)) {
      const index = orig.indexOf(char);
      final.push(cipher[index]);
    } else {
      final.push(char);
    }
  }
  return final.join('');
}

// Текстийг тайлах функц
function decodeMessage(message) {
  const final = [];
  const split = message.split('');
  let charGroup = [];
  for (let i = 0; i < split.length; i++) {
    const char = split[i];
    if (/[0-9]/.test(char)) {
      charGroup.push(char);
      if (charGroup.length === 3) {
        const code = charGroup.join('');
        const index = cipher.indexOf(code);
        if (index !== -1) {
          final.push(orig[index]);
        } else {
          final.push(code); // Код олдсонгүй бол өөрөө үлдээнэ
        }
        charGroup = [];
      }
    } else {
      final.push(char);
    }
  }
  return final.join('');
}

// Шифрлэх товчийг дархад ажиллах функц
function cipherButtonFunction() {
  const message = document.getElementById("inputMessage").value;
  if (message === "") {
    alert("Шифрлэх текстийг оруулна уу!");
    return;
  }
  const result = encodeMessage(message);
  document.getElementById("result").value = result;
}

// Тайлах товчийг дархад ажиллах функц
function decipherButtonFunction() {
  const message = document.getElementById("inputMessage").value;
  if (message === "") {
    alert("Шифрлэгдсэн текстийг тайлахын тулд мессежээ оруулна уу!");
    return;
  }
  const result = decodeMessage(message);
  document.getElementById("result").value = result;
}
