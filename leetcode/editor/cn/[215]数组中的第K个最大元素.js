//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
//
//
// 示例 1:
//
//
//输入: [3,2,1,5,6,4] 和 k = 2
//输出: 5
//
//
// 示例 2:
//
//
//输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
//输出: 4
//
//
//
// 提示：
//
//
// 1 <= k <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 1708 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [nums[0]];
    for (let i = 1; i < nums.length; i ++) {
        if (nums[i] >= heap[heap.length - 1]) {
            heap.push(nums[i])
        } else {
            if (heap[0] < nums[i]){
                heap.shift()
                heap.unshift(nums[i])
            }
        }

        if (heap.length > k){
            heap.shift()
        }
    }
    console.log(heap)
    return heap[0];
};
// let a = [-1,2,0]
// let a = [3,1,2,4,5,6]
let a = [2,1]
console.log(findKthLargest(a, 2))
//leetcode submit region end(Prohibit modification and deletion)
