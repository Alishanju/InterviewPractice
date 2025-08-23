/*
 * you are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.
 */
/*
below time and space complexities
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

public class RemoveNodeatEndOfLinkedList {

    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(1);
        dummy.next = head;
        ListNode front = dummy, back = dummy;
        for (int i = 0; i <= n; i++) {
            front = front.next;
        }
        while (front != null) {
            front = front.next; // right
            back = back.next; // left
        }
        back.next = back.next.next;
        return dummy.next;

    }

    public static void printList(ListNode head) {
        while (head != null) {
            System.out.println(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String args[]) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        int n = 2;
        head = removeNthFromEnd(head, n); // [1,2,4]
        printList(head);

    }

}
