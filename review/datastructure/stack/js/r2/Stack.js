let LinkedList = require('../../../common/linked_list/LinkedList');

class Stack{
    constructor(){
        this.linkedList = new LinkedList();
    }
    isEmpty(){
        return !this.linkedList.tail;
    }
    peek(){
        return this.isEmpty() ? null : this.linkedList.tail.value;
    }
    push(value){
        this.linkedList.append(value);
    }
    pop(){
        const del_tail = this.linkedList.deleteTail();
        return del_tail ? del_tail.value : null;
    }
    toArray(){
        return this.linkedList.toArray().map(value=>value.value).reverse();
    }
    toString(callback){
        return this.linkedList.toString(callback);
    }
}

module.exports = Stack;