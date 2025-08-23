/*
 * Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
(refer geeksfor geeks for understanding this question)
 */

/*
Time complexity: O(n)
Space complexity:O(1)
*/



class ListNode {
    int data;
    ListNode next;

    ListNode(int new_data) {
        this.data = new_data;
        this.next = null;

    }

}

public class LinkedListCycle {

    public static boolean hasCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) {
                return true;
            }
        }
        return false;
    }

    public static void main(String args[]) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(5);
        head.next.next.next.next = new ListNode(10);
        head.next.next.next.next.next = head.next; // this makes difference, if here its assigned value its not cycle
        boolean res = hasCycle(head);
        System.out.println("hasCycle?" + res);

    }

}
