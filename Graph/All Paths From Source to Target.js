/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let result = [];
  const dfs = (node, currentPath) => {
    if (node === graph.length - 1) {
      result.push([...currentPath]);
    }
    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i], [...currentPath, graph[node][i]]);
    }
  };

  dfs(0, [0]);
  return result;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
