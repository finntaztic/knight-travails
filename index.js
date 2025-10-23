//chessboard
class Graph {
    constructor(){
        this.list = new Map();
    }

    // addVertex(vertex){
    //     this.list.set(vertex, new Set());
    // }

    // addEdge(vertex, edge){
    //     let newRow = vertex[0];
    //     let newCol = vertex[1] + 2;
    //     console.log(newRow);
    // }

    exploreMoves (curr){
        let edges = [[1, 2], [1, -2]] //[-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
        
     
            
        
        edges.forEach((edge) => {

            let newRow = curr[0] + edge [0];
            let newCol = curr[1] + edge [1];
            let results = [newRow, newCol];

            console.log(results)

            if (results[0] > 7 || results[0] < 0) {
                console.log('nope')
            } else if (results[1] > 7 || results[1] < 0) {
                // return null;
                console.log('nope')

            } else this.exploreMoves(results);

//kill the operation even before the numbers gets added 
//theres still some numbers higher than 7 cos you didnt put && condition
        })
    }




    //generate all possible moves 
    // knightVertices (){
    //     let initialPos = [4, 3];
    //     let endPos;
    //     let edge = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    //     let nextPos;



        //need recursion to find the next steps after next post
        //use adjacency list to map the positions
    }

    // //bfs
    // levelOrderForEach(callback){
    // const q = [this.root];              // 1️⃣ Queue holds nodes to visit (BFS hallmark)
    // while (q.length > 0) {              // 2️⃣ Loop until no more nodes left
    //     const curr = q.shift();           // 3️⃣ Take one from the *front* of the queue
    //     callback(curr);                   // 4️⃣ "Visit" this node

    //     if (curr.left !== null) q.push(curr.left);   // 5️⃣ Add children to queue
    //     if (curr.right !== null) q.push(curr.right);
    // }
    // }



const graph = new Graph();
graph.exploreMoves([3,3])
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