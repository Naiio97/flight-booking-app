const setMessage = (state = '', action) => {
  switch (action.type) {
    case 'SETMESSAGE':
      return (state = action.payload);
    default:
      return state;
  }
};

export default setMessage;
