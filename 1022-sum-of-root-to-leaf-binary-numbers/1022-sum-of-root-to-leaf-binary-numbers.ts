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

function sumRootToLeaf(root: TreeNode | null): number {
    let sum = 0

    function dfs(n, path) {
        if (!n) return
        path += n.val

        if (!n.left && !n.right) {
            sum += parseInt(path, 2)
        }

        dfs(n.left, path)
        dfs(n.right, path)
    }


    dfs(root, '')

    return sum
};