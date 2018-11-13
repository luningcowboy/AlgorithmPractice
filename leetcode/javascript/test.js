let addTwoNumbers = require('./AddTwoNums').addTwoNumbers;
let ListNode = require('./AddTwoNums').ListNode;

let l1 = new ListNode(1);
l1.next = new ListNode(8);
let l2 = new ListNode(0);
let l3 = addTwoNumbers(l1, l2);
console.log(l3.val, l3.next);