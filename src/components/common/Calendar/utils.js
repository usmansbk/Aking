import moment from 'moment';

export function nextMonth(date) {
  return moment(date).add(1, 'month').toISOString();
}

export function previousMonth(date) {
  return moment(date).subtract(1, 'month').toISOString();
}

export function getDate(after = 0) {
  return moment().add(after, 'day');
}

export function dateString(after) {
  return getDate(after).startOf('day').toISOString();
}

export function formatMonth(date) {
  return moment(date).format('MMMM YYYY').toUpperCase();
}

export function isSameDay(day1, day2) {
  return moment(day1).isSame(day2, 'day');
}

export function formatDay(date) {
  return moment(date).format('D');
}

export function isDateMarked(dates = [], date) {
  return dates.includes(date);
}

const NUMBER_DAYS_IN_WEEK = 7;
// This function returns a multidimentional representation
// of a month calendar
export function getWeekDates(date) {
  const momentDate = moment(date);
  const numberOfDays = momentDate.daysInMonth();
  const firstDay = momentDate.clone().date(1).startOf('week');
  const endDay = momentDate.clone().date(numberOfDays).endOf('week');

  const calendar = [];

  for (
    let i = 1;
    i <= endDay.diff(firstDay, 'days');
    i += NUMBER_DAYS_IN_WEEK
  ) {
    const startOfWeek = momentDate.clone().date(i).startOf('week');
    let week = [];
    for (let j = 0; j < NUMBER_DAYS_IN_WEEK; j++) {
      const day = startOfWeek.clone().add(j, 'day');
      week.push({
        sameMonth: moment(date).isSame(day, 'month'),
        date: day.toISOString(),
        isToday: moment().isSame(day, 'day'),
      });
    }
    calendar.push(week);
  }

  return calendar;
}
