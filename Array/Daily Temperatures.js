/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  let warmerList = [];
  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    for (let j = i; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        break;
      } else {
        count++;
      }

      if (j === temperatures.length - 1) {
        count = 0;
      }
    }
    warmerList.push(count);
  }
  return warmerList;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
