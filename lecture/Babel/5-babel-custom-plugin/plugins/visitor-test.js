module.exports = function ({ types: t }) {
  const node = t.BinaryExpression("+", t.Identifier("a"), t.Identifier("b"));
  console.log("isBinaryExpression", t.isBinaryExpression(node));
  return {
    visitor: {
      Identifier(path) {
        console.log("Identifier name", path.node.name);
      },
      BinaryExpression(path) {
        console.log("BinaryExpression operator", path.node.operator);
      },
    },
  };
};