const INIT_STATE = {
  users: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "@user/FETCH_USER_SUCCESS": {
      return {
        ...state,
        users: [...state.users, action.user],
      };
    }
    default:
      return state;
  }
};
