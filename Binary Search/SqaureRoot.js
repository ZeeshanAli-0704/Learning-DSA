function findSquareRoot(n) {

    let low = 0;
    let high = n;
    let ans = -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let x = mid * mid;

        if (x <= n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }
    return ans;

};

let n = 36;
console.log(findSquareRoot(n))

n = 28;
console.log(findSquareRoot(n))