import React from 'react';
import { generalStore } from '../store/generalStore';
import { Button } from 'antd';
import { shallow } from 'zustand/shallow';

const Section2 = () => {
  const { secondBear, setSecondBear } = generalStore(
    (state) => ({
      secondBear: state.secondBear,
      setSecondBear: state.setSecondBear
    }),
    shallow
  );
  console.log('secondBear: ', secondBear);

  const handleClick = () => {
    setSecondBear({ ...secondBear, sex: 'male' });
  };
  return (
    <div className='w-40 p-4 mx-auto my-10 border border-red-700 rounded-md'>
      <p>{secondBear.sex ? secondBear.sex : secondBear.age}</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default Section2;
