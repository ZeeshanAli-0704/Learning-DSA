/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;

    let loopTill = Math.min(l1, l2);
    let p1 = 0;
    let p2 = 0

    while (loopTill >= 0) {
        if (nums1[p1] === nums2[p2]) {
            return nums1[p1]
        } else if (nums1[p1] > nums2[p2]) {
            p2++
        } else {
            p1++
        }
        loopTill--;
    }
};

console.log(getCommon(nums1 = [1, 2, 3], nums2 = [2, 4]))