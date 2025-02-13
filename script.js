function permuteString(str) {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  const list = [...str].reduce((acc,char,i) => acc.concat(permuteString(str.slice(0,i) + str.slice(i + 1)).map(val => char + val)),[]);
  return [...new Set(list)];
}

console.log(permuteString('far'));
console.log(permuteString('fcc'));
console.log(permuteString('p'));
console.log(permuteString(''));
console.log(permuteString('101'));
