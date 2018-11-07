let Sort = require('./Sort');

class BubbleSort extends Sort{
    sort(original_array){
        let swappend = false;
        const array = [...original_array];
        for(let i = 1; i < array.length; i += 1){
            swappend = false;
            this.callbacks.visitingCallback(array[i]);
            for(let j = 0; j < array.length - i; j += 1){
                this.callbacks.visitingCallback(array[j]);
                if(this.comparator.lessThan(array[j + 1], array[j])){
                    const tmp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = tmp;
                    swappend = true;
                }
            }
            if(!swappend){
                return array;
            }
        }
        return array;
    }
}

module.exports = BubbleSort;