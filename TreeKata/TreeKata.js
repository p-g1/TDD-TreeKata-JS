exports.Calculator = tree => {
  return tree
    .split(/\(|\)/)
    .filter(statement => statement.length > 0)
    .map(
      statement =>
        (statement = statement
          .trim()
          .resolveStatementWhileHasMoreThanOneSpace())
    )
    .join(" ")
    .resolveAllStatements()
    .calculate();
};

String.prototype.resolveStatementWhileHasMoreThanOneSpace = function() {
  let statement = this;
  while (
    statement.match(/ /g) &&
    statement.match(/ /g).length > 1 &&
    statement.match(/OR/)
  ) {
    statement = statement.trim().resolveAllStatements();
  }
  return statement;
};

String.prototype.resolveAllStatements = function() {
  return this.resolveNotStatements()
    .resolveAndStatements()
    .resolveOrStatements();
};

String.prototype.resolveNotStatements = function() {
  return this.replace(/NOT FALSE/g, "TRUE").replace(/NOT TRUE/g, "FALSE");
};

String.prototype.resolveAndStatements = function() {
  return this.replace(
    /TRUE AND FALSE|FALSE AND (TRUE|FALSE)/g,
    "FALSE"
  ).replace(/TRUE AND TRUE/g, "TRUE");
};

String.prototype.resolveOrStatements = function() {
  return this.replace(/FALSE OR TRUE|TRUE OR (FALSE|TRUE)/g, "TRUE").replace(
    /FALSE OR FALSE/g,
    "FALSE"
  );
};

String.prototype.calculate = function() {
  return this.match(/(^TRUE$)|TRUE OR|NOT FALSE|TRUE AND TRUE/) ? true : false;
};
