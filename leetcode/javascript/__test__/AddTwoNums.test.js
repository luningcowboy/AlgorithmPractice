let addTwoNumbers = require('../AddTwoNums').addTwoNumbers;
let ListNode = require('../AddTwoNums').ListNode;

describe('AddTwoNums',()=>{
    it('test ListNode',()=>{
        const l = new ListNode(2);
        expect(l.val).toBe(2);
        expect(l.next).toBe(null);
    });
    it('',()=>{
        let l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        let l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        let l3 = addTwoNumbers(l1, l2);
        expect(l3.val).toBe(7);
        expect(l3.next.val).toBe(0);
        expect(l3.next.next.val).toBe(8);
        expect(l3.next.next.next).toBe(null);
    });
});