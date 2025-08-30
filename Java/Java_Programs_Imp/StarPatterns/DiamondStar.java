package StarPatterns;

import java.util.Scanner;
//upper part is pyrmaid star and lower part is inverted pyramid star(combination of both codes)
//refer 8,10 which can be formed by combining inverted pyramid,pyramid code siwth some chnages 
//https://www.guvi.in/blog/star-patterns-in-java-for-your-next-interview/

// Enter number of lines to print pattern:5
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

public class DiamondStar {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number of lines to print pattern:");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=i;j<n;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=(2*i-1);j++){
                System.out.print("*");
            }
            System.out.println();
        }
          for(int i=n-1;i>=1;i--){
            for(int j=i;j<n;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=(2*i-1);j++){
                System.out.print("*");
            }
            System.out.println();
        }
        
  sc.close();
    }
    
}
