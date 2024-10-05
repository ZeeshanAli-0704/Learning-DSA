/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    let sortedSkills = skill.sort((a, b) => a - b);
    if (sortedSkills.length % 2 !== 0) {
        return -1;
    }

    if (sortedSkills.length === 2) {
        return skill[0] * skill[1];
    }
    let start = 0;
    let end = sortedSkills.length - 1;
    let pairsSumToMatch = sortedSkills[start] + sortedSkills[end];
    let pairsResult = [];
    for (let i = 0; i < sortedSkills.length / 2; i++) {
        let currentPair = sortedSkills[start] + sortedSkills[end];
        if (pairsSumToMatch !== currentPair) {
            return -1;
        }
        pairsResult =+ (sortedSkills[start] * sortedSkills[end]);
        start++;
        end--;
    }
    return pairsResult
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]))
console.log(dividePlayers([3, 4]))
console.log(dividePlayers([1, 1, 2, 3]))