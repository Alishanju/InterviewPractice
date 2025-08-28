//sorts array in place in ascending order ,if u need to chosse b/w bubble and insertion sort,
//better than bubble sort as it requires fewer swaps than bubble sort
/*🔥 Which is Best?

Insertion Sort → Best choice among the three (fastest in practice, adaptive, stable). -> VERY GOOD FOR SMALL/NEARLY SORTED ARRAYS(O(n))

Selection Sort → Useful if swaps are more expensive than comparisons.

Bubble Sort → Almost never best, only for learning. */
/*
 * Time complexity: O(n^2)
Space complexity:O(1)
*/


import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] a){
        for(int i=1;i<a.length;i++){
            int temp=a[i];
            int j=i-1;
            while( j>=0 && temp<a[j]){
                a[j+1]=a[j];
                a[j]=temp;
                j--;
            }
        }

    }
    public static void main(String args[]){
        int arr[]={4,2,6,5,10,1,3};
        insertionSort(arr);
        System.out.println(Arrays.toString(arr));



    }

    
}
