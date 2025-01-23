import { DateTime } from "luxon";

// Define the components of the special date
const year = 2024;
const month = 3; // Note: Month is one-based (1 for January, 12 for December)
const day = 16;
const hours = 0;
const minutes = 0;
const seconds = 0;

// Define the time zone (location)
const timeZone = 'Europe/London'; // For example, New York time zone
// const timeZone = 'America/New_York'; // For example, New York time zone

// Create a DateTime object representing the special date with the specified time zone
const specialDate = DateTime.fromObject({
  year,
  month,
  day,
  hour: hours,
  minute: minutes,
  second: seconds,
  
}, timeZone,);

// Get the milliseconds since the Unix epoch for the special date with the specified time zone
// 7 * 24 * 60 * 60 * 1000;
const millisecondsWithLocation = specialDate.toMillis();
export const currentStartDate = millisecondsWithLocation;
export const mintExpireDate = millisecondsWithLocation + 25 * 24 * 60 * 60 * 1000;
export const presaleExpireDate= millisecondsWithLocation + 18 * 24 * 60 * 60 * 1000;

// exports = {currentStartDate, mintExpireDate, presaleExpireDate};