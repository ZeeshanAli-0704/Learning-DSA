const getNoOfConnectedComponent = (n, values) => {
  let edges = [];
  for (let i = 0; i < n; i++) {
    edges.push([]);
  }

  const addEdge = (src, dest) => {
    // Add an edge from src to dest.
    edges[src].push(dest);
    // Since graph is undirected, add an edge from dest
    edges[dest].push(src);
  };

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    addEdge(value[0], value[1]);
  }
  let visited = Array(n).fill(false);
  let count = 0;

  const callDFS = (node, visited) => {
    visited[node] = true;
    for (let i = 0; i < edges[node].length; i++) {
      if (!visited[edges[node][i]]) {
        callDFS(edges[node][i], visited);
      }
    }
  };

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      count++;
      callDFS(i, visited);
    }
  }

  return count;
};

console.log(
  getNoOfConnectedComponent(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);

console.log(
  getNoOfConnectedComponent(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
