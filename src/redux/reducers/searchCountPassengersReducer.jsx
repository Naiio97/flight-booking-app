const searchCountPassengers = (state = 1, action) => {
  switch (action.type) {
    case 'SETSEARCHCOUNTPASSENGERS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchCountPassengers;
