import React, { useMemo } from 'react';
import { generalStore, trade5Store } from '../store/generalStore';
import { Button } from 'antd';
import { shallow } from 'zustand/shallow';

const Section1 = () => {
  const { firstBear, setFirstBear } = generalStore(
    (state) => ({
      firstBear: state.firstBear,
      setFirstBear: state.setFirstBear
    }),
    shallow
  );
  const { findingDetailList } = trade5Store();
  const { severityPoint, frequencyPoint, points } = findingDetailList[0];
  console.log(severityPoint);

  console.log('sec 1 re-render');
  const handleClick = () => {
    setFirstBear({ ...firstBear, name: 'male' });
  };
  return (
    <div className='w-40 p-4 mx-auto my-10 border border-red-700 rounded-md'>
      <p>{firstBear ? firstBear.name : 'non- sex'}</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default Section1;
