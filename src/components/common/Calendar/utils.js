import moment from 'moment';

export function formatMonth(date) {
  return moment(date).format('MMMM YYYY').toUpperCase();
}

export function dates(month) {
  const arr = [];
  for (let i = 1; i < moment(month).daysInMonth(); i++) {
    arr.push(i);
  }
  return arr;
}

export function range(start, end) {
  const arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
}
