// es6
class Node{
    constructor(value = 0, next = null){
        this.value = value;
        this.next = next;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
    }
    static create(){
        let ret = new Stack();
        ret.top = new Node();
        if(!ret || !ret.top){
            console.log('creat failed');
            return null;
        }
        ret.bottom = ret.top;
        ret.bottom.next = null;
        return ret;
    }
    isEmpty(){
        return this.top === this.bottom;
    }
    push(value){
        let node = new Node(value);
        if(!node) {
            console.log('push failed');
            return null;
        }
        node.next = this.top;
        this.top = node;
        return node;
    }
    pop(){
        if(this.isEmpty()) return null;
        let tmp = this.top;
        this.top = tmp.next;
        return tmp;
    }
    clear(){
        if(this.isEmpty()) return;
        let tmp_top = this.top;
        let tmp_next = null;
        while(tmp_top !== this.bottom){
            tmp_next = tmp_top.next();
            tmp_top = tmp_next;
        }
        this.top = this.bottom;
    }
    outPut(){
        let cur = this.top;
        while(cur !== this.bottom){
            console.log(`${cur.data} `);
            cur = cur.next;
        }
    }
}