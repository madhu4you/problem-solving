/*
 * Complete the function below.
 */
function find_order(words) {
    if (!words) return false;
    return printOrder(words, words.length);

    function printOrder(words, alpha) {
        // Create a graph with 'aplha' edges 
        let graph = new Graph(alpha);

        for (let i = 0; i < words.length - 1; i++) {
            // Take the current two words and find the first mismatching 
            // character 
            let word1 = words[i];
            let word2 = words[i + 1];
            for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
                // If we find a mismatching character, then add an edge 
                // from character of word1 to that of word2 
                if (word1.charAt(j) != word2.charAt(j)) {
                    graph.addEdge(word1.charAt(j) - 'a', word2.charAt(j) - 'a');
                    break;
                }
            }
        }

        // Print topological sort of the above created graph 
        return graph.topologicalSort();
    }
}

function Graph() {
    let adjacencyList = [];
    let output = [];

    function init(nVertices) {
        adjacencyList = [];
        for (vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
            adjacencyList[vertexIndex] = [];
        }
    }

    // function to add an edge to graph 
    function addEdge(startVertex, endVertex) {
        adjacencyList[startVertex].push(endVertex);
    }

    function getNoOfVertices() {
        return adjacencyList.length;
    }

    // A recursive function used by topologicalSort 
    function topologicalSortUtil(currentVertex, visited, stack) {
        // Mark the current node as visited. 
        visited[currentVertex] = true;

        // Recur for all the vertices adjacent to this vertex 
        for (let adjacentVertex in adjacencyList[currentVertex]) {
            if (!visited[adjacentVertex]) {
                topologicalSortUtil(adjacentVertex, visited, stack);
            }
        }

        // Push current vertex to stack which stores result 
        stack.push(currentVertex);
    }

    // prints a Topological Sort of the complete graph 
    function topologicalSort() {
        let stack = [];

        // Mark all the vertices as not visited 
        let visited = getNoOfVertices();
        for (let i = 0; i < getNoOfVertices(); i++) {
            visited[i] = false;
        }

        // Call the recursive helper function to store Topological  
        // Sort starting from all vertices one by one 
        for (let i = 0; i < getNoOfVertices(); i++) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, stack);
            }
        }

        // Print contents of stack 
        while (!stack.isEmpty()) {
            output.push(('a' + stack.pop()) + " ");
        }
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = []; // adjacency list
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacents() {
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}