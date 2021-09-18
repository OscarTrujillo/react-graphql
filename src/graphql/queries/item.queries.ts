import { gql } from '@apollo/client';

export const item_list = gql`
  query ItemList {
    items {
      id
      name
      price
    }
  }
`;
