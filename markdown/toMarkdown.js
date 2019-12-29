// node example.js < example.md > example.html

var unified = require('unified')
var stream = require('unified-stream')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')
var all = require('mdast-util-to-hast/lib/all');
var wrap = require('mdast-util-to-hast/lib/wrap');
var detab = require('detab');
var u = require('unist-builder');
var trimLines = require('trim-lines')
var normalize = require('mdurl/encode')


var processor = unified()
  .use(markdown, {
    commonmark: true,
    blocks: [
      'blog-content',
      'blog-text-container',
      'br',
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'meta',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'pre',
      'section',
      'source',
      'title',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul'
    ]
  })
  .use(remark2rehype, {
    allowDangerousHTML: true,
    handlers: {
      heading: function(h, node) {
        // node.depth
        if (node.depth === 1) {
          return h(node, 'blog-title', all(h, node))
        } 

        if (node.depth === 2) {
          return h(node, 'blog-sub-title', all(h, node))
        }

        if (node.depth === 3) {
          return h(node, 'blog-heading', all(h, node))
        }

        return h(node, 'h' + node.depth, all(h, node))
      },
      list: list,
      paragraph: function (h, node) {
        return h(node, 'blog-text', all(h, node))
      },
      blockquote: function (h, node) {
        return h(node, 'blog-quote', all(h, node))
      },
      code: function (h, node) {
        var value = node.value ? detab(node.value + '\n') : ''
        var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
        var props = {}
      
        if (lang) {
          props.language = [lang]
        }
      
        return h(node.position, 'blog-code', props, [u('text', value)])
      },
      link: function(h, node) {
        var props = {href: normalize(node.url)}

        if (node.title !== null && node.title !== undefined) {
          props.title = node.title
        }

        props.target = ["_blank"]
      
        return h(node, 'a', props, all(h, node))
      }
    }
  })
  .use(html, {
    allowDangerousHTML: true
  });

// process.stdin.pipe(stream(processor)).pipe(process.stdout)



function list(h, node) {
  var props = {
    className: 'blog'
  }
  var name = node.ordered ? 'ol' : 'ul'
  var items
  var index = -1
  var length

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  items = all(h, node)
  length = items.length

  return h(node, name, props, wrap(items, true))
}

var fs = require('fs'),
    path = require('path'), 
    inDirectory = path.join(__dirname, 'posts');   

var files = fs.readdirSync(inDirectory).forEach(fileName => {
  console.log(fileName);
  var inFilePath = path.join(__dirname, 'posts', fileName);
  var outFilePath = path.join(__dirname, '../src/app/posts', fileName + '.html');

  var inStream = fs.createReadStream(inFilePath);
  var outStream = fs.createWriteStream(outFilePath);
  
  inStream.pipe(stream(processor)).pipe(outStream);
});

