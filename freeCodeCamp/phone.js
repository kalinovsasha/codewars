function telephoneCheck(str = "") {
  if (str[0] === "-" || str[0] === ")") return false

  if (str[0] === "(" && str[4] !== ")") return false
  if (str[4] === ")" && str[0] !== "(") return false
  if (str[1] === "(" && str[5] !== ")") return false
  if (str[5] === ")" && str[1] !== "(") return false
  if (str[2] === "(" && str[6] !== ")") return false
  if (str[2] !== "(" && str[6] === ")") return false

  if (str[0] === "(" || str[1] === "(" || str[2] === "(" || str[4] === ")" || str[5] === ")" || str[6] === ")") {
    str = str.replace("(", "");
    str = str.replace(")", "");
  }

  let counter = 0;
  while (str.indexOf("-") !== -1) {
    str = str.replace("-", "");
    counter++;
  }
  if(counter > 2 ) return false

  while (str.indexOf(" ") !== -1) {
    str = str.replace(" ", "");
  }

  if (str.length > 11 || str.length < 10) return false
  if (str.length === 11 && str[0] !== "1") return false
  const expr = /^\d{10,}$/g;
  if (!expr.test(str)) return false

  return true;
}

console.log(telephoneCheck("1 555)555-5555"));

