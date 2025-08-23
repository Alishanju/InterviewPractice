/*
 * You are given a string s consisting of only uppercase english characters and an integer k. 
 * You can choose up to k characters of the string and replace them with any other uppercase English character.


 */

/*
Time complexity: O(n)
Space complexity:O(1)

*/


public class LongestRepeatingCharcterReplacement {

    public static int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int l = 0, maxOccurance = 0, maxLen = 0;
        for (int r = 0; r < s.length(); r++) {
            maxOccurance = Math.max(maxOccurance, ++count[s.charAt(r) - 'A']);
            if (r - l + 1 - maxOccurance > k) {
                count[s.charAt(l) - 'A']--;
                l++;
            }
            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }

    public static void main(String args[]) {
        String s = "XYYX";
        int k = 2;
        int len = characterReplacement(s, k); // return 4
        System.out.println("length:" + len);
    }

}
