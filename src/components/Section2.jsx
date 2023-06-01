import React from 'react';
import { generalStore } from '../store/generalStore';
import { Button } from 'antd';

const Section2 = () => {
  const { secondBear, setSecondBear } = generalStore();
  console.log('secondBear: ', secondBear);

  const handleClick = () => {
    setSecondBear({ ...secondBear, sex: 'male' });
  };
  return (
    <div className='w-40 p-4 mx-auto my-10 border border-red-700 rounded-md'>
      <p>{secondBear ? secondBear.age : 'no value bear'}</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default Section2;
