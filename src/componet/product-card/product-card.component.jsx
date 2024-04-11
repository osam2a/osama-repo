import Button from '../button/Button.component';

const PorductCard = ({ props }) => {
  const { id, name, imageUrl, price } = props;
  // console.log(props.id);
  return (
    <div className='group relative flex flex-col items-center justify-center gap-1'>
      <div className=' h-4/6 overflow-hidden'>
        <img src={imageUrl} alt={name} />
      </div>

      <span className='name text-xl font-bold'>{name}</span>

      <span className='price text-lg font-bold'>{price}</span>

      <Button
        type='button'
        buttonType='inverted'
        moreProps='uppercase w-3/5 font-bold absolute bottom-1/3 left-1/2 -translate-x-1/2 - hidden group-hover:block'
      >
        add to cart
      </Button>
    </div>
  );
};

export default PorductCard;
