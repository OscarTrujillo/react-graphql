import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum AllowedState {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Employee = {
  __typename?: 'Employee';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ItemInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  assignOrder: Order;
  completeOrder: Order;
  createOrder: Order;
};


export type MutationAssignOrderArgs = {
  employeeEmail?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
};


export type MutationCompleteOrderArgs = {
  orderId: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  customerEmail: Scalars['String'];
  items: Array<ItemInput>;
};

export type Order = {
  __typename?: 'Order';
  customer: Customer;
  employee?: Maybe<Employee>;
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<Item>>>;
  state: AllowedState;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  employees: Array<Employee>;
  items: Array<Item>;
  order?: Maybe<Order>;
  orders: Array<Order>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type OrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderListQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string> }, items?: Maybe<Array<Maybe<{ __typename?: 'Item', id: string, name: string }>>> }> };


export const OrderListDocument = gql`
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

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderListQuery(baseOptions?: Apollo.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListDocument, options);
      }
export function useOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListDocument, options);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListLazyQueryHookResult = ReturnType<typeof useOrderListLazyQuery>;
export type OrderListQueryResult = Apollo.QueryResult<OrderListQuery, OrderListQueryVariables>;