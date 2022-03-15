const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
        return {
            ...state,
            users: action.payload.users,
            isLoading: action.payload.isLoading
        }
    case 'SET_LOADING':
        return {
            ...state,
            isLoading: true
        }
    case 'CLEAR_USERS':
        return {
            ...state,
            users: []
        }
    case 'GET_USER':
        return {
            ...state,
            user: action.payload.user,
            isLoading: action.payload.isLoading
        }
    case 'GET_REPOS':
        return {
            ...state,
            repos: action.payload.repos,
            isLoading: action.payload.isLoading
        }
    default:
      return state;
  }
};

export default githubReducer;
