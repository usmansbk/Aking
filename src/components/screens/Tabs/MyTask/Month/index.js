import React from 'react';
import {FlatTaskList} from '../TaskList';
import {Calendar} from '@components/common';

export default function Month() {
  const date = new Date();
  return (
    <>
      <Calendar />
      <FlatTaskList date={date} />
    </>
  );
}
