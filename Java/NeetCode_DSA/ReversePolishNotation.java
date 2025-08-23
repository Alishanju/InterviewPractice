//You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

//Return the integer that represents the evaluation of the expression.

/*The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
/*
 *Time Complexity:O(n)
 Space Complexity:O(n)
 */

import java.util.Stack;

public class ReversePolishNotation {

    public static int evalRPN(String[] tokens) {
        Stack<Integer> st = new Stack<>();
        for (String token : tokens) {
            if (token.equals("+")) {
                st.push(st.pop() + st.pop());

            } else if (token.equals("-")) {
                int a = st.pop();
                int b = st.pop();
                st.push(b - a);
            } else if (token.equals("*")) {
                st.push(st.pop() * st.pop());
            } else if (token.equals("/")) {
                int a = st.pop();
                int b = st.pop();
                st.push(b / a);
            } else {
                st.push(Integer.parseInt(token));
            }
        }
        return st.pop();

    }

    public static void main(String args[]) {

        String[] nums = { "1", "2", "+", "3", "*", "4", "-" };
        int res = evalRPN(nums); // return 5 ; ((1 + 2) * 3) - 4 = 5
        System.out.println("res:" + res);

    }

}
