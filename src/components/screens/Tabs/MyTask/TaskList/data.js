import shortid from 'shortid';
import moment from 'moment';

const CALENDAR_FORMAT = {
  sameDay: '[Today,] MMM DD/YYYY',
  nextDay: '[Tomorrow,] MMM DD/YYYY',
  nextWeek: 'dddd, MMM DD/YYYY',
  lastDay: '[Yesterday,] MMM DD/YYYY',
  lastWeek: '[Last] dddd MMM DD/YYYY',
  sameElse: 'MMM DD/YYYY',
};

function getTitle(date = moment()) {
  return moment(date).calendar(null, CALENDAR_FORMAT);
}

export default [
  {
    title: getTitle(),
    data: [
      {
        id: shortid.generate(),
        title: 'Go fishing with Stephen',
        time: '9:00am',
        completed: false,
      },
      {
        id: shortid.generate(),
        title: 'Meet according with design team',
        time: '9:00am',
        completed: true,
      },
      {
        id: shortid.generate(),
        title: 'Go fishing with Stephen',
        time: '9:00am',
        completed: false,
      },
    ],
  },
  {
    title: getTitle(moment().add(1, 'day')),
    data: [
      {
        id: shortid.generate(),
        title: 'Read the book Zlatan',
        time: '9:00am',
        completed: false,
      },
      {
        id: shortid.generate(),
        title: 'Meet according with design team',
        time: '9:00am',
        completed: true,
      },
      {
        id: shortid.generate(),
        title: 'Go fishing with Stephen',
        time: '9:00am',
        completed: false,
      },
    ],
  },
];
