import LinkedList from '../LinkedList';

describe('LinkedList test',()=>{
    it('prepend',()=>{
        const list = new LinkedList();
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.prepend(10).head.value).toBe(10);
        expect(list.tail).toBe(list.head);
        expect(list.head.toString()).toBe('10');
        expect(list.tail.toString()).toBe('10');
    });
    it('append',()=>{
        const list = new LinkedList();
        expect(list.append(10).tail.value).toBe(10);
        expect(list.tail).toBe(list.head);
    });
    it('delete',()=>{
        const list = new LinkedList();

        expect(list.delete(5)).toBeNull();

        list.append(1);
        list.append(1);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(3);
        list.append(3);
        list.append(4);
        list.append(5);

        expect(list.head.toString()).toBe('1');
        expect(list.tail.toString()).toBe('5');

        const del_node_1 = list.delete(3);
        expect(del_node_1.value).toBe(3);

        expect(list.toString()).toBe('1,1,1,2,4,5');

        const del_node_2 = list.delete(1);
        expect(del_node_2.value).toBe(1);
        expect(list.toString()).toBe('2,4,5');

        list.delete(2);
        expect(list.toString()).toBe('4,5');

        list.delete(4);
        expect(list.toString()).toBe('5');

        list.delete(5);
        expect(list.toString()).toBe('');
    });

    it('fromArray',()=>{
        const list = new LinkedList();
        list.fromArray([1,1,2,3,4,5,1]);
        expect(list.toString()).toBe('1,1,2,3,4,5,1');

        list.delete(1);
        expect(list.toString()).toBe('2,3,4,5');
    });
});