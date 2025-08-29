package StarPatterns;

import java.util.Scanner;
// Enter number of lines to print pattern:5
//     *
//    * *
//   *   *
//  *     *
// *********

public class HollowPyramidStar {

       public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number of lines to print pattern:");
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            for(int j=i;j<n;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=(2*i-1);j++){
                if(j==1 || i==n || j==(2*i-1)){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
  sc.close();
    }
    
    

    
}
