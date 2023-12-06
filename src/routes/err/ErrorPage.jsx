import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='m-auto mt-48 text-2xl font-bold w-fit flex flex-col justify-center items-center'
    >
      <h1 className='text-5xl'>{error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
