package StarPatterns;
////upper part is right triangle and lower part is inverted right triangle(combination of both codes)
/// 
// Enter number of lines to print pattern:5
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

import java.util.Scanner;

public class RightPascalTriangle {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number of lines to print pattern:");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

         for(int i=n-1;i>=1;i--){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
  sc.close();
    }
    
}
