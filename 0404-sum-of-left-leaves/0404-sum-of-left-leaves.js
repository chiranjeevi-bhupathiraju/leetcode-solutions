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
var sumOfLeftLeaves = function (root) {
    let s = 0

    function dfs(n, isLeft) {
        if (!n) return n

        if (isLeft && !n.left && !n.right) {
            s += n.val
        }

        dfs(n.left, true)
        dfs(n.right, false)
    }

    dfs(root, false)

    return s
};