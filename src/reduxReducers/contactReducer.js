// declaring initial state
const initialState = [];
// initiating reducer and implementing fetch, addItem, removeItem functionality
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return action.payload;
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      //updating state
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      return filterContacts;
    default:
      return state;
  }
};

export default contactReducer;
