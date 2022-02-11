//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
//
//
// 示例 2：
//
//
//输入：nums = [3,2,4], target = 6
//输出：[1,2]
//
//
// 示例 3：
//
//
//输入：nums = [3,3], target = 6
//输出：[0,1]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 10⁴
// -10⁹ <= nums[i] <= 10⁹
// -10⁹ <= target <= 10⁹
// 只会存在一个有效答案
//
//
// 进阶：你可以想出一个时间复杂度小于 O(n²) 的算法吗？
// Related Topics 数组 哈希表 👍 13150 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (var i = 0, len = nums.length; i < len; i++){
//         var need = target - nums[i];
//         for (var j = 0; j < len; j++){
//             if (need === nums[j] && j !== i){
//                 return [i, j]
//             }
//         }
//     }
// };

/**
 * 核心思想就是把遍历过的元素值和下标用 map 存起来
 * 在遍历的过程中，用 target - x（当前元素）
 * 在存储的 map 中查找是否存在 target - x 这个值
 * 如果有就证明这两个数已经找到了
 * @param nums
 * @param target
 * @returns {[any,number]}
 */
var twoSum_ = function (nums, target) {
    // nums = [1,2,3,4,5], target = 9
    var map = new Map()
    for (var i = 0, len = nums.length; i < len; ++i) {
        // { 1 => 0, 2 => 1, 3 => 2, 4 => 3}
        // 当 num[i] = 5 的时候， target - nums[i] = 4
        // 4 的 下标 为 3，此时就找到了 加起来为 target 的两个数
        // 第一个数的下标在 map 中， 第二个就是当前 i
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }

        // 为每一个元素建立 map
        // { 1 => 0, 2 => 1, 3 => 2, 4 => 3}
        map.set(nums[i], i)
    }
};

/**
 * 双指针解法
 * 对原题有一些魔改，双指针依赖排序
 * 所以返回的是元素，不是下标
 */

var twoSum__ = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let lo = 0, hi = nums.length - 1
    while (lo < hi) {
        let sum = nums[lo] + nums[hi]
        if (sum > target) {
            hi--
        } else if (sum < target) {
            lo++
        } else if (sum === target) {
            return [nums[lo], nums[hi]]
        }
    }
    return []
}


/**
 * 再次魔改：nums 中存在多对和为 target，返回所有和为target 的元素对
 */
var twoSum___ = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let lo = 0, hi = nums.length - 1
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
// console.log(twoSum([2,2,1,1,1,3,3], 4))

/**
 * 用魔改之后的两数之和解决三树之和
 * - nums中每一个数字都可能是target的组成数字之一
 * - 遍历 nums ，针对每一个 nums[i]
 * - 在剩下的nums 中，找到一个两数之和 等于 target - nums[i]
 * - 需要对 twoSum 修改，从指定索引开始
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

var threeSum = function (nums, target) {
    const size = nums.length, result = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < size; i++) {
        // 将三数之和转换为求解两数之和
        let tuple = twoSumTarget(nums, i + 1, target - nums[i])
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

console.log(threeSum([1, 1, 1, 2, 3, 4, 0, 2], 6))
//leetcode submit region end(Prohibit modification and deletion)
