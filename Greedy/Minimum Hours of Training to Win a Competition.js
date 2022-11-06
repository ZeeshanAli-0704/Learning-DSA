// https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
      let extraEnergyNeeded = 0;
  let extraExpNeeded = 0;
  let totalExp = initialExperience;
  let totalEnergyNeeded = energy.reduce((acc, i) => acc + i, 0);
  if (totalEnergyNeeded >= initialEnergy) {
    extraEnergyNeeded = totalEnergyNeeded - initialEnergy + 1;
  }
  let index = 0;

  while (index < experience.length) {
    if (totalExp > experience[index]) {
      totalExp = totalExp + experience[index];
      index++;
    } else {
      extraExpNeeded++;
      totalExp++;
    }
  }
  return extraEnergyNeeded + extraExpNeeded;
};
