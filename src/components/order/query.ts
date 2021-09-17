import { gql } from '@apollo/client';

export const order_list = gql`
  query OrderList {
    orders {
        id
        customer {
            id
            name
        }
        state
        items {
            id
            name
        }
    }
  }
`;