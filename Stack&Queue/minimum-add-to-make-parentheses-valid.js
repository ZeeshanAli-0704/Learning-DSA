/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(') {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] == '(' && char === ')') {
                stack.pop()
            }else{
                stack.push(char);
            }
        }
    }
    return stack.length;
};

console.log(minAddToMakeValid("())"))
console.log(minAddToMakeValid("()))"))
console.log(minAddToMakeValid("()()"))