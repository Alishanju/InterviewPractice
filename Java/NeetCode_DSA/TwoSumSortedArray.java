/*Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up
 to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use O(1) additional space. */

/*
Time complexity: O(n)
Space complexity:O(1)
 */



import java.util.Arrays;

public class TwoSumSortedArray {

    public static int[] twoSum(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum > target) {
                r--;
            } else if (sum < target) {
                l--;
            } else {
                return new int[] { l + 1, r + 1 };
            }
        }
        return new int[0];
    }

    public static void main(String args[]) {
        int[] nums = { 1, 2, 3, 4 };
        int target = 3;
        int[] arr = twoSum(nums, target);// return [1,2]
        System.out.println("Indexes:" + Arrays.toString(arr));

    }

}
