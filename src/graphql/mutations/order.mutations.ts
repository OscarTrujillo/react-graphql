import { ItemInput } from './../../generated/graphql';
import { gql } from '@apollo/client';

export const create_order = gql`
  mutation CreateOrder($customerEmail: String!, $items: [ItemInput!]!) {
    createOrder(customerEmail: $customerEmail, items: $items) {
      id
      customer {
        id
        name
        email
      }
      items {
        id
        name
      }
      state
    }
  }
`;

export const assing_order = gql`
  mutation AssignOrder($orderId: String!, $employeeEmail: String) {
    assignOrder(orderId: $orderId, employeeEmail: $employeeEmail) {
      id
      customer {
        id
        name
        email
      }
      items {
        id
        name
      }
      state
      employee {
        id
        email
      }
    }
  }
`;

export const complete_order = gql`
  mutation CompleteOrder($orderId: String!) {
    completeOrder(orderId: $orderId) {
      id
      customer {
        id
        name
        email
      }
      items {
        id
        name
      }
      state
      employee {
        id
        email
      }
    }
  }
`;
