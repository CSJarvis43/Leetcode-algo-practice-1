var twoSum = function(nums, target) {
    let result = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in result) {
            return [i, result[complement]];
        }
        
        result[nums[i]] = i;
    }
};