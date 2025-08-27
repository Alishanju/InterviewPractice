//ascending order

/*******
Optimal:
Time complexity: O(n)
Space complexity:O(1)
*******/
public class ArrayIsSorted {
    public static void main(String args[]) {
        int[] arr = {1,2,3,3,5,9};
        boolean flag=true;
        for(int i=1;i<arr.length;i++){
            if(arr[i]<arr[i-1]){
                flag=false;

                
            }
        }
        if(flag){
            System.out.println("Array is sorted");
        }else{
            System.out.println("Array is not sorted");

        }

    }  
}
