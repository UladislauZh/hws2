type State = {
  themeId: number;
};

const initState = {
  themeId: 1,
};

type ActionTypes = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (state = initState, action: ActionTypes): State => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };

    default:
      return state;
  }
};

export const changeThemeId = (id: number): ActionTypes => ({ type: "SET_THEME_ID", id }); // fix any
