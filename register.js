/* eslint max-len: 0 */
// TODO: eventually deprecate this console.trace("use the `babel-register` package instead of `babel-core/register`");
module.exports = require("babel-register")({
  //ignore react-native, react, enzyme, and react-native-mock modules but transpile the rest
  ignore: /node_modules\/(?!react-native|react|enzyme|react-native-mock)/
});
