const userReducer = (state, { value, type }) => {
  switch (type) {
    case "setToken":
      return { ...state, accessToken: value };

    default:
      return new Error("Function not found!");
  }
};

export default userReducer;
