import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADDED,
  FETCHING_EMPLOYEES,
  EMPLOYEES_FETCHED,
  EMPLOYEES_FETCHED_ERROR
} from "./constants";

export const initialState = {
  employees: [],
  loading: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      return { ...state, employees: [...state.employees, employee] };
    }
    case FETCHING_EMPLOYEES: {
      return { ...state, loading: true };
    }
    case EMPLOYEES_FETCHED: {
      const { employees } = action.payload;
      return { ...state, loading: false, employees };
    }
    case EMPLOYEES_FETCHED_ERROR: {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
};

export default appReducer;
