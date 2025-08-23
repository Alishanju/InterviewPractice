/*Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 */

/*
 *Time Complexity:O(n+m) ; n=length of string s, m=length of string t
 Space complexity:O(1)
 */


//import java.util.*;

public class ValidAnagram {

    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        return true;

    }

    public static void main(String args[]) {
        String s = "racecar";
        String t = "carrace";
        boolean result = isAnagram(s, t); // return true
        System.out.println("Is Anagram?" + result);

    }

}
// s = "jar", t = "jam" -> o/p:false