//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

/*
Time complexity: O(n)
Space complexity:O(n)
 */


import java.util.*;

public class ContainsDuplicate {

    public static boolean hasDuplicate(int[] nums) {
        HashSet<Integer> hm = new HashSet<>();
        for (int num : nums) {
            if (hm.contains(num)) {
                return true;
            }
            hm.add(num);
        }
        return false;
    }

    public static void main(String args[]) {
        int[] nums = { 1, 2, 3, 3 };
        boolean result = hasDuplicate(nums);
        System.out.println("Is duplicate?" + result); // returns true

    }
}
// use nums={1,2,3,4} -> o/p:flase
