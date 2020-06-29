const checkboxReducer = (state, action) => {
  console.log(`action: ${JSON.stringify(action)}`);
  console.log(`state: ${JSON.stringify(state)}`);

  switch (action.type) {
    case "ROW_CLICKED":
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    default:
      throw new Error("Invalid action type");
  }
};

export default checkboxReducer;
