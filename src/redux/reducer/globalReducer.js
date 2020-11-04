import ActionType from "./globalActionType";

const globalState = {
  isLogin: false,
};

//Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.CHG_STATUSLOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
  }
  return state;
};

export default rootReducer;
