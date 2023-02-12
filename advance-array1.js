function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (word) {
    return newArr.push(arr[0] + arr[arr.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(string) {
  let vowels = "aeiou";
  let stringArr = string.split("");
  const newObj = {};
  stringArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (newObj[lowerCasedLetter]) {
        newObj[lowerCasedLetter]++;
      } else {
        newObj[lowerCasedLetter] = 1;
      }
    }
  });
  return newObj;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (val, idx) {
    return val * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function (val) {
    return arr[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (name) {
    return name.first + " " + name.last;
  });
}

function filterByValue(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

function find(arr, val) {
  return arr.filter(function (num) {
    return num === val;
  })[0];
}

function findInObj(arr, key, val) {
  return arr.filter(function (value) {
    return value[key] === val;
  })[0];
}

function removeVowels(string) {
  const vowel = "aeiou";
  let arr = string.toLowerCase();
  let stringArr = arr.split("");
  return stringArr
    .filter(function (onlyConst) {
      return vowel.indexOf(onlyConst) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  const newArr = arr.filter(function (val) {
    return val % 2 === 1;
  });
  const newNewArr = newArr.map(function (val) {
    return val * 2;
  });
  return newNewArr;
}
