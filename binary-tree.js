/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function minHelper(node){
      // if there is nothing in the node we return 0
      if(node === null){
        return 0
      }
      // basecase to find the leaf node
      if(node.left === null && node.right === null){
        return 1
      }
      // if the left node is empty then we recurse the fucntion on the right side and add 1
      // recursing the minDepth fucntion set a new "root" (not technically root) node to start the process with a new sub tree
      if(node.left === null){
        return minHelper(node.right) +1
      }
      // if the right node is empty then we recurse the fucntion on the left side and add 1
      if(node.right === null){
        return minHelper(node.left) +1
      }
      // then it will use Math.min to determine depth between right and left sub trees and adds 1 for the current node, 
      return (Math.min(minHelper(node.right), minHelper(node.left)) +1)
    }
    return minHelper(this.root)

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function maxHelper(node){
      if(node === null){
        return 0
      }
      if(node.left === null && node.right === null){
        return 1
      }
      if(node.left === null){
        return maxHelper(node.right) +1
      }
       if(node.right === null){
        return maxHelper(node.left) +1
      }
      return (Math.max(maxHelper(node.right), maxHelper(node.left)) +1)
    }
    return maxHelper(this.root)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let maxCounter = 0

    function sumHelper(node){
      if(node === null){
        return 0
      }
      let leftCounter = sumHelper(node.left)
      let rightCounter = sumHelper(node.right)

      maxCounter = Math.max(maxCounter, (node.val + leftCounter + rightCounter))
      return Math.max(0, leftCounter + node.val, rightCounter + node.val )

    }
    sumHelper(this.root)
    return maxCounter
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    console.log(lowerBound, "LOEWR VAL")
    if(!this.root){
      return null
    }

    let queue = [this.root]
    let aboveLower = []

    while(queue.length){
      let curr = queue.shift()
  
      if(curr.val > lowerBound){
        aboveLower.push(curr.val)
        console.log(aboveLower, "ABOVE LOWER")
      }

      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
      
    }
    if (aboveLower.length === 0) {
      return null;
      
    } else {
      return Math.min(...aboveLower);
    }
  
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
