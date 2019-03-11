import * as types from '../actionTypes';


export function mentalHealth(state = 101, action) {
  if (action.type === types.WATCH_NEWS) {
    return state - 20;
  }
  if (action.type === types.WIN_LOTTERY) {
    return state + 30;
  }
  return state;
}

export function physicalHealth(state = 99, action) {
  switch (action.type) {
    case types.SLIP_ON_BANANA:
      return state - 20;
    case types.WIN_LOTTERY:
      return state + 10;
    default:
      return state;
  }
}
