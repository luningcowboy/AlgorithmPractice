let DoublyLinkedListNode = require("./DoublyLinkedListNode.js");
let Comparator = require("./Comparator.js");

class DoublyLinkedList{
    constructor(comparator_func){
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparator_func);
    }
    prepend(value){
        const node = new DoublyLinkedListNode(value, this.head);
        if(this.head) this.head.previous = node;
        this.head = node;
        if(!this.tail) this.tail = node;
        return this;
    }
    append(value){
        const node = new DoublyLinkedListNode(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        return this;
    }
    delete(value){}
    find({value = undefined, callback = undefined}){}
    deleteTail(){}
    deleteHead(){}
    toArray(){}
    fromArray(){}
    toString(){}
    reverse(){}
}

module.exports = DoublyLinkedList;