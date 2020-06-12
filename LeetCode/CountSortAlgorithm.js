// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
//     Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
//     Note: You are not suppose to use the library's sort function for this problem.

//
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let min = Math.min(...nums);

    let max = Math.max(...nums);
    let i ;
    let z = 0 ;
    const count = [] ;

    for (i = min; i <= max; i++) {
        count[i] = 0
    }

    for (i=0; i < nums.length; i++) {
        count[nums[i]]++
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            nums[z++] = i;
        }
    }
    return nums;
};
