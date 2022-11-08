// You are given two positive integers n and target.

// An integer is considered beautiful if the sum of its digits is less than or equal to target.

// Return the minimum non-negative integer x such that n + x is beautiful. The input will be generated such that it is always possible to make n beautiful.

 

// Example 1:

// Input: n = 16, target = 6
// Output: 4
// Explanation: Initially n is 16 and its digit sum is 1 + 6 = 7. After adding 4, n becomes 20 and digit sum becomes 2 + 0 = 2. It can be shown that we can not make n beautiful with adding non-negative integer less than 4.

// Example 2:

// Input: n = 467, target = 6
// Output: 33
// Explanation: Initially n is 467 and its digit sum is 4 + 6 + 7 = 17. After adding 33, n becomes 500 and digit sum becomes 5 + 0 + 0 = 5. It can be shown that we can not make n beautiful with adding non-negative integer less than 33.

// Example 3:

// Input: n = 1, target = 1
// Output: 0
// Explanation: Initially n is 1 and its digit sum is 1, which is already smaller than or equal to target.

const makeIntegerBeautiful = (n, target) => {
  // calling digit function which will give us all number in array format
  let d = digits(n);
  // checking sum of all current digits
  let s = d.reduce((a, b) => a + b);
  // this is to check what sum we have to add to make it beautiful
  let beautifier = 0;
  // index to keep 0th tenth, hundredth place in number system
  let i = 0;

  // looping till s is greater than target
  while (s > target) {
    // talking the last digit of n i.e.. 0 index from digit array
    // subtracting it from 10 to get number which we can add to make it 10
    const m = (10 - d[0]) % 10;
    // adding it to beautifier to count sum & Math.pow will give us place of number i.e.,0th tenth, hundredth place in number system
    beautifier += m * Math.pow(10, i++);
    n += m;
    // this is to remove the last 0 from number if number is suppose 470  then will make n to 47
    n = n / 10;
    d = digits(n);
    s = d.reduce((a, b) => a + b);
  }

  return beautifier;
};

const digits = (n) => {
  const digist = [];
  while (n !== 0) {
    digist.push(n % 10);
    n = Math.floor(n / 10);
  }
  return digist;
};

console.log(makeIntegerBeautiful(16, 6));
