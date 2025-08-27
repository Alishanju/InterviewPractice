//sorts array in place in ascending order 
/*
 * Time complexity: O(n^2)
Space complexity:O(1)
*/


import java.util.Arrays;

public class BubbleSort {
    public static void main(String args[]) {
        int[] nums = { 20,5,80,40,30,20};
        int n=nums.length;
        for(int i=0;i<n;i++){
            for(int j=1;j<n-i;j++){
                if(nums[j]<nums[j-1]){
                    int temp=nums[j];
                    nums[j]=nums[j-1];
                    nums[j-1]=temp; //bubblesort 

                }
            }
        }
        System.out.println("Sorted Array:"+Arrays.toString((nums)));
       

    }
    
}
