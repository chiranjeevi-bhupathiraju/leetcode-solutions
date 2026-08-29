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
 * @return {TreeNode}
 */
var increasingBST = function (root) {

    let dummy = new TreeNode(0);
    let curr = dummy;

    function dfs(n) {
        if (!n) return

        dfs(n.left)

        curr.right = new TreeNode(n.val);
        curr = curr.right

        dfs(n.right)

    }

    dfs(root)

    return dummy.right
};