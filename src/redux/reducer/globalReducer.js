import ActionType from "./globalActionType";

const globalState = {
  isLogin: true,
  triplist: [
    {
      title: "Jakarta - Bali",
      price: 2000000,
    },
    {
      title: "Jakarta - Solo",
      price: 1000000,
    },
    {
      title: "Jakarta - Bandung",
      price: 500000,
    },
    {
      title: "Jakarta - Sukabumi",
      price: 300000,
    },
    {
      title: "Jakarta - Papua",
      price: 12000000,
    },
    {
      title: "Jakarta - Aceh",
      price: 9000000,
    },
  ],
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
