import React from 'react';
import {FlatTaskList} from '../TaskList';
import {Calendar} from '@components/common';

export default function Month() {
  return (
    <>
      <Calendar />
      <FlatTaskList />
    </>
  );
}
