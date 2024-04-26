import { useNavigate } from 'react-router-dom';
import Button from '../../componet/button/Button.component';
const Card = (props) => {
  const { id, title, img } = props;
  const navigate = useNavigate();
  const moveToCategory = () => navigate(`/shop/${title}`);
  return (
    <div
      key={id}
      id={id}
      onClick={moveToCategory}
      className={`group bg-[url( ".${img}")] bg-gray-500 bg-center bg-[length:100%] bg-no-repeat transition-all hover:bg-[length:110%]
      min-w-[30%] h-60 flex grow shrink basis-1 items-center justify-center border border-black overflow-hidden cursor-pointer `}
    >
      <Button buttonType='inverted'>
        <h1 className='text-xl font-bold'>{title.toUpperCase()}</h1>
        <p>SHOP NOW</p>
      </Button>
    </div>
  );
};

export default Card;
