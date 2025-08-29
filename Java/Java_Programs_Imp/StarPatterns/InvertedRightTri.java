package StarPatterns;

import java.util.Scanner;

// Enter number of lines to print pattern:5
// *****
// ****
// ***
// **
// *

public class InvertedRightTri {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number of lines to print pattern:");
        int n=sc.nextInt();
        for(int i=n;i>=1;i--){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
  sc.close();
    }
  
    
}
