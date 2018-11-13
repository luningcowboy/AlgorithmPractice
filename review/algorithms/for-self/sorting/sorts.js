
//https://tool.lu/coderunner/
// 冒泡排序
function bubble_sort(values){
    for(let i = 0; i < values.length; ++i){
        for(let j = i + 1; j < values.length; ++j){
            let v1 = values[i];
			let v2 = values[j];
            if(v1 > v2) {
				values[i] = v2;
				values[j] = v1;
				continue;
			}
        }
    }
}
// 选择排序
function selection_sort(values){
    let min = 0;
    for(let i = 0; i < values.length; ++i){
        min = i;
        for(let j = i + 1; j < values.length; ++j){
            if(values[min] > values[j]){
                min = j;
            }
        }
        if(min !== i){
            [values[min], values[i]] = [values[i], values[min]];
        }
    }
}

// 插入排序
function insert_sort(values){
    for(let i = 0; i < values.length; ++i){
        for(let j = i; j > 0; --j){
            if(values[j] < values[j - 1]){
                [values[j], values[j - 1]] = [values[j - 1], values[j]];
            }
        }
    }
}

// 堆排序
function max_heapify(values, start, end){
    let dad = start;
    let son = dad * 2 + 1;
    while(son <= end){
        if(son + 1 < end && values[son] < values[son + 1]){
            son++;
        }
        if(values[dad] > values[son]) return;
        else{
            [values[dad],values[son]] = [values[son],values[dad]];
            dad = son;
            son = dad * 2 + 1;
        }
    }
}
function heap_sort(values){
    let len = values.length;
    for(let i = parseInt(len / 2 - 1); i >= 0; --i){
        max_heapify(values, i, len - 1);
    }
    for(let i = len - 1; i > 0; --i){
        [values[0], values[i]] = [values[i], values[0]];
        max_heapify(values, 0, i - 1);
    }
}

// 归并排序
function merge(left, right){
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}
function merge_sort(items){
    if(items.length === 1){
        return items;
    }
    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);
    return merge(merge_sort(left),merge_sort(right));
}
// 快速排序
function quick_sort(values){
    function sort(prev, numsize){
        let nonius = prev;
        let j = numsize - 1;
        let flag = values[prev];
        if((numsize - prev) > 1){
            while(nonius < j){
                for(; nonius < j; j--){
                    if(values[j] < flag){
                        values[nonius++] = values[j];
                        break;
                    }
                }
                for(; nonius < j; nonius++){
                    if(values[nonius] > flag){
                        values[j--] = values[nonius];
                        break;
                    }
                }
            }
            values[nonius] = flag;
            sort(0, nonius);
            sort(nonius + 1, numsize);
        }
    }
    sort(0, values.length);
    return values;
}

// 鸡尾酒排序 cocktailSort
function cocktail_sort(values){
    let size = values.length;
    let sign = 1;
    for(let i = 0; i < size; ++i){
        if(sign){
            sign = 0;
            for(let j = i; j < size - 1 - i; ++j){
                if(values[j] > values[j + 1]){
                    [values[j], values[j + 1]] = [values[j + 1], values[j]];
                }
            }
            for(let j = size - 2 - i; j > i; --j){
                if(values[j] < values[j - 1]){
                    [values[j], values[j - 1]] = [values[j - 1], values[j]];
                    sign = 1;
                }
            }
        }
        else{
            break;
        }
    }
    return values;
}

let arr = [1,3,2,4,6,1,3,5,9,2];
//bubble_sort(arr);
let ret = cocktail_sort(arr);
console.log(arr, ret);
