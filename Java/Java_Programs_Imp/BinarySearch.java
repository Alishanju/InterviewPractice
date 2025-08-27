/*
 * You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(logn) time.
 */

/*
Time complexity: O(logn)
Space complexity:O(1)
*/


public class BinarySearch {

    public static int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + ((r - l) / 2);
            if (target > nums[mid]) {
                l = mid + 1;
            } else if (target < nums[mid]) {
                r = mid - 1;
            } else {
                return mid;
            }

        }
        return -1;
    }

    public static void main(String args[]) {
        int[] nums = { -1, 0, 2, 4, 6, 8 };
        int target = 4;
        int found = search(nums, target);// 3
        System.out.println("found at index:" + found);

    }

}
