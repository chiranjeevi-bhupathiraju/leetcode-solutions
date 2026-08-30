/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isUnivalTree(root: TreeNode | null): boolean {

    let rootValue = root.val

    function dfs(n) {
        if (!n) return true

        if (n.val !== rootValue) {
            return false
        }

        return dfs(n.left) &&
            dfs(n.right)
    }
    return dfs(root)
};