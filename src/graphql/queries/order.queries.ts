import { gql } from '@apollo/client';

export const order_list = gql`
  query OrderList {
    orders {
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

export const order = gql`
  query Order($id: ID!) {
    order(id: $id) {
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
        name
        email
      }
    }
  }
`;
