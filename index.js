//chessboard
class Graph {
    constructor(){
        this.list = new Map();
    }

    exploreMoves (curr){
        console.log(this.list.set(curr, []))
        
        let edges = [[1, -2], [2, 1]] //, [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];

        edges.forEach((edge) => {
            let newRow = curr[0] + edge [0];
            let newCol = curr[1] + edge [1];

            if (newRow > 7 || newCol > 7 || newRow < 0 || newCol < 0) return;
            let vertex = [newRow, newCol];

            console.log(vertex)


            this.exploreMoves(vertex)
            this.list.get(curr).push(vertex)

        })
        }
    }




const graph = new Graph();
console.log(graph.list);

console.log(graph.exploreMoves([2, 3]))
// graph.addVertex([4,3]);
// graph.addEdge([4,3]);

// graph.addEdge(4,3);



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