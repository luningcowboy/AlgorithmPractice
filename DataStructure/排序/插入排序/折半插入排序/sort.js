function sort(arr){
    let len = arr.length;
    for(let i = 1; i < len; ++i){
        let low = 0;
        let high = i - 1;
        let key = arr[i];
        while(low <= high){
            let mid = parseInt((low + high) / 2);
            if(key < arr[mid]) high = mid - 1;
            else low = mid + 1;
        }
        for(let j = i ; j > low ; j--) arr[j] = arr[j - 1];
        arr[low] = key;
    }
}

let arr = [1,2,7,4,5,8,0,6,9,3];
console.log(arr);
sort(arr);
console.log(arr);