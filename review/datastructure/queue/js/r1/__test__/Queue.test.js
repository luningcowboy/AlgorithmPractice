let Queue = require('../Queue');

describe('Queue',()=>{
    it('should create empty queue',()=>{
        const queue = new Queue();
        expect(queue).not.toBeNull();
        expect(queue.linkedList).not.toBeNull();
    });
});