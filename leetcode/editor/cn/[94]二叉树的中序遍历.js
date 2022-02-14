//给定一个二叉树的根节点 root ，返回它的 中序 遍历。
//
//
//
// 示例 1：
//
//
//输入：root = [1,null,2,3]
//输出：[1,3,2]
//
//
// 示例 2：
//
//
//输入：root = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：root = [1]
//输出：[1]
//
//
// 示例 4：
//
//
//输入：root = [1,2]
//输出：[2,1]
//
//
// 示例 5：
//
//
//输入：root = [1,null,2]
//输出：[1,2]
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//
//
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树 深度优先搜索 二叉树 👍 1262 👎 0


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
 * 迭代法中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var _inorderTraversal = function (root) {
    let res = [], stack = []
    while (root != null || stack.length > 0) {
        if (root != null) {
            // 一直往树的左边走，直到到达最左边的叶子节点
            // 将过程中经历的每一个节点放入栈中
            // 完成之后 root 为 null，stack 不为空条件成立进入循环，走入 else 分支
            stack.push(root)
            root = root.left
        } else {
            // 取出栈顶节点，
            let node = stack.pop()
            // 加入结果序列
            res.push(node.val)
            // 访问右侧节点
            root = node.right
        }
    }
    return res
};


/**
 * 递归中序遍历
 */

var inorderTraversal = function (root) {
    const res = []
    inorder(root, res)
    return res
}

function inorder(root, res){
    if (root == null){
        return
    }
    inorder(root.left, res)
    res.push(root.val)
    inorder(root.right, res)
}


//leetcode submit region end(Prohibit modification and deletion)
