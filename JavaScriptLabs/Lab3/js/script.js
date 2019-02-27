const MORSE_LIB = {
    "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",

   ".-":"A",
   "-...":"B",
   "-.-.":"C",
   "-..":"D",
   ".":"E",
   "..-.":"F",
   "--.":"G",
   "....":"H",
   "..":"I",
   ".---":"J",
   "-.-":"K",
   ".-..":"L",
   "--":"M",
   "-.":"N",
   "---":"O",
   ".--.":"P",
   "--.-":"Q",
   ".-.":"R",
   "...":"S",
   "-":"T",
   "..-":"U",
   "...-":"V",
   ".--":"W",
   "-..-":"X",
   "-.--":"Y",
   "--..":"Z",
   "/":" ",

   "-.-.--":"!",
   ".-.-.-":".",
   "--..--":",",

   "...---...": "SOS"

   
}

function morseDecoder(morseCode) {
    morseCode = morseCode.trim();
    var words = morseCode.split("   ");
    var decoded_message = "";

    for (let word of words) {
        word = word.split(" ");
        for (let letter of word) {
            decoded_message += MORSE_LIB[letter];
        }
        decoded_message += " ";
    }
    return decoded_message.trim();
}


var message = '   .... . -.--   .--- ..- -.. .';
var sos = '...---...';

console.log(morseDecoder(message));