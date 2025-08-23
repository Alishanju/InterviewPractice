//You are given an integer array heights where heights[i] represents the height of the ith bar.

//You may choose any two bars to form a container. Return the maximum amount of water a container can store.

/*
Time complexity: O(n)
Space complexity:O(1)
 */

public class ContainerWithMostWater {

    public static int maxArea(int[] heights) {
        int max = 0, left = 0, right = heights.length - 1;
        while (left < right) {
            int width = right - left;
            int area = Math.min(heights[left], heights[right]) * width;
            max = Math.max(area, max);
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }

    public static void main(String args[]) {
        int[] nums = { 1, 7, 2, 5, 4, 7, 3, 6 };
        int result = maxArea(nums);
        System.out.println("max Area:" + result); // returns 36

    }

}
