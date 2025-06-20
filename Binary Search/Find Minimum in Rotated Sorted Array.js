// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(n) {
    let min = Infinity;
    let low = 0;
    let high = n.length - 1;
    
    while (low <= high) {
        let mid = parseInt((low+high)/2);

        if(arr[mid] <= arr[high]){
           min = Math.min(min, arr[mid]);
           high = mid - 1; 
        }else{
            min = Math.min(min, arr[low]);
            low = mid + 1;
        }
    }
    
    return min
};


let arr = [4,5,6,7,0,1,2];

console.log(findMin(arr))
