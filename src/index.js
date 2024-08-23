module.exports = function check(str, bracketsConfig) {
  let checkStr = "";
  let bracketsPairs = bracketsConfig.map(pair => pair.join(""))

  while (str !== checkStr) {
    checkStr = str;

    for (let pair of bracketsPairs) {
      str = str.replace(pair, "");
    }
  }
  return checkStr.length === 0;
}
