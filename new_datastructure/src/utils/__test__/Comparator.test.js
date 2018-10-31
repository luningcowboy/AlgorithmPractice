import Comparator from '../Comparator';

describe('Comparator',()=>{
  it('default function',()=>{
    const comparator = new Comparator();
    expect(comparator.equal(0,0)).toBe(true);
    expect(comparator.equal(0,1)).toBe(false);
    expect(comparator.equal('a','a')).toBe(true);
  });
});