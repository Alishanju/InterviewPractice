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
/*******
 * Time complexity: O(nlogn) -> best and avg, O(n^2) for worsti.e; for already sorted arrays(prefer insertion sort O(n))
Space complexity:O(1)

******/

import java.util.Arrays;

public class quickSortt {

    public static void swap(int arr[],int firstIndex,int secondIndex){
        int temp=arr[firstIndex];
     arr[firstIndex]=arr[secondIndex];
     arr[secondIndex]=temp;

    }

    public static int pivot(int arr[],int pivotindex,int endIndex){
        int swapIndex=pivotindex;
        for(int i=pivotindex+1;i<=endIndex;i++){
            if(arr[i]<arr[pivotindex]){
                swapIndex++;
                swap(arr,swapIndex,i);
            }
        }

            swap(arr,pivotindex,swapIndex);
        return swapIndex;

    }

    public static void quickSort(int[] arr,int left,int right){
        if(left<right){
            int pivotIndex=pivot(arr,left,right);
            quickSort(arr,left,pivotIndex-1);
            quickSort(arr, pivotIndex+1, right);
        }

    }

    public static void main(String args[]){
        int arr[]={4,6,1,7,3,2,5};
        quickSort(arr,0,arr.length-1);
        System.out.println(Arrays.toString(arr));
    
}
}
