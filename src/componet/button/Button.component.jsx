import React from 'react';
const btnClass = {
  google: 'google-sign-in',
  inverted: 'inverted',
};
const Button = ({ children, buttonType, moreProps, ...otherOption }) => {
  // console.log(className);
  return (
    <button
      className={`buttonContainer uppercase ${btnClass[buttonType]} ${moreProps} `}
      {...otherOption}
    >
      {children}
    </button>
  );
};

export default Button;
