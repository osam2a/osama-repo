import { useState, useContext } from 'react';
import { Form } from 'react-router-dom';
import { NumberUser } from '../../context/user.context';
const home = () => {
  const [tag, setTag] = useState(true);
  const { currentNumber, setNumber } = useContext(NumberUser);
  return (
    <>
      <h1 className='text-5xl m-auto font-bold w-fit'>this page Home</h1>
      <button
        onClick={() => {
          setTag(!tag);
        }}
      >
        {' '}
        show{' '}
      </button>

      <div>
        <h1 className={`${tag ? `block` : `hidden`} bg-teal-700 text-2xl`}>
          {currentNumber}
        </h1>
      </div>
    </>
  );
};

export default home;
