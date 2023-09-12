function NestedMap(map, path = "", res = []) {
    for (let index = 0; index < Object.keys(map).length; index++) {
        const element = Object.keys(map)[index];
        if ((typeof Object.values(map)[index] == "object") && (!Array.isArray(Object.values(map)[index]))) {
            NestedMap(Object.values(map)[index], path + element + "/")
        } else {
            for (let index = 0; index < Object.values(map).length; index++) {
                console.log(Object.keys(map))
                const element = Object.values(map)[index];
                if ((typeof Object.values(map)[index] !== "object") || (Array.isArray(Object.values(map)[index]))) {
                    console.log(path + Object.keys(map)[index], element)
                    res = res + [path + Object.keys(map)[index], element]
                }
            }
        }
    }

}

var input = {
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1, 2, 3]
    }
};
//console.log(NestedMap(input))

function MoveHorisontally(array, offsetStart, offsetEnd, i) {
    var res = []
    for (let index = offsetStart; index < array[i].length - offsetEnd; index++) {
        const element = array[i][index];
        res.push(element)
    }
    return res
}

function MoveVertically(array2d, offsetStart, offsetEnd, i) {
    var res = []
    for (let index = offsetStart; index < array2d.length - offsetEnd; index++) {
        const element = array2d[index][i];
        res.push(element)
    }
    return res
}

function Snail(array) {
    var steps = (array.length - 1) * 2 + 1
    SnailCycle
}

function SnailCycle(array, steps, cycle = 0, result = []) {
    if (steps > 0) {
        MoveHorisontally(array, cycle, array.length - cycle, cycle)
        steps--
    }
    if (steps > 0) {
        MoveVertically(array, cycle, array.length - cycle, cycle)
        steps--
    }
    if (steps > 0) {
        MoveHorisontally(array, cycle, array.length - cycle, cycle)
        steps--
    }
    if (steps > 0) {
        MoveVertically(array, cycle, array.length - cycle, cycle)
        steps--
    } 
    if (steps > 0){
        SnailCycle()
    }
    else{
        return result
    }
}

console.log(Snail([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))