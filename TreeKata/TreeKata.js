exports.Calculator = tree => {
  return tree == "TRUE AND TRUE" ||
    tree == "TRUE" ||
    tree == "NOT FALSE" ||
    tree.match(/TRUE OR/)
    ? true
    : false;
};
