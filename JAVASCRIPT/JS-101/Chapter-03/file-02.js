// For the working js in both older and newer browser we need:

// 1. Transpilers
// It can rewrite the syntax
// Examples of tranpilers: Babel

// New Version:
height ?? 100;
// Older Version:
height = height !== undefined && height !== null ? height : 100;

// 2. Polyfills
// Polyfills converts newer methods into older version
// Example of libraries: core js, polyfilll.io

// Newer version:
Math.trunc(1.234); // 1

// Older Version
Math.trunc = function (number) {
  return number < 0 ? Math.ceil(number) : Math.floor(number);
};
