// Getting the Current Date and Time

// 1. Using the Date object
const currentDate = new Date();

// Get individual components (year, month, day, etc.)
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed (0-11)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

console.log("Current date and time (Date object):");
console.log(
  `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`
);

// 2. Using toLocaleString() for formatted output (locale specific)
const formattedDateTime = currentDate.toLocaleString();
console.log("Formatted date and time (toLocaleString):", formattedDateTime);

// Formatting Date and Time

// 1. Using toDateString(), toLocaleDateString(), etc.
const formattedDate = currentDate.toDateString(); // "Sun Apr 14 2024" (US locale)
const formattedTime = currentDate.toLocaleTimeString(); // "16:15:40" (US locale)

console.log("Formatted date:", formattedDate);
console.log("Formatted time:", formattedTime);

// 2. Using custom formatting with padStart() and slice()
const padToTwoDigits = (num) => String(num).padStart(2, "0");
const formattedCustom = `${year}-${padToTwoDigits(month)}-${padToTwoDigits(
  day
)} ${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}:${padToTwoDigits(
  seconds
)}`;

console.log("Custom formatted date and time:", formattedCustom);

// Parsing Dates and Times

// 1. Using Date.parse() for string parsing (not recommended for user input due to locale issues)
const dateString = "2024-04-15";
const parsedDate = new Date(dateString);

console.log("Parsed date:", parsedDate);

// 2. Using more robust parsing libraries like moment.js (not included here) is recommended for user input or complex parsing needs.

// Date and Time Calculations

// 1. Adding/subtracting time intervals (milliseconds, seconds, minutes, etc.)
const futureTime = new Date(currentDate.getTime() + 60 * 60 * 1000); // Add 1 hour in milliseconds
console.log("Time after 1 hour:", futureTime);

// 2. Using methods like setFullYear(), setMonth(), etc. to modify specific date components
currentDate.setFullYear(2025);
console.log("Date after setting year to 2025:", currentDate);
