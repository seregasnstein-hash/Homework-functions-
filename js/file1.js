function exactTimeToday(hours, minutes, seconds) { //добавил хардкод, для отображения минут и секунд
  return hours * 3600 + minutes * 60 + seconds;    //по заданию, считаются чистые сутки, а они в минутах и секундах выдают ноль
};

function dateInSeconds(day, month, year) {
  let leap_year = Math.floor((year - 1) / 4);
  let days_of_years = (year - 1) * 365 + leap_year;
  let days_of_month = 0;

  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days_of_month += 31;
        break;
      case 2:
        if (year % 4 === 0) days_of_month += 29;
        else days_of_month += 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days_of_month += 30;
        break;
    };
  };

  return (day + days_of_years + days_of_month) * 24 * 60 * 60;
};

function fromSecondsToHoursMinutesSeconds(number) {
  let seconds = number % 60;
  let minutes = Math.floor(number / 60);
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${hours}:${minutes}:${seconds}`;
};

function dateDifference(day1, month1, year1, day2, month2, year2) {
  let firstDate = dateInSeconds(day1, month1, year1);
  let secondDate = dateInSeconds(day2, month2, year2) + exactTimeToday(16, 17, 35);

  let dateNumber;

  if (firstDate > secondDate) {
    dateNumber = firstDate - secondDate;
    return fromSecondsToHoursMinutesSeconds(dateNumber);
  } else return `Первая дата должна быть больше второй`;
};

const result = dateDifference(18, 2, 2026, 10, 3, 1988);
const result2 = dateDifference(18, 2, 2026, 11, 8, 1233);
const result3 = dateDifference(18, 2, 2026, 1, 1, 1);

console.log(`Разница между датами <<чч.мм.сс>>: ${result}`);
console.log(`Разница между датами <<чч.мм.сс>>: ${result2}`);
console.log(`Разница между датами <<чч.мм.сс>>: ${result3}`);
