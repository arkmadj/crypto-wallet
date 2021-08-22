export interface ActivePageAction {
  type: string;
  page: string;
}

const initState = {
  activePage: "dashboard",
};

const activePageReducer = (state = initState, action: ActivePageAction) => {
    // console.log(action)
    // console.log(state)
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.page };
    default:
      return state;
  }
};

export default activePageReducer;