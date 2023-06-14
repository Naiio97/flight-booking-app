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

export const setPassengers = (passengerData) => {
  return {
    type: 'SETPASSENGERS',
    payload: passengerData,
  };
};

