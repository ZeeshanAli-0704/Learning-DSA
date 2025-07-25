package org.example.greedy;

public class JumpGame2 {

    public static int Solution(int[] nums) {
        int count = 0;   // Number of jumps
        int l = 0;       // Start of current range
        int r = 0;       // End of current range (farthest reachable with current jumps)

        while (r < nums.length - 1) {
            int farthest = 0;

            for (int i = l; i <= r; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }

            if (farthest == r) {
                // Can't move further
                return -1;
            }

            l = r + 1;
            r = farthest;
            count++;
        }

        return count;
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 0, 4};  // Cannot reach end
        int result = Solution(nums);
        System.out.println(result);  // Output: -1

        int[] nums2 = {2, 3, 1, 1, 4};  // Minimum jumps = 2
        System.out.println(Solution(nums2));  // Output: 2
    }
}
