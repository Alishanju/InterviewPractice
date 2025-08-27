/*
 * You are given an array wiyh positive/negative/both
return max subarray sum and sub array too that returns max sum
 */
//Kadane's algo: optimal


//Integer.MIN_VALUE Integer.MIN_VALUE is a constant in the Integer class of java.lang package that specifies that stores the minimum possible value for any integer variable in Java. The actual value of this is -2^31 = -2147483648

/*
Brute Force but better :
Time complexity: O(n^2)
Space complexity:O(1)
*/

/*******
Optimal:
Time complexity: O(n)
Space complexity:O(1)
*******/

// ****Better/Brute Force*****: 
/* 
public class MaxSubArraySum_KadaneAlg{

    public static void main(String args[]) {
        int[] nums = { -2, -3, 4,-1,-2,1,5,-3 };
        int n=nums.length;
        int maxi=Integer.MIN_VALUE;
        int start=0;
        int end=0;
        for(int i=0;i<n;i++){
             int sum=0;
            for(int j=i;j<n;j++){
                
                 sum+=nums[j];
                  if(sum>maxi){
                    maxi=sum;
                    start=i;
                    end=j;

                  }
                
            }
        }
        System.out.println("Max Subarray Sum:"+ maxi);
        System.out.println("SubArray:");

        for(int k=start;k<=end;k++){
            System.out.print(nums[k]+" ");

     }

    }

}
    */
//**** Optimal: *****
public class MaxSubArraySum_KadaneAlg{

    public static void main(String args[]) {
        int[] nums = { -2, -3, 4,-1,-2,1,5,-3 };
        int n=nums.length;
        int maxi=Integer.MIN_VALUE;
        int start=0;
        int end=0;
        int sum=0;
        for(int i=0;i<n;i++){
            if(sum==0){
                start=i;
            }

            sum+=nums[i];
            if(sum>maxi){
                maxi=sum;
                end=i;
            }

            if(sum<0){
                sum=0;
            }
        }

    System.out.println("Max Subarray Sum:"+ maxi);
    System.out.println("SubArray start and end indexes:"+start+" "+end);;
    }
 
}
