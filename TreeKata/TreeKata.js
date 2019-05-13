exports.Calculator = tree => {
  return tree
    .replace(/NOT FALSE/g, "TRUE")
    .replace(/NOT TRUE/g, "FALSE")
    .replace(/FALSE AND TRUE/g, "FALSE")
    .replace(/FALSE AND FALSE/g, "FALSE")
    .replace(/TRUE AND FALSE/g, "FALSE")
    .replace(/TRUE AND TRUE/g, "TRUE")
    .replace(/FALSE OR TRUE/g, "TRUE")
    .replace(/FALSE OR FALSE/g, "FALSE")
    .replace(/TRUE OR FALSE/g, "TRUE")
    .replace(/TRUE OR TRUE/g, "TRUE")
    .match(/(^TRUE$)|TRUE OR|NOT FALSE|TRUE AND TRUE/)
    ? true
    : false;
};

//precedence NOT AND OR
