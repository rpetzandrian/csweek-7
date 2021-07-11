module.exports = class hastTable {
  constructor() {
    this.size = 6
    this.table = new Array(this.size)
  }

  hash(value) {
    let hash = 0
    let comb = 0

    for (let i = 0; i < value.length; i++) {
      i === 0 ? hash += value.charCodeAt(i) : null
      comb += value.charCodeAt(i)
    }

    let key = hash % this.size
    let id = `${hash}-${comb}`
    return { key, id }
  }

  set(value) {
    const { key, id } = this.hash(value)

    if (this.table[key] === undefined) {
      this.table[key] = [];
    }

    this.table[key].push([id, value]);
    return id
  }

  get(id) {
    let key = id.split('-')[0] % this.size

    for (let i = 0; i < this.table[key].length; i++) {
      if (this.table[key][i][0] === id) {
        let id = this.table[key][i][0]
        let name = this.table[key][i][1]
        return { id, name }
      }
    }

    return undefined;
  }
}