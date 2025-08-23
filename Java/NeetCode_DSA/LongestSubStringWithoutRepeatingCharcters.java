/*Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.
 */

/*
Time complexity: O(n)
Space complexity:O(m)
n is the length of the string and 
m is the total number of unique characters in the string.
*/


import java.util.*;

public class LongestSubStringWithoutRepeatingCharcters {

    public static int lengthOfLongestSubstring(String s) {
        HashSet<Character> hs = new HashSet<>();
        int l = 0, r = 0, len = 0, start = 0;
        while (r < s.length()) {
            if (hs.contains(s.charAt(r))) {
                hs.remove(s.charAt(l));
                l++;

            }
            hs.add(s.charAt(r));
            if (r - l + 1 > len) {
                start = l;
                len = r - l + 1;
            }
            r++;
        }
        // optional: if u want to return corresponding substring use
        // s.substring(start,start+len)
        System.out.println("Optional case-substring is:" + s.substring(start, start + len));
        return len;

    }

    public static void main(String args[]) {
        String s = "zxyzxyz";
        int len = lengthOfLongestSubstring(s);
        System.out.println("length:" + len);
    }

}
