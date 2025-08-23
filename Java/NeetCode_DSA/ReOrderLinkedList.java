/*
 You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.
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

public class ReOrderLinkedList {

    public static ListNode reorderList(ListNode head) {
         ListNode slow=head,fast=head;
        while(fast != null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        ListNode prev=null,curr=slow,temp;
        while(curr!=null){
            temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        ListNode first=head,second=prev;
        while(second.next!=null){
            temp=first.next;
            first.next=second;
            first=temp;
            temp=second.next;
            second.next=first;
            second=temp;

        }
        return head;
        
    }

  public static void printList(ListNode head) {
        while (head != null) {
            System.out.println(head.data + " ");
            head = head.next;
        }
    }
      public static void main(String args[]) {
        ListNode head = new ListNode(2);
        head.next = new ListNode(4);
        head.next.next = new ListNode(6);
        head.next.next.next = new ListNode(8);
        head = reorderList(head); //[2,8,4,6]
        printList(head);

    }


    
}
