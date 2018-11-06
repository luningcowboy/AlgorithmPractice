class Comparator{

    constructor(compare_func){
        this.compare = compare_func || Comparator.defaultCompare;
    }
    static defaultCompare(a, b){
        if(a === b) return 0;
        return a < b ? -1 : 1;
    }
    equal(a, b) {
        return this.compare(a, b) === 0;
    }
    lessThan(a, b){
        return this.compare(a, b) < 0 ;
    }
    greaterThan(a, b){
        return this.compare(a, b) > 0;
    }
    lessThanOrEqual(a, b){
        return this.equal(a, b) || this.lessThan(a, b);
    }
    greaterThanOrEqual(a, b){
        return this.equal(a, b) || this.greaterThan(a, b);
    }
    reverse(){
        const compare_original = this.compare;
        this.compare = (a, b)=>compare_original(b, a);
    }
}

module.exports = Comparator;