// Recursion: When function calls itself

// Calculating power of number by recursion
function pow(x, n) {
  if (n == 1) return x;

  return x * pow(x, n - 1);
}

console.log(pow(2, 3));
