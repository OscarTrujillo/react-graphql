import { gql } from '@apollo/client';

export const employee_list = gql`
  query EmployeeList {
    employees {
      id
      name
      email
    }
  }
`;
