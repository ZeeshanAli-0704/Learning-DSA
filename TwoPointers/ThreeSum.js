
    //   Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    //   Notice that the solution set must not contain duplicate triplets.
      
    //   Example 1:
      
    //   Input: nums = [-1,0,1,2,-1,-4]
    //   Output: [[-1,-1,2],[-1,0,1]]
    //   Explanation:
    //   nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    //   nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    //   nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    //   The distinct triplets are [-1,0,1] and [-1,-1,2].
    //   Notice that the order of the output and the order of the triplets does not matter.

const threeSum = (arr) => {
    let nums = [...arr].sort();
    const res = []; 
  
    for (let i = 0; i < nums.length - 2; i++) {
      // We can do - 2 cause our other 2 pointers will take care of the last 2 nums
      // Initialize 2 pointers for innerloop which will give sum 
      let l = i + 1,
        r = nums.length - 1;
  
      if (nums[i] === nums[i - 1]) continue; // check for dupes on the outter loop, skip if nums[i] is a num we already saw
  
      while (l < r) {
        let total = nums[i] + nums[l] + nums[r]; // Add up all our current pointer values
  
        if (total === 0) {
          res.push([nums[i], nums[l], nums[r]]); // Add if we found a solution
  
          while (nums[l] === nums[l + 1]) l++; // This skips dupes in the nums array
          while (nums[r] === nums[r - 1]) r--; // This skips dupes in the nums array
  
          // We need to do one extra move after skipping the dupes or else we will still be on a dupe
          l++;
          r--;
        } else if (total > 0) {
          // If its greater than 0, then we can move the r pointer down
          r--;
        } else {
          // its less than 0 and we need to move the left pointer up
          l++;
        }
      }
    }
  
    return res;
  };
