import { MENU_CLOSE, MENU_OPEN } from "../constants";

const navMenuReducer = (state, action) => {
  switch (action.type) {
    case MENU_OPEN:
      return {
        ...state,
        isMenuOpen: true
      }
    case MENU_CLOSE:
      return {
        ...state,
        isMenuOpen: false
      }
    default:
      return state;
  }
}
export default navMenuReducer;