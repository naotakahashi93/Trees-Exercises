/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }

    let total = 0
    total += this.root.val

    function sumHelper(node){
      for (let child of node.children){
        // console.log(child.val, "child in loop")
        total += child.val
        if(node.children.length > 0){
          // recurse the same fucntion with the child that has children
          sumHelper(child)
        }
      }
    }
    sumHelper(this.root)
    return total
    }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0
    }
    let stack = [this.root]
    let counter = 0

    while(stack.length){
      let curr = stack.pop()
      // console.log(curr, "CURRRRRR")

      if(curr.val % 2 === 0){
        counter++
      }
      for(let child of curr.children){
        stack.push(child)
      }
    }
    return counter

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0
    }

    let stack = [this.root]
    let counter = 0

    while(stack.length){
      let curr = stack.pop()

      if(curr.val > lowerBound){
        counter++;
      }
      for(let child of curr.children){
        stack.push(child)
      }
    }
    return counter
  }
}

module.exports = { Tree, TreeNode };
