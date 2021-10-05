const initialState = [
  { id: 0, name: "Ali Rizo Sogoniy", email: "a@g.com", number: 21323 },
  { id: 1, name: "Alisher Rizayev", email: "r@g.com", number: 323689 },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
    default:
      return state;
  }
};

export default contactReducer;
