//sorts array in place in ascending order 

/*Use Merge Sort when:

Stability is required.

Data is very large (like external files).

Use Quick Sort when:

You want faster performance on average.

Memory is limited. */
//Both Merge Sort and Quick Sort have their strengths. Merge Sort guarantees O(n log n) in all cases and is stable, but it needs extra space. Quick Sort is usually faster in practice because of cache efficiency and is in-place, but it can degrade to O(n²) if the pivot choice is poor.”

// Then conclude with:

// “If the interviewer asks for worst-case safety → Merge Sort is better.

// If they ask for practical efficiency → Quick Sort is better.

// If stability is required → Merge Sort is better.

// If memory is a concern → Quick Sort is better.”

import java.util.Arrays;

/********
 * Time complexity: O(nlogn) -> best and avg and worst 
Space complexity:O(n)

++++++*/

//1.Break lists in half;
//2.base case: when len of list is 1;
//3.use merge9) to put lists together

public class mergeSortt {

    public static int[] merge(int left[],int[] right){
        int[] combined=new int[left.length+right.length];
        int i=0,j=0,index=0;
        while(i<left.length && j<right.length ){
            if(left[i]<right[j]){
                combined[index]=left[i];
                i++;
                index++;

            }else{
               combined[index]=right[j];
                j++;
                index++;
            }
        }

        while(i<left.length){
            combined[index]=left[i];
                i++;
                index++;

        }

        while(j<right.length){
             combined[index]=right[j];
                j++;
                index++;

        }
        return combined;

    }

    public static int[] mergeSort(int[] arr ){
        if(arr.length ==1) return arr;
        int midIndex=arr.length/2;
        int[] left=mergeSort(Arrays.copyOfRange(arr,0, midIndex));
        int[] right=mergeSort(Arrays.copyOfRange(arr,midIndex,arr.length));

        return merge(left,right);
    }
     public static void main(String args[]){
        int arr[]={3,1,4,2};
        int[] sortedArr=mergeSort(arr);
        
        System.out.println("Original Array:"+Arrays.toString(arr));
         System.out.println("Sorted Array:"+Arrays.toString(sortedArr));
    
}
    
}
