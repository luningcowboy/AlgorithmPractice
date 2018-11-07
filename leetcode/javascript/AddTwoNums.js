/**
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。
将两数相加返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。 
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let ret = new ListNode(0);
    let cc = ret;
    while(c1 || c2){
        let v = c1.val + c2.val + cc.val;
        cc.val = v >= 10 ? v - 10 : v;
        if(c1.next || c2.next || v >= 10){
            cc.next = new ListNode(v >= 10 ? 1 : 0);
            cc = cc.next;
            c1 = c1.next;
            c2 = c2.next;
        }else{
            break;
        } 
    }
    return ret;
};

module.exports = {
    ListNode,
    addTwoNumbers
}