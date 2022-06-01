function prtn(num) {
  let style = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      str += i;
    }
    str += "\n";
  }
  return str;
}

console.log(prtn(5));
