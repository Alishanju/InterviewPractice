//Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

//A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
//The elements do not have to be consecutive in the original array.
/*
 *Time Complexity:O(n)
 Space Complexity:O(n)
 */

import java.util.HashSet;

public class LongestConsecutiveSequence {

    public static int longestConsecutive(int[] nums) {
        HashSet<Integer> hs = new HashSet<>();
        for (int i : nums) {
            hs.add(i);
        }
        int longsubseq = 0;
        for (int num : nums) {
            if (hs.contains(num - 1)) {
                continue;
            } else {
                int curr = num;
                int currsubseq = 1;
                while (hs.contains(curr + 1)) {
                    curr++;
                    currsubseq++;
                }
                longsubseq = Math.max(longsubseq, currsubseq);

            }
        }
        return longsubseq;

    }

    public static void main(String args[]) {

        int[] nums = { 2, 20, 4, 10, 3, 4, 5 };

        int len = longestConsecutive(nums); // return 4 (longest consecutive seq is [2,3,4,5])

        System.out.println("length:" + len);

    }

}
