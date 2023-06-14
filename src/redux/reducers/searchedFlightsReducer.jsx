const searchedFlights = (state = [], action) => {
  switch (action.type) {
    case 'SETSEARCHEDFLIGHTS':
      return (state = action.payload);
    default:
      return state;
  }
};


export default searchedFlights;