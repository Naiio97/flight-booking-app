const flights = (state = [], action) => {
  switch (action.type) {
    case 'SETFLIGHTS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default flights;
