export const setFlights = (arr) => {
  return {
    type: 'SETFLIGHTS',
    payload: arr,
  };
};

export const setSearchedFlights = (arr) => {
  return {
    type: 'SETSEARCHEDFLIGHTS',
    payload: arr,
  };
};

export const setSearchFrom = (bool) => {
  return {
    type: 'SETSEARCHFROM',
    payload: bool,
  };
};

export const setSearchTo = (bool) => {
  return {
    type: 'SETSEARCHTO',
    payload: bool,
  };
};

export const setSearchDate = (bool) => {
  return {
    type: 'SETSEARCHDATE',
    payload: bool,
  };
};

export const setSearchCountPassengers = (passengers = 1) => {
  return {
    type: 'SETSEARCHCOUNTPASSENGERS',
    payload: passengers,
  };
};

export const setPassengers = (passengers) => {
  return {
    type: 'SETPASSENGERS',
    payload: passengers,
  };
};


export const setMessage = (arr) => {
  return {
    type: 'SETMESSAGE',
    payload: arr,
  };
};
