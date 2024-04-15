import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button/Button.component';

const FontIcon = ({ nameIcon, moreProps, ...otherOption }) => {
  return (
    <Button
      {...otherOption}
      className={`${moreProps} bg-white absolute top-0 right-0 text-cyan-500 active:text-red-500 text-lg`}
    >
      <FontAwesomeIcon icon={nameIcon} />
    </Button>
  );
};

export default FontIcon;
