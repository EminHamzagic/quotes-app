const userReducer = (state, { type, value }) => {
  switch (type) {
    case "setToken":
      return { ...state, accessToken: value };

    case "clearToken":
      return { accessToken: null };

    default:
      return new Error("Function not found!");
  }
};

export default userReducer;
