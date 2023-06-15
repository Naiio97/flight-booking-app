const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  seat: '',
};

const passengersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETPASSENGERS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default passengersReducer;
