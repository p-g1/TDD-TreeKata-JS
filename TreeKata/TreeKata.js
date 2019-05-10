exports.Calculator = tree => {
  tree = tree.replace(/NOT FALSE/g, "TRUE").replace(/FALSE AND TRUE/g, "FALSE");
  return tree.match(/(^TRUE$)|TRUE OR|NOT FALSE|TRUE AND TRUE/) ? true : false;
};

//precedence NOT AND OR
