import LinkedListNode from './LinkedListNode';
import Comparator from '../utils/Comparator';
/**
 * @class
 */
export default class LinkdeList{
    /**
     * 
     * @param {Function} comparatorFunction 
     */
    constructor(comparatorFunction){
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }
    
    /**
     * 在头部添加 值为value的节点
     * @param {*} value 
     * @return {LinkdeList}
     */
    prepend(value){
        let node = new LinkedListNode(value, this.head);
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
        return this;
    }
    
    /**
     * 在尾部添加
     * @param {*} value 
     * @return {LinkdeList}
     */
    append(value){
        let node = new LinkedListNode(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }
    
    /**
     * 删除值为value的节点
     * @param {*} value 
     * @return {LinkedListNode}
     */
    delete(value){
        if(!this.head) return null;

        let delete_node = null;
        while(this.head && this.compare.equal(this.head.value, value)){
            delete_node = this.head;
            this.head = this.head.next;
        }

        let current_node = this.head;
        if(current_node !== null){
            while(current_node.next){
                if(this.compare.equal(current_node.next.value, value)){
                    delete_node = current_node.next;
                    current_node.next = current_node.next.next;
                }
                else{
                    current_node = current_node.next;
                }
            }
        }

        if(this.compare.equal(this.tail.value, value)){
            this.tail = current_node;
        }

        return delete_node;
    }
    /**
     * 查找指定节点
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {Function} findParams.callback
     * @return {LinkedListNode}
     */
    find({value = undefined, callback = undefined}){
        if(!this.head) return null;

        let current_node = this.head;
        while(current_node){
            if(callback && callback(current_node.value)){
                return current_node;
            }

            if(value !== undefined && this.compare.equal(current_node.value, value)){
                return current_node;
            }

            current_node = current_node.next;
        }
        return null;
    }

    /**
     * 删除尾部节点
     * @return {LinkedListNode}
     */
    deleteTail(){
        const delete_tail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return delete_tail;
        }

        let current_node = this.head;
        while(current_node.next){
            if(!current_node.next){
                current_node.next = null;
            }
            else{
                current_node = current_node.next;
            }
        }

        this.tail = current_node;
        return delete_tail;
    }

    /**
     * 删除头部节点
     * @return {LinkedListNode}
     */
    deleteHead(){
        if(!this.head) return null;

        const delete_head = this.head;

        if(this.head.next) this.head = this.head.next;
        else [this.head, this.tail] = [null, null];

        return delete_head;
    }

    /**
     * 添加数组
     * @param {*[]} values - 需要转换为linkedlist的数组
     * @return {LinkdeList}
     */
    fromArray(values){
        values.forEach(value => this.append(value));
        return this;
    }

    /**
     * 转换为数组
     * @return {LinkedListNode[]}
     */
    toArray(){
        const nodes = [];
        let current_node = this.head;
        while(current_node){
            nodes.push(current_node);
            current_node = current_node.next;
        }
        return nodes;
    }

    /**
     * 
     * @param {Function} callback 
     * @return {String}
     */
    toString(callback){
        return this.toArray().map(node=>node.toString(callback)).toString();
    }

    /**
     * 反转
     * @return {LinkdeList}
     */
    reverse(){
        let current_node = this.head;
        let prev_node = null;
        let next_node = null;

        while(current_node){
            next_node = current_node.next;
            current_node.next = prev_node;

            prev_node = current_node;
            current_node = next_node;
        }

        this.tail = this.head;
        this.head = prev_node;

        return this;
    }

}