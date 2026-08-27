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
 * @return {number}
 */
var minDepth = function (root) {
    let minv = Infinity
    function dfs(n, d) {
        if (!n) return

        if (!n.left && !n.right) {
            minv = Math.min(minv, d)
        }

        dfs(n.left, d + 1)
        dfs(n.right, d + 1)


    }
    dfs(root, 1)

    return minv == Infinity ? 0 : minv
};