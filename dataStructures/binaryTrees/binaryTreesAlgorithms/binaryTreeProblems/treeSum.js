//? Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

//? https://structy.net/problems/tree-sum


class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

//! Solution:1
//* Using Depth first reversal(recursion).

const treeSum = (root) => {
    if(root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right); 
}

//! Solution:2 
//* Using Breadth first reversal.

const treeSum2 = (root) => {
    if(root === null) return 0;
    let sum = 0;
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        sum += current.val;
        if(current.left !== null)queue.push(current.left);
        if(current.right !== null)queue.push(current.right);
    }
    return sum;
}

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log("solution 1: " + treeSum(a)); // -> 10
console.log("solution 2: " + treeSum2(a)); // -> 10