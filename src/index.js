const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = expr.split('')
    const symbolSize = 10;
    const symbolsArray = [];

    for (let i = 0; i < str.length; i += symbolSize) {
        symbolsArray.push(str.slice(i, i + symbolSize));
    }
    let wordArray = []
    for (let j = 0; j < symbolsArray.length; j++) {
        let symbol = symbolsArray[j]
        let index = 0
        while (symbol[index] === '0' || symbol[index] === '*') {
            symbol.splice(index, 1)
        }
        if (symbol.length === 0) {
            symbol.push(' ')
        } else if (symbol.length !== 0) {
            for (let i = 0; i < symbol.length; i++) {
                if (symbol[i] === '1' && symbol[i + 1] === '0') {
                    symbol[i] = '.'
                    symbol.splice(i + 1, 1)
                } else if (symbol[i] === '1' && symbol[i + 1] === '1') {
                    symbol[i] = '-'
                    symbol.splice(i + 1, 1)
                }

            }
        }
        let prop = symbol.join('')
        if (prop === ' ') {
            wordArray.push(prop)
        } else {
            wordArray.push(MORSE_TABLE[prop])
        }

    }

    return wordArray.join('')

}

module.exports = {
    decode
}