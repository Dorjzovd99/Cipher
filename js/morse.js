const map = [
    { key: '0', letter: '0', morse: '-----' },
    { key: '1', letter: '1', morse: '.----' },
    { key: '2', letter: '2', morse: '..---' },
    { key: '3', letter: '3', morse: '...--' },
    { key: '4', letter: '4', morse: '....-' },
    { key: '5', letter: '5', morse: '.....' },
    { key: '6', letter: '6', morse: '-....' },
    { key: '7', letter: '7', morse: '--...' },
    { key: '8', letter: '8', morse: '---..' },
    { key: '9', letter: '9', morse: '----.' },
    { key: 'а', letter: 'а', morse: '.-' },
    { key: 'б', letter: 'б', morse: '-...' },
    { key: 'в', letter: 'в', morse: '.--' },
    { key: 'г', letter: 'г', morse: '--.' },
    { key: 'д', letter: 'д', morse: '-..' },
    { key: 'е', letter: 'е', morse: '.' },
    { key: 'ё', letter: 'ё', morse: '.---' },
    { key: 'ж', letter: 'ж', morse: '...-' },
    { key: 'з', letter: 'з', morse: '--..' },
    { key: 'и', letter: 'и', morse: '..' },
    { key: 'й', letter: 'й', morse: '.---' },
    { key: 'к', letter: 'к', morse: '-.-' },
    { key: 'л', letter: 'л', morse: '.-..' },
    { key: 'м', letter: 'м', morse: '--' },
    { key: 'н', letter: 'н', morse: '-.' },
    { key: 'о', letter: 'о', morse: '---' },
    { key: 'п', letter: 'п', morse: '.--.' },
    { key: 'р', letter: 'р', morse: '.-.' },
    { key: 'с', letter: 'с', morse: '...' },
    { key: 'т', letter: 'т', morse: '-' },
    { key: 'у', letter: 'у', morse: '..-' },
    { key: 'ү', letter: 'ү', morse: '..--' },
    { key: 'ф', letter: 'ф', morse: '..-.' },
    { key: 'х', letter: 'х', morse: '....' },
    { key: 'ц', letter: 'ц', morse: '-.-.' },
    { key: 'ч', letter: 'ч', morse: '---.' },
    { key: 'ш', letter: 'ш', morse: '----' },
    { key: 'щ', letter: 'щ', morse: '--.-' },
    { key: 'ъ', letter: 'ъ', morse: '.--.-.' },
    { key: 'ы', letter: 'ы', morse: '-.--' },
    { key: 'ь', letter: 'ь', morse: '-..-' },
    { key: 'э', letter: 'э', morse: '..-..' },
    { key: 'ю', letter: 'ю', morse: '..--' },
    { key: 'я', letter: 'я', morse: '.-.-' },
    { key: ' ', letter: ' ', morse: '/' }
];

var encodeMessage = function (string) {
    let morseCode = '';
    const newString = string.toLowerCase();

    for (let i = 0; i < newString.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (newString.charAt(i) === map[j].letter) {
                morseCode += (map[j].morse + ' ');
                break;
            }
        }
    }

    return morseCode.trim();
}

var decodeMessage = function (morseCode) {
    let string = '';
    let morseSplit = morseCode.trim().split(' ');

    for (let i = 0; i < morseSplit.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (morseSplit[i] === map[j].morse) {
                string += map[j].letter;
                break;
            }
        }
    }

    return string;
}

// gets the message and key entered by user and ciphers it
function cipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;
    if (message == "") {
        alert("Мессежийг шифрлэхийн тулд текстийг оруулна уу!");
        return;
    }

    var result = encodeMessage(message);
    document.getElementById("result").value = result;
}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;

    if (message == "") {
        alert("Мессежийг декодлохын тулд текстийг оруулна уу!");
        return;
    }

    var result = decodeMessage(message);
    document.getElementById("result").value = result;
}
