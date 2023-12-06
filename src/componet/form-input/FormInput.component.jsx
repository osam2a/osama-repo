const FormInput = ({ label, inputOption }) => {
  return (
    <div className='relative my-10  px-5 w-96 max-md:w-80'>
      <input
        {...inputOption}
        title={label}
        className='peer border-b  bg-transparent  outline-none  text-gray-600 text-lg block w-full rounded-none invalid:text-red-700 '
      />
      <label
        className={`
        ${inputOption.value && 'shrinkLabel'}
        peer-focus-within:shrinkLabel
     -z-10  absolute  duration-200 ease-in top-1 left-5`}
        htmlFor={inputOption.name}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
