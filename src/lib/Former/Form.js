import React from 'react';
import { useFormContext } from './FormContext';

export const Form = ({ children }) => {
  const { submitForm } = useFormContext();

  return <form onSubmit={submitForm}>{children}</form>;
};
