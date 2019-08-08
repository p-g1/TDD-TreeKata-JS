exports.Calculator = tree => {
  return tree
    .split(/\(|\)/)
    .filter(y => y.length > 0)
    .map(x => (x = x.trim().filterWhileHasMoreThanOneSpace()))
    .join(" ")
    .replaceNot()
    .replaceAnd()
    .replaceOr()
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

String.prototype.filterWhileHasMoreThanOneSpace = function() {
  let x = this;
  while (x.match(/ /g) && x.match(/ /g).length > 1 && x.match(/OR/)) {
    x = x
      .replaceNot()
      .replaceAnd()
      .replaceOr();
  }
  return x;
};

String.prototype.print = function() {
  console.log(this);
};
//precedence NOT AND OR
