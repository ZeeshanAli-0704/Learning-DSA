/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const graph = getAdjList(edges);
    const pathExists = checkIfPathExists(graph, source, destination, n);
    return pathExists;
};

const getAdjList = (edges) => {
    const graph = new Map();

    // create our adjacency list
    edges.forEach(([a, b]) => {
        if (!graph.has(a)) {
            graph.set(a, []);
        }
        if (!graph.has(b)) {
            graph.set(b, []);
        }
        graph.get(a).push(b);
        graph.get(b).push(a);
    });

    return graph;
};

const checkIfPathExists = (graph, source, destination, n) => {
    // prevent revisiting nodes
    const visited = new Array(n);
    const queue = [source];
    while (queue.length > 0) {
        const node = queue.shift(); // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
        if (node === destination) {
            return true;
        }
        if (!visited[node]) {
            visited[node] = true;
            graph.get(node).forEach((neighbor) => {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            });
        }

        
    }
    return false;
};
console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9));