// Letter Percentage Ratio

function letterPercentages(string) {
  return countsToPercentages(letterCounts(string), string.length);
}

function letterCounts(string) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach((char) => {
    if (/[a-z]/.test(char)) counts['lowercase'] += 1;
    else if (/[A-Z]/.test(char)) counts['uppercase'] += 1;
    else counts['neither'] += 1;
  });

  return counts;
}

function countsToPercentages(letterCounts, totalCount) {
  const percentageEntries = Object.entries(letterCounts).map((entry) => {
    return [entry[0], countToPercentage(entry[1], totalCount)];
  });

  return Object.fromEntries(percentageEntries);
}

function countToPercentage(count, totalCount) {
  return ((count / totalCount) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Edge Cases

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages(' '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
