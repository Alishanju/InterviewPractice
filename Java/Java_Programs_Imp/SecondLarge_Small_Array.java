/* Return second largest element in an array 
 */


/*
Brute Force :
Time complexity: O(n^2)+O(n) /O(NlogN)+O(n) depending on sorting algo, i used bubble sort so n^2
Space complexity:O(1)
*/
/*******
Optimal:
Time complexity: O(n)
Space complexity:O(1)
*******/

/* 

import java.util.Arrays;

public class SecondLarge_Small_Array {
    public static void main(String args[]) {
        int[] nums = {1,2,4,7,7,5};
        int n=nums.length;
        int secLarge=-1;
        
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
        for(int i=n-2;i>=0;i--){
            if(nums[i]!=nums[n-1]){
                secLarge=nums[i];
                break;
            }
        }
        System.out.println("Second largest Element:"+secLarge);

    }
    
}
    */

//**** Optimal: *****

public class SecondLarge_Small_Array {
    public static void main(String args[]) {
        int[] nums = {1,2,4,7,7,5};
        int max=nums[0];
        int secLarge=-1;
        int n=nums.length;
        for(int i=0;i<n;i++){ 
            if(nums[i]> max){
                secLarge=max;
                max=nums[i];
            }else if (nums[i]<max && nums[i]>secLarge){
                secLarge=nums[i];
            }
        }
      
        System.out.println("Second largest Element:"+secLarge);

    }
    
}

//for sec small initialize it to integer.MAX_VALUE  and change symbols 
