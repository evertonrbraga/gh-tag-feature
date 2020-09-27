const INIT_STATE = {
  starredRepos: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "@repo/FETCH_STARRED_REPOS_SUCCESS": {
      console.log(">>>>action repos:", action);

      return {
        ...state,
        starredRepos: action.repos,
      };
    }
    default:
      return state;
  }
};
