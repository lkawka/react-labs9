import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchingEmployees, employeesFetched, employeesFetchedError } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    if (!this.props.employees) {
      this.props.fetchEmployees();
    }
  }

  render() {
    const { isLoading, employees } = this.props;

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    isLoading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
})

function fetchEmployees() {
  return dispatch => {
    dispatch(fetchingEmployees());
    fetch('http://localhost:3004/employees')
      .then(data => data.json())
      .then(employees => dispatch(employeesFetched(employees)))
      .catch(error => dispatch(employeesFetchedError(error)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)