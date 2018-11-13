let LinkedList = require('../../../common/linked_list/LinkedList');

class Queue{
    constructor(){
        this.linkedList = new LinkedList();
    }
    isEmpty(){
        return !this.linkedList.head;
    }
    peek(){
        if(!this.linkedList.head) return null;
        return this.linkedList.head.value;
    }
    enqueue(value){
        this.linkedList.append(value);
    }
    dequeue(){
        const remove_head = this.linkedList.deleteHead();
        return remove_head ? remove_head.value : null;
    }
    toString(callback){
        return this.linkedList.toString(callback);
    }
}

module.exports = Queue;