const passengerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETPASSENGERS':
      return action.payload;
    default:
      return state;
  }
};

export default passengerReducer;
