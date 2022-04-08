const twitterReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
      case 'SET_LOADING':
        return {
            ...state,
            isLoading: true
        }
    default:
      return state;
  }
};

export default twitterReducer;
