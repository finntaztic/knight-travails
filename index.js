//chessboard
class Graph {
    constructor(){
        this.list = new Map();
    }

    //make a graph
    nextVertex(){
        //this vertex will get the current position of the knight (row, col)
        //use add edge funciton to determine the next possible move to give the next vertex
    }

    addEdge(){
        //make the move of the knight such that row +-2 col +-1
    }


    knightMoves(){ 
    //uses bfs
    //shows the shortest possible way to get from one square to another
    //output all the vertices knight will stop on along the way
    }
}

const graph = new Graph();
graph.addVertex(4,3);
graph.addEdge(4,3);



//     //add vertex
//     addVertex (newVertex){
//         this.list.set(newVertex, []);
//     }

//     addEdge(vertex, edge){
//         this.list.get(vertex).push(edge);
//     }

//     printGraph(){
//         const vertices = this.list.keys();
//         for (let vertex of vertices){
//             const connectedNodes = this.list.get(vertex);
//             console.log(`${vertex} -> ${connectedNodes.join(', ')}`)
//         }
        
//     }

// graph.addVertex('A');
// graph.addEdge('A', 'B');
// graph.printGraph();
//rule
//chose search algorithm to find the shortest path 
// between starting square and the ending square

//knight basic move >> 
// two step forward, and one side step (any direction)
//one step forward an two steps to the side ( any direction)


//how do i build the graph? using x, y coordinates