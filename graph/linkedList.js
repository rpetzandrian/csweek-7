const List = require('./list')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFront(data) {
    let newlist = new List(data)
    newlist.next = this.head
    this.head = newlist
  }

  removeFront() {
    if (this.head !== null) {
      this.head = this.head.next
    }
  }

  insertBack(data) {
    let curr = this.head
    if (curr) {
      while (curr.next !== null) {
        curr = curr.next
      }
      let newlist = new List(data)
      curr.next = newlist
    } else {
      let newlist = new List(data)
      this.head = newlist
    }
  }

  removeBack() {
    if (this.head !== null) {
      let curr = this.head
      if (curr.next === null) {
        this.head = null
      } else {
        while (curr.next.next !== null) {
          curr = curr.next
        }
        curr.next = null
      }
    }
  }

  insertIn(idx, data) {
    if (this.head === null && idx === 0) {
      let newlist = new List(data)
      this.head = newlist
    } else {
      let curr = this.head
      let i = 0
      while (curr.next !== null && i < idx - 1) {
        curr = curr.next
        i++
      }
      if (curr.next !== null) {
        let newlist = new List(data)
        newlist.next = curr.next
        curr.next = newlist
      }
    }
  }

  removeIn(idx) {
    if (this.head !== null) {
      if (idx === 0) {
        this.head = this.head.next
      } else {
        let curr = this.head
        let i = 0
        while (curr.next !== null && i < idx - 1) {
          curr = curr.next
          i++
        }
        if (curr.next !== null) {
          curr.next = curr.next.next
        }
      }
    }
  }
}

module.exports = LinkedList