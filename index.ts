function dupEnc(string: string) {
    var map = <any>Object;
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
        if (map[element] > 1) {
            result = result + ")"
        } else {
            result = result + "("
        }
    }
    return result
}

function AlphabetLetter(array: Array<string>) {
    var lastAscii = array[0].charCodeAt(0)
    //console.log("Starts with ", array[0], lastAscii)
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        //console.log("Testing ", element, element.charCodeAt(0), lastAscii)
        if (element.charCodeAt(0) != lastAscii + 1) {
            return String.fromCharCode(element.charCodeAt(0) - 1)
        }
        lastAscii = element.charCodeAt(0)
    }
    return "None"
}

function MoveZeros(array: Array<any>) {
    var zeroes = 0
    var res: Array<number> = [];
    for (let index = 0; index < array.length; index++) {
        //console.log(array[index])
        if (array[index] === 0) {
            zeroes++
        } else {
            res.push(array[index])
        }
        //console.log(res)
    }
    for (let index = 0; index < zeroes; index++) {
        res.push(0)
    }
    return res
}

function StrToCamelCase(str: string) {
    for (let index = 0; index < str.length; index++) {
        //console.log(str[index])
        if (str[index] == "-" || str[index] == "_") {
            str = str.substring(0, index) + str[index + 1].toUpperCase() + str.substring(index + 2)
        }
        //console.log(str)
    }
    return str
}

function NumLength(num: number, res: number = 1): number {
    if (num < 10) {
        return res
    } else {
        num = Math.floor(num / 10)
        return NumLength(num, res + 1)
    }
}

function DigitalRoot(num: number): number {
    var len = NumLength(num)
    var res = 0
    for (let index = 0; index < len; index++) {
        const element = Math.floor((num % 10 ** (len - index)) / 10 ** (len - 1 - index));
        res = res + element
    }
    if (NumLength(res) == 1) {
        return res
    } else {
        return DigitalRoot(res)
    }
}

function RepeatStr(str: string, i: number): string { //compiler says I can't have string.repeat() func for no reason, so I made it myself
    var res = ""
    for (let index = 0; index < i; index++) {
        res = res + str
    }
    return res
}

function Tower(floors: number) {
    var strLen = (floors * 2) - 1
    var res: Array<string> = [];
    for (let index = 0; index < floors; index++) {
        let blocks = (index * 2) + 1
        let spaces = strLen - blocks
        res[index] = RepeatStr(" ", spaces / 2) + RepeatStr("*", blocks) + RepeatStr(" ", spaces / 2)
    }
    return res
}

function ArrayDeepCount(array: Array<any>, count: number = 0): number {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        count++
        if (typeof element === "object") {
            count = ArrayDeepCount(element, count)
        }
    }
    return count
}

function AnagramDifference(firstWord: string, secondWord: string) {
    var array = <any>Object;
    for (let index = 0; index < firstWord.length; index++) {
        array[firstWord[index]] = 1
    }
    for (let index = 0; index < secondWord.length; index++) {
        array[secondWord[index]]++
    }
    var res = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == 1){
            res++
        } 
    }
    return res
}

// function Permutations(str: string) {
//     var array = [];
//     for (let index = 0; index < str.length; index++) {
//         const element = str[index];
//         array.push(element);
//     }
//     return heapPermutation(array)
// }

// function PermutateArray(array: Array<string>): any {
//     if (array.length == 1) {
//         return [array[0]]
//     }
//     if (array.length == 2) {
//         return [array[0] + array[1], array[1] + array[0]]
//     } else {
//         for (let index = 0; index < array.length; index++) {
//             const element1 = array[index];
//             let newArr = array.splice(index, 1)
//             console.log(newArr);
//             var perm = PermutateArray(newArr)
//             for (let index = 0; index < perm.length; index++) {
//                 perm[index] = element1 + perm[index];
//             }
//         }
//         return perm
//     }
// }

// function heapPermutation(a: Array<string>, size: number = a.length, n: number = a.length, res: Array<object> = []) {
//     // if size becomes 1 then prints the obtained
//     // permutation
//     if (size == 1){
//         res.push(a);
//         console.log(a);
//     }

//     for (let i = 0; i < size; i++) {
//         heapPermutation(a, size - 1, n, res);

//         // if size is odd, swap 0th i.e (first) and
//         // (size-1)th i.e (last) element
//         if (size % 2 == 1) {
//             let temp = a[0];
//             a[0] = a[size - 1];
//             a[size - 1] = temp;
//         }

//         // If size is even, swap ith
//         // and (size-1)th i.e last element
//         else {
//             let temp = a[i];
//             a[i] = a[size - 1];
//             a[size - 1] = temp;
//         }
//     }

// }



//console.log(dupEnc("Success"))
//console.log(AlphabetLetter(['O','Q','R','S']))
//console.log(MoveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
//console.log(StrToCamelCase("The_Stealth-Warrior"))
//console.log(DigitalRoot(16))
//console.log(Tower(6))
//console.log(ArrayDeepCount(["x", ["y"], ["z"]]))
console.log(AnagramDifference("codewars", "hackerrank"))


