const cipher = [
    'AAAAA', 'AAAAB', 'AAABA', 'AAABB', 'AABAA', 'AABAB', 'AABBA', 'AABBB', 'ABAAA', 'ABAAB', 'ABABA', 'ABABB', 'ABBAA', 'ABBAB', 'ABBBA', 'ABBBB',
    'BAAAA', 'BAAAB', 'BAABA', 'BAABB', 'BABAA', 'BABAB', 'BABBA', 'BABBB', 'BBAAA', 'BBAAB', 'BBAAC', 'BBAAD', 'BBAAE', 'BBAAF', 'BBAAG', 'BBAAH',
    'BBAAI', 'BBAAJ', 'BBAAK', 'BBAAL', 'BBAAM', 'BBAAN', 'BBAAO', 'BBAAP', 'BBAAQ', 'BBAAR', 'BBAAS', 'BBAAT', 'BBAAU', 'BBAAV', 'BBAAW', 'BBAAX'
];

const orig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const mongolianChars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'];

const mongolianCipher = [
    'AAAAA', 'AAAAB', 'AAABA', 'AAABB', 'AABAA', 'AABAB', 'AABBA', 'AABBB', 'ABAAA', 'ABAAB', 'ABABA', 'ABABB', 'ABBAA', 'ABBAB', 'ABBBA', 'ABBBB',
    'BAAAA', 'BAAAB', 'BAABA', 'BAABB', 'BABAA', 'BABAB', 'BABBA', 'BABBB', 'BBAAA', 'BBAAB', 'BBAAC', 'BBAAD', 'BBAAE', 'BBAAF', 'BBAAG', 'BBAAH',
    'BBAAI', 'BBAAJ', 'BBAAK', 'BBAAL', 'BBAAM', 'BBAAN', 'BBAAO', 'BBAAP', 'BBAAQ', 'BBAAR', 'BBAAS', 'BBAAT', 'BBAAU', 'BBAAV', 'BBAAW', 'BBAAX'
];

function titleCase(str = '') {
    const exceptions = ['and', 'or', 'the', 'a', 'an', 'of'];
    return str.toLowerCase().split(' ').map(word => {
        return exceptions.includes(word) ? word : word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    }).join(' ');
}

var encodeMessage = function (message) {
    const final = [];
    const split = message.split('');
    for (let i = 0; i < split.length; i++) {
        const char = split[i].toUpperCase();
        if (mongolianChars.includes(char)) {
            const index = mongolianChars.indexOf(char);
            final.push(mongolianCipher[index]);
        } else {
            final.push(char);
        }
    }
    return final.join('');
}

var decodeMessage = function (message, isTitleCase = true) {
    const final = [];
    const split = message.split('');
    let charGroup = [];
    for (let i = 0; i < split.length; i++) {
        const char = split[i].toUpperCase();
        if (/[AB]/.test(char)) {
            if (charGroup.length === 4) {
                charGroup.push(char);
                const index = mongolianCipher.indexOf(charGroup.join(''));
                final.push(mongolianChars[index]);
                charGroup = [];
            } else {
                charGroup.push(char);
            }
        } else {
            final.push(char);
        }
    }
    return isTitleCase ? titleCase(final.join('')) : final.join('');
}

// gets the message and key entered by user and ciphers it
function cipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;
    if (message == "") {
        alert("Шифр хийхийн тулд монгол текст оруулна уу");
        return;
    }

    var result = encodeMessage(message);
    document.getElementById("result").value = result;
}

// gets the message and key entered by user and deciphers it
function decipherButtonFunction() {
    var message = document.getElementById("inputMessage").value;
    if (message == "") {
        alert("Шифрийг тайлахын тулд текст оруулна уу");
        return;
    }

    var result = decodeMessage(message, false);
    document.getElementById("result").value = result;
}
