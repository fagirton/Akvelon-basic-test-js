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
    for (let index = offsetStart; index < offsetEnd; index++) {
        const element = array[i][index];
        res.push(element)
    }
    return res
}

function MoveVertically(array2d, offsetStart, offsetEnd, i) {
    var res = []
    for (let index = offsetStart; index < offsetEnd; index++) {
        const element = array2d[index][i];
        res.push(element)
    }
    return res
}

function Snail(array) {
    var steps = (array.length - 1) * 2 + 1
    SnailCycle(array, steps)
}

function SnailCycle(array, steps, cycle = 0, res = []) {
    if (steps > 0) {
        res.push(MoveHorisontally(array, cycle, array.length - cycle, cycle))
        console.log(res)
        steps--
    }
    if (steps > 0) {
        res.push(MoveVertically(array, array.length - cycle, cycle, cycle))
        console.log(res)
        steps--
    }
    if (steps > 0) {
        res.push(MoveHorisontally(array, array.length - cycle, cycle, cycle))
        console.log(res)
        steps--
    }
    if (steps > 0) {
        cycle++
        res.push(MoveVertically(array, cycle, array.length - cycle, cycle))
        console.log(res)
        steps--
    }
    if (steps > 0) {
        return SnailCycle(array, steps, cycle, res)
    } else {
        return res
    }
}


function Rotate2dArray(array2d) {
    result = []
    for (let index = array2d[0].length; index >= 0; index--) {
        var verticalSlice = []
        for (let index1 = 0; index1 < array2d.length; index1++) {
            const element = array2d[index1][index];
            verticalSlice.push(element)
        }
        result.push(verticalSlice)
    }
    return result
}

console.log(Rotate2dArray([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))


function AnagramDifference(firstWord, secondWord) {
    var array
    for (let index = 0; index < firstWord.length; index++) {
        array[firstWord[index]] = 1
    }
    for (let index = 0; index < secondWord.length; index++) {
        array[secondWord[index]]++
    }
    var res = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == 1) {
            res++
        }
    }
    return res
}

//console.log(AnagramDifference("codewars", "hackerrank"))

var TreeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

function maxSum(root) {
    var val;
    if (root == null) {
        return 0
    } else {
        let left = maxSum(root.left)
        let right = maxSum(root.right)

        let max_single = Math.max(Math.max(left, right) + root.value, root.value);
        let max_top = Math.max(max_single, left + right + root.value);
        val = Math.max(val, max_top);

        return max_single;
    }
}

function maxSum2(root) {
    if (root == null) {
        return 0
    }

    /* case 1 */
    if (root.left == null && root.right == null) {
        if (root.value != null) {
            return root.value
        } else {
            return 0
        }
    }

    /* case 2 */
    if (root.right == null)
        return root.value + maxSum(root.left);
    else if (root.left == null)
        return root.value + maxSum(root.right);

    /* case 3 */
    return Math.max(root.value + maxSum(root.left), root.value + maxSum(root.right));
}

/**
  *      5
  *    /   \
  *  -22    11
  *  / \    / \
  * 9  50  9   2
  */
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
//console.log(maxSum2(null))


function sumPairs(ints, s) {
    var result = new Object;
    if (s == 0) {
        let zeroes = []
        for (let index = 0; index < ints.length; index++) {
            if (ints[index] == 0){
                zeroes.push(index)
            }
            if (zeroes == 2){
                return index
            }
            
        }
    } else {
        for (index = 0; index < ints.length; index++) {
            if (ints[index] < Math.abs(s)) {
                let pair = s - ints[index]
                console.log(pair)
                for (index2 = 0; index2 < ints.length; index2++) {
                    if (index != index2 && ints[index2] == pair) {
                        console.log(ints[index], ints[index2])
                        result[index2] = [ints[index], ints[index2], index, index2]
                    }
                }
            }
        }
    }
    console.log(result)
    for (index = 1; index < ints.length; index++) {
        if (result[index] != null && result[index][2] < result[index][3]) {
            return result[index].slice(0, 2)
        }
    }
}
//console.log(sumPairs([0, 2, 0], 0))