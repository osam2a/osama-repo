const Card = (props) => {
  const { id, title, img } = props;
  return (
    <div
      key={id}
      id={id}
      className='list-disc bg-green-400  w-52 h-52 flex justify-center items-center bg-'
    >
      <div className='border flex justify-center items-center flex-col gap-2  p-2 w-fit '>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Card;
