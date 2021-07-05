import { Done, Remove, Close } from '@material-ui/icons';
import React from 'react';
import { usePasswordContext } from '../PasswordContextProvider';

const CriteriaIcon = ({ isValid }: { isValid: boolean }) => {
  const { state } = usePasswordContext();
  const { touched, value } = state;

  if (!touched && value.length < 1) {
    return <Remove />;
  }

  return <>{isValid ? <Done /> : <Close />}</>;
};

export default CriteriaIcon;
