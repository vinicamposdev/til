class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function findClosestValueInBst(tree: BST, target: number) {
      return findClosestValueInBstRecursive(tree, target, tree.value);
  }
  export function findClosestValueInBstRecursive(tree: BST | null, target: number, closest: number): number {
      if (tree === null) return closest;
      
      if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
          closest = tree.value
      }
      
      if (target < tree.value) {
          return findClosestValueInBstRecursive(tree.left, target, closest);
      }
      
    if (target > tree.value) {
          return findClosestValueInBstRecursive(tree.right, target, closest);
      }
    return closest;
  }
   