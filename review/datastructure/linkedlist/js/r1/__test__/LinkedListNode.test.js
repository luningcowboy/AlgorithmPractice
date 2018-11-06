let LinkedListNode = require('../LinkedListNode.js');

describe('LinkedListNode test',()=>{
    it('test new',()=>{
        const node = new LinkedListNode(0);
        expect(node.next).toBe(null);
        expect(node.value).toBe(0);
    });
    it('test toString', ()=>{
        const node = new LinkedListNode(10);
        expect(node.toString()).toBe('10');
        expect(node.toString(str=>`v:${str}`)).toBe('v:10');
    });
});