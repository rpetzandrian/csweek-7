const LinkedList = require("./linkedList");

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertices(vt) {
    this.vertices.push(vt)
  }

  addAdjList(vt, list) {
    let l = new LinkedList()
    for (let i = 0; i < list.length; i++) {
      l.insertBack(list[i])
    }

    this.adjList[vt] = l
  }

  show() {
    let vertices = this.vertices
    let adjList = this.adjList

    return { vertices, adjList }
  }

  prims() {
    let activeVertice = {},
      activeEdges = []

    for (let i = 0; i < this.vertices.length; i++) {
      activeVertice[this.vertices[i]] = false
    }

    let currVertice = 'A'

    while (currVertice) {
      activeVertice[currVertice] = true

      let distance = Infinity
      let fromVertice = null
      let toVertice = null
      for (const key in activeVertice) {
        if (activeVertice[key]) {
          let list = this.adjList[key]
          let curr = list.head
          while (curr !== null) {
            if (curr.data.w < distance && !activeVertice[curr.data.v]) {
              distance = curr.data.w
              fromVertice = key
              toVertice = curr.data.v
            }

            curr = curr.next
          }
        }
      }

      if (distance === Infinity || toVertice === null || fromVertice === null) {
        currVertice = null
      } else {
        activeEdges.push({ from: fromVertice, to: toVertice, weight: distance })
        currVertice = toVertice
      }
    }

    let MST = 0
    activeEdges.map(e => MST += e.weight)

    return { activeEdges, MST }
  }
}

module.exports = Graph