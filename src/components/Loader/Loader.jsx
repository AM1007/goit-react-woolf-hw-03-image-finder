import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.wrapper}>
      <InfinitySpin width="200" color="#3f51b5" />
    </div>
  );
};
