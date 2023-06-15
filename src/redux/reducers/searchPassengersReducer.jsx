const searchPassengers = (state = 1, action) => {
  switch (action.type) {
    case 'SETSEARCHPASSENGERS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchPassengers;
