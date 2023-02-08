//!============DSA-LEETCODE============

//^ ----------Two-Sum----------
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
/*
----Example-1----
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
---------------------------------------------------------------------
----Example-2----
Input: nums = [3,2,4], target = 6
Output: [1,2]
---------------------------------------------------------------------
*/
//----Solution----
//----------------Brute Force Method----------------
//We need to create a function that will iterate over each element of the array 
//For that when i will be 0, it must iterate over other elements. Then while i will be 1, it must iterate over other next elements

let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 4, 8, 7], 9));