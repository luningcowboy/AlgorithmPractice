let LinkedListNode = require('./LinkedListNode.js');
let Comparator = require('../utils/Comparator.js');

class LinkedList{
    constructor(comparator_func){
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(comparator_func);
    }

    prepend(value){
        const node = new LinkedListNode(value,this.head);
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
        return this;
    }
    append(value){
        const node = new LinkedListNode(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }
    delete(value){
        if(!this.head){
            return null;
        }
        let del_node = null;
        while(this.head && this.compare.equal(this.head.value, value)){
            del_node = this.head;
            this.head = this.head.next;
        }
        let cur_node = this.head;
        if(cur_node !== null){
            while(cur_node.next){
                if(this.compare.equal(cur_node.next.value, value)){
                    del_node = cur_node.next;
                    cur_node.next = cur_node.next.next;
                }else{
                    cur_node = cur_node.next;
                }
            }
        }

        if(this.compare.equal(this.tail.value, value)){
            this.tail = cur_node;
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
        const del_tail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return del_tail;
        }

        let cur_node = this.head;
        while(cur_node.next){
            if(!cur_node.next.next){
                cur_node.next = null;
            }else{
                cur_node = cur_node.next;
            }
        }

        this.tail = cur_node;
        return del_tail;
    }
    deleteHead(){
        if(!this.head) return null;
        const del_node = this.head;
        if(this.head.next) this.head = this.head.next;
        else [this.head, this.tail] = [null, null];
        return del_node;
    }
    fromArray(values){
        values.forEach(value=>this.append(value));
        return this;
    }
    toArray(){
        const nodes = [];
        let cur_node = this.head;
        while(cur_node){
            nodes.push(cur_node);
            cur_node = cur_node.next;
        }
        return nodes;
    }
    toString(callback){
        return this.toArray().map(node=>node.toString(callback)).toString();
    }
    reverse(){
        let [cur_node, pre_node, next_node] = [this.head, null, null];
        while(cur_node){
            next_node = cur_node.next;
            cur_node.next = pre_node;
            pre_node = cur_node;
            cur_node = next_node;
        }

        [this.tail, this.head] = [this.head, pre_node];

        return this;
    }
}

module.exports = LinkedList;