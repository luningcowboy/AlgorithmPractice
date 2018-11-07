/** 
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/
let twoSum = (nums, target)=>{
    for(let i = 0; i < nums.length; ++i){
        for(let j = i + 1; j < nums.length; ++j){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};

// 这种方案更快
let twoSum2 = (nums, target)=>{
    let obj = {};
    for(let i = 0; i < nums.length; ++i){
        const item = nums[i];
        if(obj[item] >= 0) return [obj[item], i];
        else obj[target - item] = i;
    }
};

module.exports = twoSum2;