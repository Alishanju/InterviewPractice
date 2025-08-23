/*Given an array of integers nums and an integer target, return the indices i and j 
such that nums[i] + nums[j] == target and i != j. */

/*
Time complexity: O(n)
Space complexity:O(n)
 */



import java.util.*;

public class Twosum {

    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (hm.containsKey(diff)) {

                return new int[] { hm.get(diff), i };

            }
            hm.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String args[]) {
        int[] nums = { 3, 4, 5, 6 };
        int target = 7;
        int[] arr = twoSum(nums, target);// return [0,1]
        System.out.println("Indexes:" + Arrays.toString(arr));

    }

}
