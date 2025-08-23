import java.util.*;

public class Scannerip {
   public static void main(String args[]) {
     Scanner input=new Scanner(System.in);
    System.out.println("Enter the size of array:");
    int size=input.nextInt();
    int arr[]=new int[size];
    System.out.println("Enter numbers in an array:");
    for(int i=0;i<size;i++){
        System.out.print("Element"+(i+1)+" ");
        arr[i]=input.nextInt();
    }
    System.out.println("Elements are:");
       for (int i = 0; i < size; i++) {
            System.out.println(arr[i]);
        }
        input.close();


        
        
    }

}