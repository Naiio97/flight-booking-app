const searchDate = (state = false, action) => {
  switch (action.type) {
    case 'SETSEARCHDATE':
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchDate;
