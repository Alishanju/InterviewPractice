/*
 * You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.
 */

/*
Time complexity: O(n)
Space complexity:O(1)

*/



public class PermutationInString {
    public static boolean checkInclusion(String s1, String s2) {
        int[] s1Map = new int[26];
        int[] s2Map = new int[26];
        if (s1.length() > s2.length()) {
            return false;
        }
        // Initialize frequency maps for s1 and the first window of s2
        for (int i = 0; i < s1.length(); i++) {
            s1Map[s1.charAt(i) - 'a']++;
            s2Map[s2.charAt(i) - 'a']++;
        }

        // Slide the window through s2 and compare the maps
        for (int j = 0; j < s2.length() - s1.length(); j++) {
            if (matches(s1Map, s2Map)) {
                return true;

            }
            s2Map[s2.charAt(j + s1.length()) - 'a']++; // Add new character to the window
            s2Map[s2.charAt(j) - 'a']--;// Remove old character from the window

        }
        // Check the last window
        return matches(s1Map, s2Map);

    }

    // Helper function to compare two frequency maps
    private static boolean matches(int[] s1Map, int[] s2Map) {
        for (int i = 0; i < 26; i++) {
            if (s1Map[i] != s2Map[i]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String args[]) {
        String s1 = "abc";
        String s2 = "lecabee";
        boolean result = checkInclusion(s1, s2); // true as 'cab' is permutation str of abc
        System.out.println("result:" + result);
    }

}
