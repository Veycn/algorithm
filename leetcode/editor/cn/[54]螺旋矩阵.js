//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
//
//
//
// 示例 1：
//
//
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
//
//
// 示例 2：
//
//
//输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
//
// Related Topics 数组 矩阵 模拟 👍 1114 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const a = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
var spiralOrder = function (matrix) {
    const result = [];
    const m = matrix.length, n = matrix[0].length;
    let upperBound = 0, bottomBound = m - 1;
    let leftBound = 0, rightBound = n - 1;
    while (result.length < m * n) {
        // 当上边界小于等于下边界的时候，这一行存在，才可以横向遍历
        // 当左边界小于等于右边界的时候，这一列存在，才可以纵向遍历
        if (upperBound <= bottomBound) {
            for (let i = leftBound; i <= rightBound; i++) {
                result.push(matrix[upperBound][i])
            }
            upperBound++;
        }
        if (leftBound <= rightBound) {
            for (let i = upperBound; i <= bottomBound; i++) {
                result.push(matrix[i][rightBound])
            }
            rightBound--;
        }
        if (upperBound <= bottomBound) {
            for (let i = rightBound; i >= leftBound; i--) {
                result.push(matrix[bottomBound][i]);
            }
            bottomBound--;
        }
        if (leftBound <= rightBound) {
            for (let i = bottomBound; i >= upperBound; i--) {
                result.push(matrix[i][leftBound]);
            }
            leftBound++;
        }
    }
    return result;
};
console.log(spiralOrder(a))
//leetcode submit region end(Prohibit modification and deletion)
