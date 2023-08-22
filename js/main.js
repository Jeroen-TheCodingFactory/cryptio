const keyInput = document.querySelector("#js--key");
const encryptInput = document.querySelector("#js--encrypt");
const decryptInput = document.querySelector("#js--decrypt");

function init() {
    encryptInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            this.value = encryptOrDecrypt(this.value,"encrypt", checkKey(keyInput.value));
            this.setAttribute("disabled","");
        }
    });
    decryptInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
           this.value = encryptOrDecrypt(this.value,"decrypt", checkKey(keyInput.value));
           this.setAttribute("disabled","");
        }
    });
    
    keyInput.value = 2;
    encryptInput.value = "";
    decryptInput.value = "";
}

init();

/* functions */
function encryptOrDecrypt(message, encryptOrDecrypt, key) {
    let messageToLowerCase = message.toLowerCase();
    let returnMessage = "";
    const possibleResults = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < messageToLowerCase.length; i++) {
        let indexOfResult;
        const indexOfChar = possibleResults.indexOf(messageToLowerCase[i]);
        if (indexOfChar !== -1) {
            switch (encryptOrDecrypt) {
                case "encrypt":
                    indexOfResult = indexOfChar + key;
                    if (indexOfResult > 25) {
                        indexOfResult = indexOfResult - 25;
                    }
                    break;
                case "decrypt":
                    indexOfResult = indexOfChar - key;
                    if (indexOfResult < 0) {
                        indexOfResult = indexOfResult + 25;
                    }
                    break;
            }
            returnMessage = returnMessage + possibleResults[indexOfResult];
        }
        else {
            returnMessage = returnMessage + messageToLowerCase[i];
        }
    }
    return returnMessage;
}

function checkKey(key) {
    let parsedKey = parseInt(key);
    if (parsedKey < 0 || !parsedKey > 0) {
        parsedKey = 2;
        keyInput.value = 2;
    }
    return parsedKey;
}
