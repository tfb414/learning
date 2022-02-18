
// Not DP
const calculateFib = (n) => {
  if (n < 2 ) return n;

  return calculateFib(n - 1) + calculateFib( n - 2);
};


//This is DP
//This is top-down memoization (top down is recursion?)

const memoizedCalculateFib = (n) => {
    const memoized = [];

    function fib(n) {
        if (n < 2) return n;

        if (memoized[n]) return memoized[n];

        memoized[n] = fib(n - 1) + fib(n - 2);
        return memoized[n];
    }

    return fib(n)

};

//DP
//Bottom Up


const calculateFibonacciBU = function(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
