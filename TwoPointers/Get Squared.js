const getSquared = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * arr[i]);
  }
  return newArray.sort();
};

console.log(getSquared([-2, -1, 0, 2, 3]));
