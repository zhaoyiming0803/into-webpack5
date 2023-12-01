export * from './common3'

export const common = 'common.js'

const node = {
  tag: 'html',
  type: 1,
  props: {
    lang: 'en'
  },
  children: [{
    tag: 'head',
    type: 1,
    children: [{
      tag: 'meta',
      props: {
        charset: 'UTF-8'
      }
    }, {
      tag: 'title',
      type: 1,
      children: 'Hello World'
    }]
  }, {
    tag: 'body',
    type: 1,
    children: [{
      tag: 'div',
      type: 1
    }, {
      tag: 'p',
      type: 1,
      if: {
        raw: '{{ status }}',
        exp: '(status)'
      },
      children: [{
        tag: 'span',
        type: 1,
        for: {
          raw: '{{ listData }}',
          exp: '(listData)'
        },
        children: [{
          tag: 'text',
          type: 3,
          exps: [{
            exp: '(item + index)',
            isProps: false
          }]
        }]
      }]
    }]
  }]
}

function runChildren (node) {
  return Array.isArray(node.children) && node.children.map(_node => genNode(_node)) || ''
}

function genIf (node) {
  return `if(${node.if.exp}) {\n ${runChildren(node)} }\n`
}

function genFor (node) {
  const index = node.for.index || 'index'
  const item = node.for.item || 'item'
  return `_i(_sc(${node.for.exp}), function (${item}, ${index}) {
    \n${runChildren(node)}
  })\n`
}

function genExps (node) {
  return `${node.exps.map(({ exp }) => {
    return `${exp};\n`
  }).join('')}`
}

function genNode (node) {
  let exp = ''

  if (!node) {
    return exp
  }

  if (node.type === 3) {
    if (node.exps && !node.isComment) {
      exp += genExps(node)
    }
    return exp
  }
  
  if (node.type === 1) {
    if (node.for) {
      exp += genFor(node)
    } else if (node.if) {
      exp += genIf(node)
    } else {
      if (node.exps) {
        exp += genExps(node)
      }
      if (Array.isArray(node.children)) {
        node.children.forEach(function (child) {
          exp += genNode(child)
        })
      }
    }
  }

  return exp
}

export const code = genNode(node)

const text = `
    # 1-1
    ## 1-2
    ### 1-3
    123456
    # 2-1
    ###2-2
    ## 2-3
`

export function parseMarkdown (text) {
  const arr = text
    .split('\n')
    .map(item => item.replace(/\s/g, ''))
    .filter(item => item)
    .map(item => {
      if (item[0] === '#') {
        let level = 0
        let content = ''
        for (let i = 0; i < item.length; i++) {
          if (item[i] === '#') {
            level += 1
          } else {
            content += item[i]
          }
        }
        return {
          type: 'header',
          level,
          content,
          rawContent: item,
          children: [],
          parent: null
        }
      }

      return {
        type: 'content',
        content: item,
        rawContent: item,
        parent: null,
        children: null
      }
    })

  const data = {
    level: 0,
    children: [],
    parent: null
  }

  let preItem = data

  arr.forEach(item => {

    if (item.type === 'content') {
      preItem.children.push(item)
      item.parent = preItem
      return
    }

    if (item.level > preItem.level) {
      preItem.children.push(item)
      item.parent = preItem
      preItem = item
      return
    }

    while (item.level <= preItem.level) {
      preItem = preItem.parent
    }

    preItem.children.push(item)
    item.parent = preItem
    preItem = item

  })

  return data
}

export const tree = parseMarkdown(text)

export function flatTree (tree) {

  const walkChildren = (arr) => {
    let res = []

    arr.forEach(item => {
      res.push(item)

      if (Array.isArray(item.children)) {
        res = res.concat(walkChildren(item.children))
      }
    })

    return res
  }

  return walkChildren(tree.children)

}

export const flatedTree = flatTree(tree)