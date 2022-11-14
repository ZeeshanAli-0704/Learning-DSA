const getbottomView = function (root) {
  let map = new Map();
  let ans = [];
  // Function to return a list containing the bottom view of the given tree.
  const traversal = (root) => {
    if (root == null) return ans;

    let q = [];
    root.hd = 0;
    q.push(root);
    while (q.length) {
      let temp = q.shift();
      let hd = temp.hd;
      map.set(hd, temp.data);
      if (temp.left != null) {
        temp.left.hd = hd - 1;
        q.push(temp.left);
      }
      if (temp.right != null) {
        temp.right.hd = hd + 1;
        q.push(temp.right);
      }
    }
  };

  traversal(root);
  // sort by key
  const mapSort3 = new Map([...map.entries()].sort());

  for (let [key, value] of mapSort3) {
    ans.push(value);
  }
  return ans;
};
