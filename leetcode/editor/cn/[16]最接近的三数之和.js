//给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
//
// 返回这三个数的和。
//
// 假定每组输入只存在恰好一个解。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,2,1,-4], target = 1
//输出：2
//解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//
//
// 示例 2：
//
//
//输入：nums = [0,0,0], target = 1
//输出：0
//
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -10⁴ <= target <= 10⁴
//
// Related Topics 数组 双指针 排序 👍 1042 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let res = nums[0] + nums[1] + nums[2], len = nums.length;
    for (let i = 0; i < len; i++) {
        let left = i + 1, right = len - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum === target) {
                return sum
            } else if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            }
        }
    }
    return res
};
// console.log(threeSumClosest([0,0,0], 1))
//leetcode submit region end(Prohibit modification and deletion)
