import { useState } from 'react';
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';
import {
  GooglesignInWithPopup,
  getDataFromAuht,
  signInUsingEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultForm = { email: '', password: '' };

const signInForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await GooglesignInWithPopup();
    await getDataFromAuht(user);
  };

  const restFormField = () => {
    setFormFields(defaultForm);
  };

  const hundleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUsingEmailAndPassword(email, password);
      console.log(response);
      restFormField();
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-login-credentials')
        alert(`the password is wrong`);
    }
  };

  const hundleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={hundleSubmit} className='p-8 blcok w-full '>
        <h2 className=' text-xl font-bold '>Already have an account</h2>
        <span>sign-in with your email</span>

        {/*email */}
        <FormInput
          label='Email'
          inputOption={{
            type: 'email',
            required: true,
            onChange: hundleChange,
            name: 'email',
            value: email,
          }}
        />

        {/*password */}
        <FormInput
          label='Password'
          inputOption={{
            type: 'password',
            required: true,
            onChange: hundleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className='flex justify-start items-center gap-3'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Sign-In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default signInForm;
