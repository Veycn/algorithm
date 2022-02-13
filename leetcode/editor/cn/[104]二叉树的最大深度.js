//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例：
//给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1107 👎 0


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
 * 广度优先遍历 BFS
 * 思路：
 * 1、在遍历每一层的时候将每一个节点的左右子节点放入队列
 * 2、依次遍历队列中的每一个节点（重复 1 操作），当队列为空时，这一层遍历完毕，深度+1，
 * 3、当队列为空的时候，遍历结束
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0
    }
    let depth = 0, queue = [root];
    while (queue.length > 0) {
        // 获取本层节点的个数
        let size = queue.length
        while(size > 0){
            // 依次拿到每一个节点
            root = queue.shift();
            // 判断左右节点是否存在，存在则放入队列
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
            // 当前节点遍历完成，size - 1
            size--
        }
        // 本层遍历完成 size++
        depth++
    }
    return depth
};
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
//
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// maxDepth(root)



//leetcode submit region end(Prohibit modification and deletion)
