function convertToRoman(num) {
  const M = Math.floor(num / 1000);
  const D = Math.floor((num - M * 1000) / 500);
  const C = Math.floor((num - D * 500 - M * 1000) / 100);
  const L = Math.floor((num - D * 500 - M * 1000 - C * 100) / 50);
  const X = Math.floor((num - D * 500 - M * 1000 - C * 100 - L * 50) / 10);
  const V = Math.floor((num - D * 500 - M * 1000 - C * 100 - L * 50 - X * 10) / 5);
  const I = Math.floor((num - D * 500 - M * 1000 - C * 100 - L * 50 - X * 10 - V * 5));

  const arr = [];
  //console.log("m" + M)
  //console.log("d" + D)
  //console.log("c" + C)
  //console.log("l" + L)
  //console.log("x" + X)
  //console.log("V" + V)
  //console.log("I" + I)

  if (M > 0) {
    for (let i = 0; i < M; i++) {
      arr.push("M");
    }
  }

  if (D > 0) {
    if (D === 1 && C === 4) {
      arr.push("CM");
    } else {
      for (let i = 0; i < D; i++) {
        arr.push("D");
      }
    }
  }

  if (C > 0) {
    if (D === 1 && C === 4) {
    } else if (C === 4) {
      arr.push("CD");
    }
    else {
      for (let i = 0; i < C; i++) {
        arr.push("C");
      }
    }
  }

  if (L > 0) {
    if (L === 1 && X === 4) {
      arr.push("XC");
    }
    else {
      for (let i = 0; i < L; i++) {
        arr.push("L");
      }
    }
  }

  if (X > 0) {
    if (L === 1 && X === 4) {
    } else if (X === 4) {
      arr.push("XL");
    }
    else {
      for (let i = 0; i < X; i++) {
        arr.push("X");
      }
    }
  }

  if (V > 0) {
    if (V === 1 && I === 4) {
      arr.push("IX");
    }
    else {
      for (let i = 0; i < V; i++) {
        arr.push("V");
      }
    }
  }

  if (I > 0) {
    if (V === 1 && I === 4) {
    } else if (I === 4) {
      arr.push("IV");
    }
    else {
      for (let i = 0; i < I; i++) {
        arr.push("I");
      }
    }
  }

  return arr.join("");
}


console.log(convertToRoman(444));
