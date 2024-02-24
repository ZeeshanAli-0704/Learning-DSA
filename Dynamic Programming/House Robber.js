/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let map = new Map();
  const robbedMoney = (index) => {
    if (index === 0) {
      return nums[index];
    }
    if (index < 0) {
      return 0;
    }
    if (map.has(index)) {
      return map.get(index);
    }
    let left = nums[index] + robbedMoney(index - 2);
    let right = robbedMoney(index - 1);
    map.set(index, Math.max(left, right));
    return map.get(index);
  };
  return robbedMoney(nums.length - 1);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
