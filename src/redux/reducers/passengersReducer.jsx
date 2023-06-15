const passengerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETPASSENGERS':
      return action.payload;
    case 'ADDPASSENGER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default passengerReducer;
