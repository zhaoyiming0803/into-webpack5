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

function parseMarkdown (text) {
  const data = {
    level: 0,
    children: [],
    parent: null
  }

  const arr = text
    .split('\n')
    .filter(item => item)
    .map(item => item.replace(/^(\s+)/, ''))
    .map(item => {
      const match = item.match(/^(#+)\s?(.+)/)
      if (match) {
        return {
          level: match[1].length,
          content: match[2],
          rawContent: item,
          children: []
        }
      } else {
        return {
          content: item,
          rawContent: item
        }
      }
    })

  console.log(arr)

  let prevLevel = data.level
  let prevItem = data

  arr.forEach(item => {
    if (item.level === undefined && !Array.isArray(item.children)) {
      prevItem.children.push(item)
      item.parent = prevItem
      return
    }

    if (item.level > prevLevel) {
      prevItem.children.push(item)
      item.parent = prevItem
      prevLevel = item.level
      prevItem = item
      return
    }

    while (prevItem.level >= item.level) {
      prevItem = prevItem.parent
    }

    prevItem.children.push(item)
    prevItem = item
    prevLevel = item.level
  })

  return data
}

export const tree = parseMarkdown(text)

function flatTree(tree) {
  let res = []

  tree.forEach((item) => {
    if (item.content) {
      res.push(item.rawContent)
    }
    if (Array.isArray(item.children) && item.children.length) {
      res = res.concat(flatTree(item.children))
    }
  })

  return res
}

export const flatedTree = flatTree(tree.children)
