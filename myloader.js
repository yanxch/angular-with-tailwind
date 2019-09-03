module.exports = function parentScopeLoader(source) {
  return '.parent { ' + source + ' }'
}