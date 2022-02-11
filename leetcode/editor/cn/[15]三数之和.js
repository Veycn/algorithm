//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 4290 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSumTarget = function (nums, start, target) {
    // nums = nums.sort((a, b) => a - b)
    let lo = start, hi = nums.length - 1
    const result = []
    while (lo < hi) {
        let left = nums[lo], right = nums[hi]
        let sum = left + right

        if (sum < target) {
            while (lo < hi && nums[lo] === left) lo++;
        } else if (sum > target) {
            while (lo < hi && nums[hi] === right) hi--;
        } else if (sum === target) {
            result.push([nums[lo], nums[hi]])
            while (lo < hi && nums[lo] === left) lo++;
            while (lo < hi && nums[hi] === right) hi--;
        }
    }
    return result
}

var threeSum = function (nums) {
    const size = nums.length, result = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < size; i++) {
        // 将三数之和转换为求解两数之和
        let tuple = twoSumTarget(nums, i + 1, -nums[i])
        // 两数之和可能找出多组符合的数字
        // 于是给每一个组合加入当前的第一个数组 nums[i]
        for (let arr of tuple) {
            arr.push(nums[i])
        }
        result.push(...tuple)
        while (i < size - 1 && nums[i] === nums[i + 1]) i++;
    }
    return result
}
console.log(threeSum([-1,0,1,2,-1,-4]))
//leetcode submit region end(Prohibit modification and deletion)
