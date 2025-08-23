/*Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. 
It is also case-insensitive and ignores all non-alphanumeric characters. */

/*
 *Time complexity: O(n)
Space complexity:O(1)
 */


public class ValidPalindrome {
    public static boolean isPalindrome(String s) {
        s = s.toLowerCase().replaceAll("[^A-Za-z0-9]", "");
        int l = 0, r = s.length() - 1;
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    public static void main(String args[]) {
        String s = "Was it a car or a cat I saw?";
        boolean res = isPalindrome(s);
        System.out.println("Is Palindrome?" + res);
    }

}
