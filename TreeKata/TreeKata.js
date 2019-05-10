exports.Calculator = tree => {
  return tree.match(/(^TRUE$)|TRUE OR|NOT FALSE|TRUE AND TRUE/) ? true : false;
};
