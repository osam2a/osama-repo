import React from 'react';
const btnClass = {
  google: 'google-sign-in',
  inverted: 'inverted',
};
const Button = ({ children, buttonType, ...otherOption }) => {
  // console.log(className);
  return (
    <button
      className={`buttonContainer ${btnClass[buttonType]} `}
      {...otherOption}
    >
      {children}
    </button>
  );
};

export default Button;
