//Given an integer array nums and an integer k, return the k most frequent elements within the array
//You may return the output in any order.
/*
 *Time Complexity:O(n)
 Space Complexity:O(n)
 */

import java.util.HashMap;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

public class TopKFrequentElements {

    public static int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        for (int i : nums) {
            hm.put(i, hm.getOrDefault(i, 0) + 1);
        }
        Queue<Integer> qu = new PriorityQueue<>((a, b) -> hm.get(a) - hm.get(b));
        for (int n : hm.keySet()) {
            qu.add(n);
            if (qu.size() > k) {
                qu.poll();
            }
        }

        int[] arr = new int[k];
        for (int i = 0; i < k; i++) {
            arr[i] = qu.poll();
        }
        return arr;

    }

    public static void main(String args[]) {

        int[] nums = { 1, 2, 2, 3, 3, 3 };
        int k = 2;

        int[] arr = topKFrequent(nums, k); // return [2,3]
        for (int i : arr) {
            System.out.println("arr:" + i);

        }

    }

}
