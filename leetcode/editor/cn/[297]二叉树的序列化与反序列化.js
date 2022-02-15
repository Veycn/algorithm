//序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方
//式重构得到原数据。
//
// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串
//反序列化为原始的树结构。
//
// 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的
//方法解决这个问题。
//
//
//
// 示例 1：
//
//
//输入：root = [1,2,3,null,null,4,5]
//输出：[1,2,3,null,null,4,5]
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
//输出：[1,2]
//
//
//
//
// 提示：
//
//
// 树中结点数在范围 [0, 10⁴] 内
// -1000 <= Node.val <= 1000
//
// Related Topics 树 深度优先搜索 广度优先搜索 设计 字符串 二叉树 👍 757 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 * 层序遍历解法
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root == null) return '';
    const res = [], queue = [root]
    // 从根开始逐层遍历节点
    // 将每一层的每一个节点的左右节点放入队列中（不管存在与否）
    // 遍历队列中的每一个节点，如果是null则不再继续push左右节点，序列中push null
    while (queue.length){
        let node = queue.shift()
        if (node == null){
            res.push('null')
            continue;
        }
        res.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
    }
    return res.toString()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function (data) {
    if (!data.length) return null
    const nodes = data.split(',')
    // console.log(nodes)
    // 第一个元素就是 root
    const root = new TreeNode(parseInt(nodes[0]))
    // 队列用来记录父节点， 将root加入队列
    const queue = [root]

    for (let i = 1; i < nodes.length;){
        // 队列中的节点都是父节点
        const parent = queue.shift()

        // 父节点的左子节点
        const left = nodes[i++]
        if (left === 'null'){
            parent.left = null
        }else{
            parent.left = new TreeNode(parseInt(left))
            queue.push(parent.left)
        }

        // 父节点的右子节点
        const right = nodes[i++]
        if (right === 'null'){
            parent.right = null
        }else {
            parent.right = new TreeNode(parseInt(right))
            queue.push(parent.right)
        }
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
//leetcode submit region end(Prohibit modification and deletion)
