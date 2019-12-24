import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADDED,
  FETCHING_EMPLOYEES,
  EMPLOYEES_FETCHED,
  EMPLOYEES_FETCHED_ERROR
} from "./constants";

export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeeAdded = employee => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
};

export const fetchingEmployees = () => ({
  type: FETCHING_EMPLOYEES
});

export const employeesFetched = employees => ({
  type: EMPLOYEES_FETCHED,
  payload: { employees }
});

export const employeesFetchedError = () => ({
  type: EMPLOYEES_FETCHED_ERROR,
  payload: { error }
});
