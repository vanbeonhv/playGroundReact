import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

const App = () => {
  return (
    <div className='h-screen pt-16 text-center bg-slate-200'>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default App;
