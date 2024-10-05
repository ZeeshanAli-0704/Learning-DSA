/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const freqMap = {};
    let count = 0;
    let start = 0;
    let end = 0;

    for (let char of s1) {
        if (freqMap[char] === undefined) count++;
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    while (s2.length > end) {
        let nextChar = s2[end];

        if (freqMap[nextChar] !== undefined) {
            freqMap[nextChar]--;
            if (freqMap[nextChar] === 0) {
                count--;
            }
        }

        end++;
        if (count === 0) {
            return true;
        }

        if (end - start === s1.length) {
            let temp = s2[start];
            if (freqMap[temp] !== undefined) {
                freqMap[temp] += 1;
                if (freqMap[temp] === 1) count++;
            }
            start++;
        }
    }
    return false;
};