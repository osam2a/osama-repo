import { useState, useContext } from 'react';
import data from '../../data.json';
import Card from './Card';
import { NumberUser } from '../../context/user.context';
import CardIcon from '../../componet/cart-icon/CardIcon.component';
const Home = () => {
  const { currentNumber, setNumber } = useContext(NumberUser);
  const [category, setCategory] = useState(data.category);
  console.log(currentNumber);
  return (
    <>
      {' '}
      <header className='flex   [&>*:nth-child(4)]:bg-red-500 '>
        {category.map((elemnt) => {
          return <Card key={elemnt.id} {...elemnt} />;
        })}
        <div className='text-2xl  text bg-center p-1 m-auto bg-black rounded-lg'>
          <button
            type='button'
            className='active:bg-green-600 hover:bg-white rounded-xl transition-all text-3xl text-red-500 hover:text-black text bg-center px-2 py-3 m-auto'
            onClick={() => {
              setNumber(currentNumber + 1);
            }}
          >
            incrress 
          </button>
        </div>
      </header>
    </>
  );
};

export default Home;
