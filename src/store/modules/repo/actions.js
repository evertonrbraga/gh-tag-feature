export const getStarredReposRequest = (username) => ({
  type: "@repo/GET_STARRED_REPOS_REQUEST",
  username,
});

export const fetchStarredReposSuccess = (repos) => ({
  type: "@repo/FETCH_STARRED_REPOS_SUCCESS",
  repos,
});
