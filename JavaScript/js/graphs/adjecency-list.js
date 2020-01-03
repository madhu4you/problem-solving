class Graph {
    constructor(value) {
        this.value = value;
        this.adjList = [];
    }
    addEdge(start, end) {
        this.adjList[start].push(end);
    }
    getVerticesLength() {
        return this.adjList.length;
    }
}