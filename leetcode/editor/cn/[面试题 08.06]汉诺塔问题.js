//在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只
//能放在更大的盘子上面)。移动圆盘时受到以下限制:
//(1) 每次只能移动一个盘子;
//(2) 盘子只能从柱子顶端滑出移到下一根柱子;
//(3) 盘子只能叠在比它大的盘子上。
//
// 请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。
//
// 你需要原地修改栈。
//
// 示例1:
//
//  输入：A = [2, 1, 0], B = [], C = []
// 输出：C = [2, 1, 0]
//
//
// 示例2:
//
//  输入：A = [1, 0], B = [], C = []
// 输出：C = [1, 0]
//
//
// 提示:
//
//
// A中盘子的数目不大于14个。
//
// Related Topics 递归 数组 👍 128 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
// var hanota = function (A, B, C) {
//     let size = A.length, lists = [A];
//     if (size % 2 === 0) {
//         lists.push(B, C)
//     } else {
//         lists.push(C, B)
//     }
//     let currentIndex = 0, current = null, prev = null, next = null, p1 = 0, p2 = 0;
//     while (C.length < size) {
//         // 最小的圆盘移动到下一个柱子
//         // 找到最小圆盘所在的柱子 Current, 以及下一个柱子 Next
//         //
//         current = lists[currentIndex % 3]
//         next = lists[(currentIndex + 1) % 3]
//         // 移动最小盘子到下一个柱子
//         next.push(current.pop())
//         // 修改当前索引，记录当前最小圆盘所在的索引
//         currentIndex = (currentIndex + 1) % 3
//
//         // 找另外两个柱子
//         prev = lists[(currentIndex + 1) % 3]
//         // 比较另外两个柱子顶部大小
//         p1 = prev.length ? Number.MIN_SAFE_INTEGER : prev[prev.length - 1]
//         p2 = current.length ? Number.MAX_SAFE_INTEGER : current[current.length - 1]
//
//         if (p1 < p2) {
//             current.push(prev.pop())
//         } else if (p2 < p1) {
//             prev.push(current.pop())
//         }
//     }
// };

var hanota = function (A, B, C) {
    movePlate(A.length, A, B, C)
}

var movePlate = function (size, start, auxiliary, target){
    // 当只剩下一个盘子，直接移动这个盘子到第三个柱子即可
    if (size === 1){
        target.push(start.pop())
        return
    }

    // 函数主体功能
    // 1、移动 N - 1 个盘子到中间柱子
    movePlate(size - 1, start, target, auxiliary)
    // 2、移动第 N 个盘子到最后一个盘子
    target.push(start.pop())
    // 3、从中间柱子移动 N - 1 个盘子到目标柱子
    movePlate(size - 1, auxiliary, start, target)

}
//leetcode submit region end(Prohibit modification and deletion)
