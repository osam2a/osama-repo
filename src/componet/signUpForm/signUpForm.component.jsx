import { useState } from 'react';
import {
  signUpUsingEmailAndPassword,
  getDataFromAuht,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';

const defaultForm = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = formFields;

  const restFormField = () => {
    setFormFields(defaultForm);
  };
  const hundleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('the password is wrong ');
      return;
    }
    try {
      const { user } = await signUpUsingEmailAndPassword(email, password);
      await getDataFromAuht(user, { displayName });
      restFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('this email is already used');
      else console.log('the error ', error);
    }
  };
  const hundleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <form onSubmit={hundleSubmit} className='p-8 blcok w-full'>
        <h2 className=' text-xl font-bold '>Sign-Up Right Now</h2>
        <span>sign-up with your email</span>

        {/*display name */}
        <FormInput
          label='Display Name'
          inputOption={{
            autoFocus: true,
            type: 'text',
            required: true,
            onChange: hundleChange,
            name: 'displayName',
            value: displayName,
          }}
        />

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
        {/*Confirm Password*/}
        <FormInput
          label='Confirm Password'
          inputOption={{
            type: 'password',
            required: true,
            onChange: hundleChange,
            name: 'confirmPassword',
            value: confirmPassword,
          }}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default signUpForm;
