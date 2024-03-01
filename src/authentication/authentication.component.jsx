import SignUp from '../componet/signUpForm/signUpForm.component';
import SignIn from '../componet/signInForm/signIn.component';
const Authentaction = () => {
  return (
    <div className='flex justify-between items-center m-auto w-[900px] max-md:flex-col'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentaction;
