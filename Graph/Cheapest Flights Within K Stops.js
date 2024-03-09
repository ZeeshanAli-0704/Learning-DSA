/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    // simple 2 D Graph to store adjacency list
    let graph = new Array(n).fill().map((_) => new Array());
    for (let flight of flights) {
        graph[flight[0]].push([flight[1], flight[2]]);
    }
    console.log(graph);

    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;

    // stops, node, cost
    let queue = [[0, src, 0]];


    while (queue.length) {
        let currentNode = queue.shift()
        let stops = currentNode[0];
        let node = currentNode[1];
        let cost = currentNode[2];

        console.log("a", stops, node, cost);

        // if steps reached max
        if (stops > k) continue;

        for (let neighbor of graph[node]) {
            // next destination
            let next_id = neighbor[0];
            // costing
            let costTillNextStop = neighbor[1] + cost;
            // total stops
            let stopsTillNow = stops + 1;

            if (stopsTillNow <= k && costTillNextStop < distance[next_id]) {
                distance[next_id] = costTillNextStop;
                queue.push([stopsTillNow, next_id, costTillNextStop])
            }
        }
    }

    return distance[dst] === Infinity ? -1 : distance[dst];
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))