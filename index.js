function knightMoves(){ 


    //shows the shortest possible way to get from one square to another
    //output all the vertices knight will stop on along the way
}


class squarePos{
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
}

//chessboard
class Graph {
    constructor(){
        this.list = new Map();//it's like for each method,  
        // accepts a callback and applies that function 
        // to each element of an array, then return a new array
    }

    //make a graph
    addVertex(){
        let currSquare = new squarePos(4, 3);
        console.log(currSquare)
    }

    addEdge(){
        //make the move of the knight
    }

}

const graph = new Graph();
graph.addVertex()


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