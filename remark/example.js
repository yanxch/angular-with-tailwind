var unified = require('unified')
var stream = require('unified-stream')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')
var all = require('mdast-util-to-hast/lib/all');

var processor = unified()
  .use(markdown)
  .use(remark2rehype, {
    handlers: {
      heading: function(h, node) {
        // node.depth
        if (node.depth === 1) {
          return h(node, 'blog-title', all(h, node))
        } 

        if (node.depth === 2) {
          return h(node, 'blog-sub-title', all(h, node))
        }

        return h(node, 'h' + node.depth, all(h, node))
      }
    }
  })
  .use(html)

process.stdin.pipe(stream(processor)).pipe(process.stdout)