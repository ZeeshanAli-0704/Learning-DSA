/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  // trust map to show how many people trust the person
  const trusteeMap = {};
  // map of all trusters who trust on other people
  const trustersMap = {};

  let maxTrustee = null;

  for (let i = 0; i < trust.length; i++) {
    // trust[i][0] is one who is trusting someone
    // example [1,2] -> 1 - trust on 2
    const truster = trust[i][0];
    // trust[i][1] is one who is being trusted by someone
    // example [1,2] -> 2 is trusted by 1
    const trustee = trust[i][1];

    if (trusteeMap[trustee] !== undefined) {
      trusteeMap[trustee]++;
    } else {
      trusteeMap[trustee] = 1;
    }

    if (trusteeMap[trustee] > trusteeMap[maxTrustee] || !maxTrustee) {
      maxTrustee = trustee;
    }

    if (trustersMap[truster] === undefined) {
      trustersMap[truster] = 1;
    }
  }

  if (trusteeMap[maxTrustee] === N - 1 && !trustersMap[maxTrustee]) {
    return maxTrustee;
  } else if (N === 1 && trust.length === 0) {
    return 1;
  } else {
    return -1;
  }
};
