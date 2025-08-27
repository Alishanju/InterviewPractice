/* Return largest element in an array
 */


/*
Brute Force :
Time complexity: O(n^2) /O(NlogN) depending on sorting algo, i used bubble sort so n^2
Space complexity:O(1)
*/


/*******
Optimal:
Time complexity: O(n)
Space complexity:O(1)
*******/

// ****Brute Force*****: 

/* 
import java.util.Arrays;
public class LargestEle_Array {
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
        System.out.println("largest Element:"+nums[n-1]);

    }
    
}
*/

//**** Optimal: *****

public class LargestEle_Array {
    public static void main(String args[]) {
        int[] nums = { 20,5,80,140,30,120};
        int max=nums[0];
        int n=nums.length;
        for(int i=0;i<n;i++){ //or u can run loop from i=1 too 
            if(nums[i]> max){
                max=nums[i];
            }
        }
      
        System.out.println("largest Element:"+max);

    }
    
}