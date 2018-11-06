let LinkedList = require('../../../common/linked_list/LinkedList.js');
class Stack{
    constructor(){
        this.linkedList = new LinkedList();
    }
    isEmpty(){
        return !this.linkedList.tail;
    }
    peek(){
        if(this.isEmpty()) return null;
        return this.linkedList.tail.value;
    }
    push(value){
        this.linkedList.append(value);
    }
    pop(){
        const remove_tail = this.linkedList.deleteTail();
        return remove_tail ? remove_tail.value : null;
    }
    toArray(){
        return this.linkedList.toArray().map(linkedListNode=>linkedListNode.value).reverse();
    }
    toString(){
        return this.linkedList.toString();
    }
}

module.exports = Stack;