const Graph = require('./graph')

let g = new Graph()

g.addVertices('A');
g.addVertices('B');
g.addVertices('C');
g.addVertices('D');
g.addVertices('E');
g.addVertices('F');
g.addVertices('G');

g.addAdjList('A', [
  { v: 'B', w: 16 },
  { v: 'C', w: 22 },
  { v: 'D', w: 25 }
])
g.addAdjList('B', [
  { v: 'A', w: 16 },
  { v: 'D', w: 14 },
  { v: 'E', w: 26 }
])
g.addAdjList('C', [
  { v: 'A', w: 22 },
  { v: 'D', w: 9 },
  { v: 'G', w: 35 }
])
g.addAdjList('D', [
  { v: 'A', w: 25 },
  { v: 'B', w: 14 },
  { v: 'C', w: 9 },
  { v: 'F', w: 24 }
])
g.addAdjList('E', [
  { v: 'B', w: 26 },
  { v: 'F', w: 15 },
  { v: 'G', w: 28 }
])
g.addAdjList('F', [
  { v: 'D', w: 24 },
  { v: 'E', w: 15 },
  { v: 'G', w: 8 }
])
g.addAdjList('G', [
  { v: 'F', w: 8 },
  { v: 'C', w: 35 },
  { v: 'E', w: 28 }
])

console.log(g.show())

console.log(g.prims())