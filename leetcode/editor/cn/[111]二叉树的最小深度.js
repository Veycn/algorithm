//给定一个二叉树，找出其最小深度。
//
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
//
// 说明：叶子节点是指没有子节点的节点。
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：2
//
//
// 示例 2：
//
//
//输入：root = [2,null,3,null,4,null,5,null,6]
//输出：5
//
//
//
//
// 提示：
//
//
// 树中节点数的范围在 [0, 10⁵] 内
// -1000 <= Node.val <= 1000
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 671 👎 0


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
 * 终止条件、返回值和递归过程：
 * - 当前节点 root 为空时，说明此处树的高度为 0，0 也是最小值
 * - 当前节点 root 的左子树和右子树都为空时，说明此处树的高度为 1，1 也是最小值
 * - 如果为其他情况，则说明当前节点有值，且需要分别计算其左右子树的最小深度，返回最小深度 +1，+1 表示当前节点存在有 1 个深度
 * 时间复杂度：O(n)，n为树的节点数量
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null){
        return 0
    }
    if (root.left == null && root.right == null){
        return 1
    }

    let res = Number.MAX_SAFE_INTEGER
    if (root.left != null){
        res = Math.min(minDepth(root.left), res)
    }
    if (root.right != null){
        res = Math.min(minDepth(root.right), res)
    }
    // + 1 是因为当前节点存在一个深度
    return res + 1
};
//leetcode submit region end(Prohibit modification and deletion)
