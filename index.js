function knightMoves(){ 


    //shows the shortest possible way to get from one square to another
    //output all the vertices knight will stop on along the way
}

//chessboard
class Graph {
    constructor(){
        this.list = new Map();
    }

    //add vertex
    addVertex (newVertex){
        this.list.set(newVertex, []);
    }

    addEdge(vertex, edge){
        this.list.get(vertex).push(edge);
    }

    printGraph(){
        const vertices = this.list.keys();
        for (let vertex of vertices){
            const connectedNodes = this.list.get(vertex);
            console.log(`${vertex} -> ${connectedNodes.join(', ')}`)
        }
        
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addEdge('A', 'B');
graph.printGraph();
//rule
//chose search algorithm to find the shortest path 
// between starting square and the ending square

//knight basic move >> 
// two step forward, and one side step (any direction)
//one step forward an two steps to the side ( any direction)


//how do i build the graph? using x, y coordinates