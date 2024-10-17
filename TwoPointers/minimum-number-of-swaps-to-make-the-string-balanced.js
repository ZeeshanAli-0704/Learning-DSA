/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let stk = []
    for (let c of s) {
        if (stk && c == ']') { 
            stk.pop() 
        }
        else if (c == '[') { 
            stk.push(c) 
        }
    }
    return Math.floor((stk.length + 1) / 2)
};

console.log(minSwaps("]]][[["))
console.log(minSwaps("][]["));