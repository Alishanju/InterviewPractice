//Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
/*
 *Time Complexity:O(m*n)  //m is the number of strings and 
n is the length of the longest string.
 Space complexity:O(m) -> extra space
 O(m*n) -> space for o/p list
 */



import java.util.*;

public class GroupAnagarms {

    public static List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List> hm = new HashMap<>();
        int[] count = new int[26];
        for (String s : strs) {
            Arrays.fill(count, 0);
            for (char c : s.toCharArray()) {
                count[c - 'a']++;
            }
            String key = Arrays.toString(count);
            if (!hm.containsKey(key)) {
                hm.put(key, new ArrayList<>());
            }
            hm.get(key).add(s);

        }
        return new ArrayList<>(hm.values());

    }

    public static void main(String args[]) {
        String[] strs = { "act", "pots", "tops", "cat", "stop", "hat" };

        List<List<String>> strArray = groupAnagrams(strs); // return [["hat"],["act", "cat"],["stop", "pots", "tops"]]
        System.out.println("sublist:" + strArray);

    }

}

// strs = ["x"] -> o/p:[["x"]]