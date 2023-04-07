function palindrome(str = "") {
  while (
    str.indexOf("_") != -1 ||
    str.indexOf(".") != -1 ||
    str.indexOf(")") != -1 ||
    str.indexOf("(") != -1 ||
    str.indexOf("-") != -1 ||
    str.indexOf("+") != -1 ||
    str.indexOf("-") != -1 ||
    str.indexOf("&") != -1 ||
    str.indexOf(":") != -1 ||
    str.indexOf("?") != -1 ||
    str.indexOf("!") != -1 ||
    str.indexOf(",") != -1 ||
    str.indexOf(" ") != -1
  ) {
    str = str.replace("_", "")
    str = str.replace("-", "")
    str = str.replace("+", "")
    str = str.replace("-", "")
    str = str.replace("&", "")
    str = str.replace(":", "")
    str = str.replace("?", "")
    str = str.replace("!", "")
    str = str.replace(",", "")
    str = str.replace(" ", "")
    str = str.replace(".", "")
    str = str.replace(")", "")
    str = str.replace("(", "")
  }
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    //console.log(`${str[i]} ${str[str.length - 1 - i]}`);
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))