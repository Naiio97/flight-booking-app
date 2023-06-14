const searchTo = (state = false, action) => {
  switch (action.type) {
    case 'SETSEARCHTO':
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchTo;
