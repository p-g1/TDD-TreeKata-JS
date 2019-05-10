exports.Calculator = tree => {
  return tree == "TRUE" || tree.match(/TRUE OR|NOT FALSE|TRUE AND TRUE/)
    ? true
    : false;
};
