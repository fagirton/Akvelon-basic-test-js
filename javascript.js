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
console.log(NestedMap(input))

