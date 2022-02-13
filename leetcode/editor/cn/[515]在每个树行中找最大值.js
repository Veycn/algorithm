//给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
//
//
//
// 示例1：
//
//
//
//
//输入: root = [1,3,2,5,3,null,9]
//输出: [1,3,9]
//
//
// 示例2：
//
//
//输入: root = [1,2,3]
//输出: [1,3]
//
//
//
//
// 提示：
//
//
// 二叉树的节点个数的范围是 [0,10⁴]
// -2³¹ <= Node.val <= 2³¹ - 1
//
//
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 168 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (root == null) return []
    const queue = [root], result = []
    while (queue.length) {
        let size = queue.length, max = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node.val > max){
                max = node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(max)
    }
    return result
};
//leetcode submit region end(Prohibit modification and deletion)
