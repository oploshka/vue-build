//
import dayjs from "dayjs";

// locale
require("dayjs/locale/ru");
dayjs.locale("en");

// //
// const customParseFormat = require('dayjs/plugin/customParseFormat');
// dayjs.extend(customParseFormat);

// //
// const localeData = require('dayjs/plugin/localeData');
// dayjs.extend(localeData);

//
const utc = require('dayjs/plugin/utc'); // dependent on utc plugin
dayjs.extend(utc);

//
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

// //
// const weekday = require('dayjs/plugin/weekday');
// dayjs.extend(weekday);

// //
// const isToday = require('dayjs/plugin/isToday');
// dayjs.extend(isToday);

// //
// const weekOfYear = require('dayjs/plugin/weekOfYear');
// dayjs.extend(weekOfYear);

// //
// const dayOfYear = require('dayjs/plugin/dayOfYear');
// dayjs.extend(dayOfYear);

// //
// const isBetween = require('dayjs/plugin/isBetween');
// dayjs.extend(isBetween);

global.DateTime = dayjs;
