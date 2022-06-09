//给定一个非负整数数组 nums 和一个整数 m ，你需要将这个数组分成 m 个非空的连续子数组。
//
// 设计一个算法使得这 m 个子数组各自和的最大值最小。
//
//
//
// 示例 1：
//
//
//输入：nums = [7,2,5,10,8], m = 2
//输出：18
//解释：
//一共有四种方法将 nums 分割为 2 个子数组。
//其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。
//因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
//
// 示例 2：
//
//
//输入：nums = [1,2,3,4,5], m = 2
//输出：9
//
//
// 示例 3：
//
//
//输入：nums = [1,4,4], m = 3
//输出：4
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 10⁶
// 1 <= m <= min(50, nums.length)
//
// Related Topics 贪心 数组 二分查找 动态规划 👍 700 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let left = 0, right = 0;

    for (let num of nums) {
        if (num > left) {
            left = num;
        }
        right += num;
    }

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let fm = f(nums, mid);
        if (fm > m) {
            left = mid + 1;
        } else if (fm < m) {
            right = mid;
        } else if (fm === m) {
            right = mid;
        }
    }
};

function f(nums, x) {
    let t = 0
    for (let i = 0; i < nums.length;){
        let cap = x;
        while (i<nums.length){
            if (nums[i] > cap) break;
            cap -= nums[i]
            i++
        }
        t++
    }
    return t
}

console.log(splitArray([7,2,5,10,8], 2))

//leetcode submit region end(Prohibit modification and deletion)
