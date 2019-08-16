exports.Calculator = tree => {
  return tree
    .split(/\(|\)/)
    .filter(statement => statement.length > 0)
    .map(statement => (statement = statement.trim().resolveSubStatements()))
    .join(" ")
    .resolveStatementToTrueOrFalse()
    .convertToBoolean();
};

String.prototype.resolveSubStatements = function() {
  let statement = this;

  while (
    statement.match(/ /g) &&
    statement.match(/ /g).length > 1 &&
    statement.match(/AND|OR/g).length < statement.match(/TRUE|FALSE/g).length
  ) {
    statement = statement.resolveAllStatementTypes();
  }
  return statement;
};

String.prototype.resolveStatementToTrueOrFalse = function() {
  let statement = this;

  while (statement.match(/ /g)) {
    statement = statement.resolveAllStatementTypes();
  }
  return statement;
};

String.prototype.resolveAllStatementTypes = function() {
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

String.prototype.convertToBoolean = function() {
  return this == "TRUE" ? true : false;
};
