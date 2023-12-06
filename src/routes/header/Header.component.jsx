import { useState } from 'react';
import data from '../../data.json';
import Card from './Card';
const Header = () => {
  const [category, setCategory] = useState(data.category);

  return (
    <>
      {' '}
      <header className='flex   [&>*:nth-child(4)]:bg-red-500 '>
        {category.map((elemnt) => {
          return <Card key={elemnt.id} {...elemnt} />;
        })}
      </header>
    </>
  );
};

export default Header;
