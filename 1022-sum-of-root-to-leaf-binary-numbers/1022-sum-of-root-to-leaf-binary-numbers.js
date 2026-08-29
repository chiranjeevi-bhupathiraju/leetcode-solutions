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
var sumRootToLeaf = function (root) {
    let tot = 0

    function dfs(n,curr) {
        if (!n) return
        curr += n.val

        if (!n.left && !n.right) {
            tot += parseInt(curr, 2)
        }

        dfs(n.left,curr)
        dfs(n.right,curr)

    }

    dfs(root,'')

    return tot
};