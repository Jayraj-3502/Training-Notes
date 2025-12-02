const str1 = "abcddsd";
const str2 = "cabddsd";

function anagramString(str1, str2) {
  if (str1.length !== str2.length) return false;

  const hashMap = {};

  for (const val of str1) {
    hashMap[val] = hashMap[val] ? hashMap[val] + 1 : 1;
  }

  for (const val of str2) {
    if (hashMap[val]) {
      hashMap[val] = hashMap[val] - 1;
    } else {
      return false;
    }
  }

  return true;
}

const result = anagramString(str1, str2);
console.log(result);
