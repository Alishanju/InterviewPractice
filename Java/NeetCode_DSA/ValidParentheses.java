/*
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.
 */

/*
Time complexity: O(n)
Space complexity:O(n)
*/

import java.util.*;

public class ValidParentheses {

    public static boolean isValid(String s) {

        HashMap<Character, Character> hm = new HashMap<>();
        hm.put(']', '[');
        hm.put('}', '{');
        hm.put(')', '(');
        Stack<Character> st = new Stack<>();
        for (char c : s.toCharArray()) {
            if (hm.containsKey(c)) {
                if (!st.isEmpty() && st.peek() == hm.get(c)) {
                    st.pop();
                }

            } else {
                st.push(c);
            }
        }

        return st.isEmpty();

    }

    public static void main(String args[]) {
        String s = "([{}])";
        boolean res = isValid(s); // true
        System.out.println("is Vaild parentheses?" + res);

    }

}
