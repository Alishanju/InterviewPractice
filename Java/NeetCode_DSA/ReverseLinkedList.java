/*
 * Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
 */

/*
below time and space complexities are onot for printing linked list
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

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode curr = head, prev = null, next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;

    }

    public static void printList(ListNode head) {
        while (head != null) {
            System.out.println(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String args[]) {
        ListNode head = new ListNode(0);
        head.next = new ListNode(1);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(3);
        head = reverseList(head);
        printList(head);

    }
}
