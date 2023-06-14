const searchFrom = (state = false, action) => {
  switch (action.type) {
    case 'SETSEARCHFROM':
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchFrom;
