function dupEnc(string:string) {
    var map = new Object;
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        map[element] = 0
    }
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        map[element] = map[element] + 1
    }
    var result = ""
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (map[element] > 1){
            result = result + ")" 
        } else {
            result = result + "(" 
        }
    }
    return result
}

function AlphabetLetter(array:Array<string>) {
    var lastAscii = array[0].charCodeAt(0)
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (element.charCodeAt(0) != lastAscii + 1){
            return String.fromCharCode(element.charCodeAt(0))
        }
    }
    return "None"
}


//console.log(dupEnc("recede"))
console.log(AlphabetLetter(['O','Q','R','S']))