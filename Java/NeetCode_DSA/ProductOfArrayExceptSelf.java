//Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
/*
 *Time Complexity:O(n)
 Space Complexity:O(n) space for o/p array , O(1) EXTRA SPACE
 */
public class ProductOfArrayExceptSelf {

     public static int[] productExceptSelf(int[] nums) {
        int len=nums.length;
        int res[] = new int[len];
        int pre=1,post=1;
        for(int i=0;i<len;i++){
            res[i]=pre;
            pre=pre*nums[i];
        }
        for(int j=len-1;j>=0;j--){
            res[j]=res[j]*post;
            post=post*nums[j];
        }
        return res;


        
    }

        public static void main(String args[]) {

        int[] nums = { 1, 2, 4,6};
        

        int[] arr = productExceptSelf(nums); // return [48,24,12,8]
        for (int i : arr) {
            System.out.println("arr:" + i);

        }

    }

    
}
