//Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.
//Please implement encode and decode
/*
 *Time Complexity:O(m)
 Space Complexity:O(m+n)
 Where 
m is the sum of lengths of all the strings and 
n is the number of strings.

 */

import java.util.ArrayList;
import java.util.List;

public class EncodeAndDecodeStrings {

    public static String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        for (String str : strs) {
            sb.append(str.length()).append('#').append(str);

        }

        return sb.toString();

    }

    public static List<String> decode(String str) {
        List<String> res = new ArrayList<>();
        int i = 0;
        while (i < str.length()) {
            int j = i;
            while (str.charAt(j) != '#') {
                j++;
            }
            int length = Integer.parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.add(str.substring(i, j));
            i = j;
        }
        return res;

    }

    public static void main(String args[]) {

        List<String> arr = java.util.Arrays.asList("we", "say", ":", "yes");
        String encodedStr = encode(arr);
        System.out.println("encodedStr:" + encodedStr);
        List<String> decodedStr = decode(encodedStr);
        System.out.println("decodedStr:" + decodedStr);

    }

}
