//FOR DISPATCHS

export const setUserRequest = (username) => ({
  type: "@user/SET_USER_REQUEST",
  username,
});

export const getUsersRequest = () => ({
  type: "@user/GET_USERS_REQUEST",
});

export const deleteUserRequest = (id) => ({
  type: "@user/DELETE_USER_REQUEST",
  id,
});

//FOR REDUCERS

export const fetchUserSuccess = (user) => ({
  type: "@user/FETCH_USER_SUCCESS",
  user,
});

export const fetchUsersSuccess = (users) => ({
  type: "@user/FETCH_USERS_SUCCESS",
  users,
});

// export const deleteUserSuccess = (users) => ({
//   type: "@user/DELETE_USER_SUCCESS",
//   users,
// });
