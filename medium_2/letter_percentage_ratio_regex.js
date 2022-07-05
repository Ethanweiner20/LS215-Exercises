function letterPercentages(string) {
  return {
    lowercase: percentMatches(string, /[a-z]/),
    uppercase: percentMatches(string, /[A-Z]/),
    neither: percentMatches(string, /[^a-zA-Z]/),
  };
}

function percentMatches(string, pattern) {
  const regex = new RegExp(pattern, 'g');
  const matches = string.match(regex) || [];

  return countToPercentage(matches.length, string.length);
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
