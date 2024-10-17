/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    const stack = [];

    for (let char of s) {
        let lastChar = stack[stack.length - 1];
        if (stack.length === 0) {
            stack.push(char)
        } else if ((lastChar === "A" && char === "B") || (lastChar === "C" && char === "D")) {
            stack.pop();
        } else {
            stack.push(char)
        }
    }
    return stack.length
};

console.log(minLength("ABFCACDB"))