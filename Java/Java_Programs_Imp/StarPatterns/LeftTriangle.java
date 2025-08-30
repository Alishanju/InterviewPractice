package StarPatterns;

// Enter number of lines to print pattern:5
//     *
//    **
//   ***
//  ****
// *****

import java.util.Scanner;

public class LeftTriangle {

    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number of lines to print pattern:");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=i;j<n;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
  sc.close();
    }
    
}
