/*
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.
 */

/*
below time and space complexities are onot for printing linked list
Time complexity: O(n+m)
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

public class MergeTwoSortedLists {

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(1);
        ListNode merge = dummy;
        while (list1 != null && list2 != null) {
            if (list1.data <= list2.data) {
                merge.next = list1;
                list1 = list1.next;

            } else {
                merge.next = list2;
                list2 = list2.next;

            }
            merge = merge.next;
        }

        if (merge.next == list1 && list1 == null) {
            merge.next = list2;
        } else {
            merge.next = list1;
        }

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
        head.next.next = new ListNode(4);

        ListNode head2 = new ListNode(1);
        head2.next = new ListNode(3);
        head2.next.next = new ListNode(5);

        ListNode merged = mergeTwoLists(head, head2);
        printList(merged);

    }

}
