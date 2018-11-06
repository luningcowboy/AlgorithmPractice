let Stack = require('../Stack');
describe('Stack',()=>{
    it('should create empty stack',()=>{
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.linkedList).not.toBeNull();
    });
    it('should stack data to stack',()=>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.toString()).toBe('1,2');
    });
    it('should check if stack is empty',()=>{
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
    it('should pop data from stack',()=>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });
    it('should be possible to push/pop objects',()=>{
        const stack = new Stack();
        stack.push({key:'key1',value:'test1'});
        stack.push({key:'key2',value:'test2'});
        const stringifier = value=>`${value.key}:${value.value}`;
        expect(stack.toString(stringifier)).toBe('key1:test1,key2:test2');
        expect(stack.pop().value).toBe('test2');
        expect(stack.pop().value).toBe('test1');
        expect(stack.isEmpty()).toBe(true);
    });
    it('should be possible to convert stack to array',()=>{
        const stack = new Stack();
        expect(stack.peek()).toBeNull();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.toArray()).toEqual([3,2,1]);
    });
});