export class Link {
  constructor (header) {
    this.header = header
  }

  add (node) {
    let p = this.header
    while (p.next) {
      p = p.next
    }
    p.next = node
    return this
  }

  reverse () {
    // 1 2 3 4 5
    let p = this.header
    let q = p.next
    while (q) {
      let r = q.next
      q.next = p
      p = q
      q = r
    }
    this.header.next = null
    this.header = p

    return this
  }

  insertBefore (node, name) {
    // 1 2 3 4 5
    let preNode = this.header
    let curNode = preNode.next

    if (preNode.name === name) {
      node.next = preNode
      this.header = node
      return this
    }

    while (curNode) {
      if (curNode.name !== name) {
        preNode = curNode
        curNode = curNode.next
        continue
      }

      preNode.next = node
      node.next = curNode

      return this
    }
  }

  insertAfter (node, name) {
    let curNode = this.header
    
    while (curNode) {
      if (curNode.name !== name) {
        curNode = curNode.next
        continue
      }
      const nextNode = curNode.next
      curNode.next = node
      node.next = nextNode
      return this
    }
  }
}

const link = new Link({
  name: '1'
})

link.add({
  name: '2'
})

link.add({
  name: '3'
})

link.reverse()

link.insertAfter({ name: '4' }, '3')

link.insertBefore({ name: '5' }, '3')

link.insertBefore({ name: '6' }, '3')

export {
  link
}
