exports.Calculator = tree => {
  return tree
    .replaceNot()
    .replaceAnd()
    .replaceOr()
    .replace(/\(|\)/g, "")
    .calculate();
};

String.prototype.replaceNot = function() {
  return this.replace(/NOT FALSE/g, "TRUE").replace(/NOT TRUE/g, "FALSE");
};

String.prototype.replaceAnd = function() {
  return this.replace(/FALSE AND TRUE/g, "FALSE")
    .replace(/FALSE AND FALSE/g, "FALSE")
    .replace(/TRUE AND FALSE/g, "FALSE")
    .replace(/TRUE AND TRUE/g, "TRUE");
};

String.prototype.replaceOr = function() {
  return this.replace(/FALSE OR TRUE/g, "TRUE")
    .replace(/FALSE OR FALSE/g, "FALSE")
    .replace(/TRUE OR FALSE/g, "TRUE")
    .replace(/TRUE OR TRUE/g, "TRUE");
};

String.prototype.calculate = function() {
  return this.match(/(^TRUE$)|TRUE OR|NOT FALSE|TRUE AND TRUE/) ? true : false;
};

//precedence NOT AND OR
