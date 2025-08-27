//remove duplicates from sorted array, print unique elements length

/*
Brute Force : set
Time complexity: O(2n)
Space complexity:O(n)
*/



/*******
Optimal: 2 pointer approach
Time complexity: O(n)
Space complexity:O(1)
*******/
/* 
import java.util.*;
public class RemoveDupSortedArray {
    public static int UniqueArrLen(int[] a){
        Set<Integer> st=new HashSet<>();
        for(int i=0;i<a.length;i++){
            st.add(a[i]);
        }
        int idx=0;
        for(Integer ele:st){
            a[idx]=ele;
            idx++;

        }
        System.out.println("array is:"+Arrays.toString(a));
        return idx;

    }
public static void main(String args[]) {
int[] arr={1,1,2,2,2,3,3};
int len=UniqueArrLen(arr);
System.out.println("Length of unique elements:"+len);
}
    
}
*/

public class RemoveDupSortedArray {

public static void main(String args[]) {
int[] arr={1,1,2,2,2,3,3};
int i=0;
for(int j=1;j<arr.length;j++){
    if(arr[j]!= arr[i]){
        arr[i+1]=arr[j];
        i++;
    }
}
int len=i+1;
System.out.println("Length of unique elements:"+len);
}
    
}