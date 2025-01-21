const initialState = {
  main: {
    preferiti: {},
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "Preferiti":
      return {
        ...state,
        main: {
          ...state.main,
          preferiti: state.main.preferiti + action.aggiungi,
        },
      };
  }
};

export default mainReducer;
