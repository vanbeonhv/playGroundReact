import { Button } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { trade5Store } from '../store/generalStore';
import Sub1 from './Sub1';
import { shallow } from 'zustand/shallow';
const arr = [1, 2, 3, 4, 5, 6];

const Section3 = () => {
  const { findingDetailList } = trade5Store();
  const { severityPoint, frequencyPoint, points } = findingDetailList[0];
  const setFindingDetailProperty = trade5Store(
    (state) => state.setFindingDetailProperty,
    shallow
  );
  console.log(severityPoint);
  const handleClick = (e) => {
    setFindingDetailProperty(0, 'severityPoint', e.target.value);
  };
  return (
    <div className='w-40 p-4 mx-auto my-10 border border-red-700 rounded-md'>
      <Sub1 />
      {/* <Button onClick={handleClick}>Click</Button> */}
      <input type='text' onChange={handleClick} />
    </div>
  );
};

export default Section3;
