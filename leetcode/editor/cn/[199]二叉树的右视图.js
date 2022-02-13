//给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
//
//
//
// 示例 1:
//
//
//
//
//输入: [1,2,3,null,5,null,4]
//输出: [1,3,4]
//
//
// 示例 2:
//
//
//输入: [1,null,3]
//输出: [1,3]
//
//
// 示例 3:
//
//
//输入: []
//输出: []
//
//
//
//
// 提示:
//
//
// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 618 👎 0


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
var _rightSideView = function(root) {
    if (root == null) {
        return []
    }
    const queue = [root], result = []
    while (queue.length){
        let size = queue.length, arr = []
        while (size > 0) {
            root = queue.shift()
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
            size--
            arr.push(root.val)
        }
        result.push(arr)
    }
    return result.map(arr => arr.pop())
};

/**
 * 这里套用的是层序遍历代码模板，层序遍历会用数组存储这一层所有子节点(不关心索引)
 * 这里不需要这一层的节点，只需要最后一个，需要关心当前遍历的是不是最后一个节点，需要索引（也可以判断size = 1）
 * @param root
 * @returns {any[]|*[]}
 */
var rightSideView = function(root) {
    if (root == null) {
        return []
    }
    const queue = [root], result = []
    while (queue.length){
        let size = queue.length
        while (size > 0) {
            root = queue.shift()
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
            if (size === 1){
                result.push(root.val)
            }
            size--
        }
    }
    return result
};



//leetcode submit region end(Prohibit modification and deletion)
