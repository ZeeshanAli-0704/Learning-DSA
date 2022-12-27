// Shortest path in an unweighted graph
class Graph {
  // Constructor
  constructor(v, s, d) {
    this.V = v;
    this.source = s;
    this.destination = d;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
    // Mark all the vertices as not visited(By default false
    this.visited = new Array(v);
    for (let i = 0; i < this.V; i++) this.visited[i] = false;

    this.parent = new Array(v);
    for (let i = 0; i < this.V; i++) this.parent[i] = false;
  }

  // Function to add an edge into the graph
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  // prints BFS traversal from a given source s
  BFS() {
    let queue = [];

    // Mark the current node as visited and enqueue it
    this.visited[this.source] = true;
    this.parent[this.source] = -1;
    queue.push(this.source);

    while (queue.length > 0) {
      // Dequeue a vertex from queue and print it
      let s = queue[0];

      queue.shift();

      // Get all adjacent vertices of the dequeued
      // vertex s. If a adjacent has not been visited,
      // then mark it visited and enqueue it
      this.adj[s].forEach((adjacent, i) => {
        if (!this.visited[adjacent]) {
          this.visited[adjacent] = true;
          this.parent[adjacent] = s;
          queue.push(adjacent);
        }
      });
    }
  }

  getDistance() {
    let answere = [this.destination];
    let current = this.destination;
    while (current != this.source) {
      current = this.parent[current];
      answere.push(current);
    }
    return answere;
  }
}

// Create a graph given in the above diagram
graphInstance = new Graph(8, 0, 7);
graphInstance.addEdge(0, 1);
graphInstance.addEdge(0, 3);
graphInstance.addEdge(1, 2);
graphInstance.addEdge(3, 4);
graphInstance.addEdge(3, 7);
graphInstance.addEdge(4, 5);
graphInstance.addEdge(4, 6);
graphInstance.addEdge(4, 7);
graphInstance.addEdge(5, 6);
graphInstance.addEdge(6, 7);

console.log(
  "Following is Breadth First Traversal " + "(starting from vertex 2)"
);

graphInstance.BFS();
console.log(graphInstance.getDistance()?.reverse());

graphInstance = new Graph(8, 2, 6);
graphInstance.addEdge(0, 1);
graphInstance.addEdge(0, 3);
graphInstance.addEdge(1, 2);
graphInstance.addEdge(3, 4);
graphInstance.addEdge(3, 7);
graphInstance.addEdge(4, 5);
graphInstance.addEdge(4, 6);
graphInstance.addEdge(4, 7);
graphInstance.addEdge(5, 6);
graphInstance.addEdge(6, 7);

console.log(
  "Following is Breadth First Traversal " + "(starting from vertex 2)"
);

graphInstance.BFS();
console.log(graphInstance.getDistance()?.reverse());
