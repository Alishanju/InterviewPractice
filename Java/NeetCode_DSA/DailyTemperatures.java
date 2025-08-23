//You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

//Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. 
//If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

/*
 *Time Complexity:O(n)
 Space Complexity:O(1) extra space ,O(n) space for o/p arary
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;
import java.util.*;

public class DailyTemperatures {
     public static int[] dailyTemperatures(int[] temperatures) {
        int n=temperatures.length;
        int arr[]=new int[n];
        Stack<Integer> st=new Stack<>();
        for(int i=0;i<n;i++){
            while(!st.isEmpty() && temperatures[i] > temperatures[st.peek()]){
                int index=st.pop();
                arr[index]=i-index;  
            }
            st.push(i);
        
        }
        return arr;
        
    }
      public static void main(String args[]) {

        int[] nums = { 30,38,30,36,35,40,28 };

        int[] arr =  dailyTemperatures(nums);
         // return [1,4,1,2,1,0,0]
         List<Integer> list=new ArrayList<>();
         for(int num:arr){
            list.add(num);

         }
        System.out.println("arrlist:" +list);


    }
    
}
