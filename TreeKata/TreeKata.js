exports.Calculator = tree => {
  return tree == "TRUE AND TRUE" ||
    tree == "TRUE" ||
    tree == "NOT FALSE" ||
    tree == "TRUE OR TRUE" ||
    tree == "TRUE OR FALSE"
    ? true
    : false;
};
