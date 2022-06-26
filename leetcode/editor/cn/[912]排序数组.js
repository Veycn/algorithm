//给你一个整数数组 nums，请你将该数组升序排列。
//
//
//
//
//
//
// 示例 1：
//
//
//输入：nums = [5,2,3,1]
//输出：[1,2,3,5]
//
//
// 示例 2：
//
//
//输入：nums = [5,1,1,2,0,0]
//输出：[0,0,1,1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 5 * 10⁴
// -5 * 10⁴ <= nums[i] <= 5 * 10⁴
//
// Related Topics 数组 分治 桶排序 计数排序 基数排序 排序 堆（优先队列） 归并排序 👍 592 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

function quickSort(nums, left, right) {
    if (left >= right) return;

    let index = partition(nums, left, right);

    quickSort(nums, left, index - 1);
    quickSort(nums, index + 1, right);
}

function partition(nums, l, r) {
    // let random = Math.floor(Math.random() * (r - l) + l);
    // swap(nums, l, random);
    let i = l, j = r;
    while (i < j) {
        while (i < j && nums[j] >= nums[l]) {
            j--
        }
        while (i < j && nums[i] <= nums[l]) {
            i++
        }
        swap(nums, i, j)
    }
    swap(nums, i, l);
    return i;
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

let a = [1, 5, 2, 6, 8, 4, 9, 3];

quickSort(a, 0, a.length - 1);

console.log(a)

//leetcode submit region end(Prohibit modification and deletion)
