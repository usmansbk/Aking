import React from 'react';
import TaskList from '../TaskList';
import {Calendar} from '@components/common';

export default function Month() {
  return (
    <>
      <Calendar />
      <TaskList />
    </>
  );
}
