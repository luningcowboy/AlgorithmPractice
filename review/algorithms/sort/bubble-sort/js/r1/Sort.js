let Comparator = require('../../../../../datastructure/common/utils/Comparator.js');

class Sort{
    constructor(original_callbacks){
        this.callbacks = Sort.initSortingCallback(original_callbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }
    static initSortingCallback(original_callbacks){
        const callbacks = original_callbacks || {};
        const stub_callback = ()=>{};
        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stub_callback;
        return callbacks;
    }
    sort(){
        throw new Error('sort method must be implemented');
    }
}

module.exports = Sort;