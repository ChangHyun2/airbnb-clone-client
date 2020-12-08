const formReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_FIELD_VALUE': {
      const { field, value } = payload;

      return {
        ...state,
        values: {
          ...state.values,
          [field]: value,
        },
      };
    }
    case 'SET_FIELD_ERROR': {
      const { field, error } = payload;
      console.log('set field error', field, error);

      return {
        ...state,
        errors: {
          ...state.errors,
          [field]: error,
        },
      };
    }
    case 'SET_FIELD_TOUCHED': {
      const { field, isTouched } = payload;

      return {
        ...state,
        touched: {
          ...state.touched,
          [field]: isTouched,
        },
      };
    }
    case 'SET_FIELD_FOCUSED': {
      const { field, isFocused } = payload;

      return {
        ...state,
        focused: {
          ...state.focused,
          [field]: isFocused,
        },
      };
    }
    case 'SUBMIT_INIT': {
      return {
        ...state,
        isSubmitting: true,
      };
    }
    case 'SUBMIT_SUCCESS': {
      return {
        ...state,
        isSubmitting: false,
      };
    }
    case 'SUBMIT_FAILURE': {
      return {
        ...state,
        isSubmitting: false,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
