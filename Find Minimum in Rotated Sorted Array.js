// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(n) {
     let min = n[0];
    let l = 0;
    let r = n.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l+r) / 2);
        if (n[m] < min) min = n[m]
        
        if (n[m] >= n[r]){
            l = m + 1;
        }else {
            r = m - 1;
        }
    }
    
    return min
};
