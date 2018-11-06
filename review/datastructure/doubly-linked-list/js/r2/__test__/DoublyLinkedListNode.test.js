let DoublyLinkedListNode = require('../DoublyLinkedListNode.js');

describe("DoublyLinkedListNode",()=>{
    it("should create list node with value",()=>{
        const node = new DoublyLinkedListNode(1);
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
        expect(node.previous).toBeNull();
    });
    it('should create list node with object as a value',()=>{
        const node_value = {value:1 , key: 'test'};
        const node = new DoublyLinkedListNode(node_value);

        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe('test');
        expect(node.next).toBeNull();
        expect(node.previous).toBeNull();
    });
    it('should link nodes together',()=>{
        const n2 = new DoublyLinkedListNode(2);
        const n1 = new DoublyLinkedListNode(1, n2);
        const n3 = new DoublyLinkedListNode(10, n1, n2);

        expect(n1.next).toBeDefined();
        expect(n1.previous).toBeNull();
        expect(n2.next).toBeNull();
        expect(n2.previous).toBeNull();
        expect(n3.next).toBeDefined();
        expect(n3.previous).toBeDefined();
        expect(n1.value).toBe(1);
        expect(n1.next.value).toBe(2);
        expect(n3.next.value).toBe(1);
        expect(n3.previous.value).toBe(2);
    });
    it('should convert node to string',()=>{
        const node = new DoublyLinkedListNode(1);
        expect(node.toString()).toBe('1');
        node.value = 'string value';
        expect(node.toString()).toBe('string value');
    });
    it('should convert node to string with custom stringifier',()=>{
        const node_value = {value: 1, key: 'test'};
        const node = new DoublyLinkedListNode(node_value);
        const toStringCallback = value=>`value:${value.value},key:${value.key}`;
        expect(node.toString(toStringCallback)).toBe('value:1,key:test');
    });
});