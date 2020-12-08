import React, {
  useEffect,
  useCallback,
  useContext,
  useRef,
  useReducer,
} from 'react';

import { FormContextProvider } from '@context/FormContext';
import formReducer from './formReducer';

const useEventCallback = (fn) => {
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  });

  return useCallback((...args) => fnRef.current(...args), []);
};

function Former(props) {
  const { validationSchema, initialValues = {}, onSubmit } = props;

  if (!onSubmit) {
    throw new Error(
      'you must set onSubmit handler function to formGen component'
    );
  }

  const initialState = {
    values: initialValues,
    touched: {},
    errors: {},
    focused: {},
    isSubmitting: false,
    validationSchema,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    console.log('error', state.errors);
  }, [state]);

  const setFieldError = useCallback((field, error) => {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field,
        error,
      },
    });
  }, []);

  const setFieldValue = useCallback((field, value, shouldValidate = false) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field,
        value,
      },
    });

    if (!shouldValidate) {
      return;
    }

    const validate = validationSchema[field];

    if (validate === undefined) {
      return;
    }

    const errorObj = validate(value);
    const hasError = Object.keys(errorObj).length > 0;

    if (hasError) {
      setFieldError(field, errorObj);
    } else {
      setFieldError(field, {});
    }
  }, []);

  const setFieldTouched = useCallback((field, isTouched) => {
    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field,
        isTouched,
      },
    });
  }, []);

  const setFieldFocused = useCallback((field, isFocused) => {
    dispatch({
      type: 'SET_FIELD_FOCUSED',
      payload: {
        field,
        isFocused,
      },
    });
  }, []);

  const validateAllValues = () =>
    Object.entries(state.values).reduce((errors, [field, value]) => {
      const validate = state.validationSchema[field];

      if (validate === undefined) {
        return { ...errors };
      }

      const error = validate(value);

      const isValid = Object.keys(error).length === 0;

      if (isValid) {
        return { ...errors };
      }

      return { ...errors, [field]: error };
    }, {});

  const submitInit = useCallback(() => {
    dispatch({
      type: 'SUBMIT_INIT',
    });
  });

  const submitForm = (e) => {
    e.preventDefault();

    submitInit();

    const errors = validateAllValues();

    const isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      submitFailure();
      return console.error(errors);
    }

    try {
      onSubmit(state.values);
      submitSuccess();
    } catch (e) {
      console.error(e);
      submitFailure();
    }
  };

  const submitSuccess = useCallback(() => {
    dispatch({
      type: 'SUBMIT_SUCCESS',
    });
  });

  const submitFailure = useCallback(() => {
    dispatch({
      type: 'SUBMIT_FAILURE',
    });
  });

  const handleBlur = useEventCallback((e) => {
    const { name, value } = e.target;

    setFieldFocused(name, false);
    state.values[name].length > 0 && setFieldTouched(name, true);

    const validate = state.validationSchema[name];
    if (!validate) {
      return;
    }

    const error = validate(value);
    const hasError = Object.keys(error).length > 0;
    if (hasError) {
      setFieldError(name, error);
    } else {
      setFieldError(name, {});
    }
  });

  const handleChange = useEventCallback((e) => {
    const { name, value } = e.target;
    console.log(state.errors, 'handleChange');
    const error = state.errors[name];
    const hasError = error && Object.keys(error).length > 0;
    if (hasError) {
      setFieldValue(name, value, true);
    } else {
      setFieldValue(name, value);
    }
  });

  const handleFocus = useEventCallback((e) => {
    setFieldFocused(e.target.name, true);
  });

  const getFieldMeta = useCallback(
    (field) => ({
      value: state.values[field],
      error: state.errors[field],
      touched: state.touched[field],
    }),
    [state.values, state.errors, state.touched]
  );

  const getFieldProps = useCallback((field) => ({
    name: field,
    value: state.values[field],
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
  }));

  const getFieldHelpers = useCallback((field) => ({
    setValue: (value) => setFieldValue(field, value),
    setError: (error) => setFieldError(field, error),
    setTouched: (isTouched) => setFieldTouched(field, isTouched),
    setFocused: (isFocused) => setFieldFocused(field, isFocused),
  }));

  const getFormHelpers = useCallback(() => ({
    submitInit,
    submitSuccess,
    submitFailure,
  }));

  const providerValue = {
    ...state,
    setFieldValue,
    setFieldError,
    setFieldFocused,
    setFieldTouched,
    validateAllValues,
    submitInit,
    submitForm,
    submitSuccess,
    submitFailure,
    handleBlur,
    handleChange,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    getFormHelpers,
    submitForm,
  };

  return (
    <FormContextProvider value={providerValue}>
      {props.children(providerValue)}
    </FormContextProvider>
  );
}

export default Former;
