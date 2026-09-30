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

function checkTree(root: TreeNode | null): boolean {
    let p = 0
    let q = 0

    function dfs(n, s) {
        if (!n) return

        if (n.left && n.right) {
            p = n.val
        }

        if (!n.left && !n.right) {
            q += n.val
        }

        dfs(n.left, q)
        dfs(n.right, q)


    }
    dfs(root, 0)

    return p == q
};