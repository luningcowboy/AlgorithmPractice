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
    delete(value){
        if(!this.head) return null;
        let del_node = null;
        let cur_node = this.head;
        while(cur_node){
            if(this.compare.equal(cur_node.value, value)){
                del_node = cur_node;
                if(del_node === this.head){
                    this.head = del_node.next;
                    if(this.head){
                        this.head.previous = null;
                    }
                    if(del_node === this.tail){
                        this.tail = null;
                    }
                }
                else if(del_node === this.tail){
                    this.tail = del_node.previous;
                    this.tail.next = null;
                }
                else{
                    const pre_node = del_node.previous;
                    const next_node = del_node.next;
                    pre_node.next = next_node;
                    next_node.previous = pre_node;
                }
            }
            cur_node = cur_node.next;
        }
        return del_node;
    }
    find({value = undefined, callback = undefined}){
        if(!this.head) return null;
        let cur_node = this.head;
        while(cur_node){
            if(callback && callback(cur_node.value)){
                return cur_node;
            }
            if(value !== undefined && this.compare.equal(cur_node.value, value)){
                return cur_node;
            }
            cur_node = cur_node.next;
        }
        return null;
    }
    deleteTail(){
        if(!this.tail) return null;
        let del_tail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return del_tail;
        }

        this.tail = this.tail.previous;
        this.tail.next = null;
        return del_tail;
    }
    deleteHead(){
        if(!this.head) return null;
        let del_head = this.head;
        if(this.head.next){
            this.head = this.head.next;
            this.head.previous = null;
        }
        else{
            this.head = null;
            this.tail = null;
        }
        return del_head;
    }
    toArray(){
        let nodes = [];
        let cur_node = this.head;
        while(cur_node){
            nodes.push(cur_node);
            cur_node = cur_node.next;
        }
        return nodes;
    }
    fromArray(values){
        values.forEach(value=>this.append(value));
        return this;
    }
    toString(callback){
        return this.toArray().map(node=>node.toString(callback)).toString();
    }
    reverse(){
        let cur_node = this.head;
        let pre_node = null;
        let next_node = null;
        while(cur_node){
            next_node = cur_node.next;
            cur_node.next = pre_node;
            pre_node = cur_node;
            cur_node = next_node;
        }
        this.tail = this.head;
        this.head = pre_node;
        return this;
    }
}

module.exports = DoublyLinkedList;