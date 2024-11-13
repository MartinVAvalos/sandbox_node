// source: https://leetcode.com/problems/add-two-numbers/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function createLinkedList(arr: Array<number>): ListNode | null {
    if (arr.length === 0) return null;

    let temp = new ListNode(arr[0]);
    let current = temp;
    for (let index=1; index<arr.length; index++) {
        current.next = new ListNode(arr[index]);
        current = current.next;
    }
    return temp;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) return null;
    let listTotal = new Array();

    let sum = 0;
    let carry = 0;
    while(l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry || 0;
        listTotal.push(sum % 10)
        carry = Math.floor(sum/10);
        l1 = l1?.next!;
        l2 = l2?.next!;
    }
    if(carry > 0) listTotal.push(carry);
    return createLinkedList(listTotal);
};

function addTwoNumbersRecursive(l1: ListNode | null, l2: ListNode | null, carry: number=0): ListNode | null {
    if (!l1 && !l2 && carry===0) return null;
    let total = (l1?.val||0) + (l2?.val||0) + carry;
    let c = Math.floor(total/10);
    return new ListNode(total%10, addTwoNumbersRecursive(l1?.next||null, l2?.next||null, c));
};

function addTwoNumbersOptimized(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result = new ListNode();
    let curr = result;
    let sum = 0;
    let carry = 0;
    while(l1 || l2 || carry) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        curr.next = new ListNode(sum%10);
        curr = curr.next;
        carry = ~~(sum/10);
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    return result.next;
};

// !tougher inputs
let l1 = createLinkedList([2,4,9]);
let l2 = createLinkedList([5,6,4,9]);
console.log('check');
// expected [7,0,4,0,1]
console.log(addTwoNumbersOptimized(l1, l2));

l1 = createLinkedList([9,9,9,9,9,9,9]);
l2 = createLinkedList([9,9,9,9]);
let temp = true;
let result = addTwoNumbersOptimized(l1, l2);

while(temp) {
    console.log(result?.val)
    result = result?.next||null;
    if(!result) temp=false;
}

// let l1 = createLinkedList([2,4,3]);
// let l2 = createLinkedList([5,6,4]);
// console.log(addTwoNumbers(l1, l2));

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]