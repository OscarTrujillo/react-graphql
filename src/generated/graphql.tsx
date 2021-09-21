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
  amount: Scalars['Int'];
  id: Scalars['ID'];
};

export type ItemSelection = {
  __typename?: 'ItemSelection';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
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
  createdAt: Scalars['Float'];
  customer: Customer;
  employee?: Maybe<Employee>;
  id: Scalars['ID'];
  items: Array<Maybe<ItemSelection>>;
  state: AllowedState;
  updatedAt: Scalars['Float'];
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

export type CreateOrderMutationVariables = Exact<{
  customerEmail: Scalars['String'];
  items: Array<ItemInput> | ItemInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string>, email?: Maybe<string> }, items: Array<Maybe<{ __typename?: 'ItemSelection', id: string, name: string }>> } };

export type AssignOrderMutationVariables = Exact<{
  orderId: Scalars['String'];
  employeeEmail?: Maybe<Scalars['String']>;
}>;


export type AssignOrderMutation = { __typename?: 'Mutation', assignOrder: { __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string>, email?: Maybe<string> }, items: Array<Maybe<{ __typename?: 'ItemSelection', id: string, name: string }>>, employee?: Maybe<{ __typename?: 'Employee', id: string, email?: Maybe<string> }> } };

export type CompleteOrderMutationVariables = Exact<{
  orderId: Scalars['String'];
}>;


export type CompleteOrderMutation = { __typename?: 'Mutation', completeOrder: { __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string>, email?: Maybe<string> }, items: Array<Maybe<{ __typename?: 'ItemSelection', id: string, name: string }>>, employee?: Maybe<{ __typename?: 'Employee', id: string, email?: Maybe<string> }> } };

export type EmployeeListQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeeListQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', id: string, name?: Maybe<string>, email?: Maybe<string> }> };

export type ItemListQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemListQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: string, name: string, price: number }> };

export type OrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderListQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string>, email?: Maybe<string> }, items: Array<Maybe<{ __typename?: 'ItemSelection', id: string, name: string }>>, employee?: Maybe<{ __typename?: 'Employee', id: string, email?: Maybe<string> }> }> };

export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = { __typename?: 'Query', order?: Maybe<{ __typename?: 'Order', id: string, state: AllowedState, customer: { __typename?: 'Customer', id: string, name?: Maybe<string>, email?: Maybe<string> }, items: Array<Maybe<{ __typename?: 'ItemSelection', id: string, name: string }>>, employee?: Maybe<{ __typename?: 'Employee', id: string, name?: Maybe<string>, email?: Maybe<string> }> }> };


export const CreateOrderDocument = gql`
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
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      customerEmail: // value for 'customerEmail'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const AssignOrderDocument = gql`
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
export type AssignOrderMutationFn = Apollo.MutationFunction<AssignOrderMutation, AssignOrderMutationVariables>;

/**
 * __useAssignOrderMutation__
 *
 * To run a mutation, you first call `useAssignOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignOrderMutation, { data, loading, error }] = useAssignOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      employeeEmail: // value for 'employeeEmail'
 *   },
 * });
 */
export function useAssignOrderMutation(baseOptions?: Apollo.MutationHookOptions<AssignOrderMutation, AssignOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignOrderMutation, AssignOrderMutationVariables>(AssignOrderDocument, options);
      }
export type AssignOrderMutationHookResult = ReturnType<typeof useAssignOrderMutation>;
export type AssignOrderMutationResult = Apollo.MutationResult<AssignOrderMutation>;
export type AssignOrderMutationOptions = Apollo.BaseMutationOptions<AssignOrderMutation, AssignOrderMutationVariables>;
export const CompleteOrderDocument = gql`
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
export type CompleteOrderMutationFn = Apollo.MutationFunction<CompleteOrderMutation, CompleteOrderMutationVariables>;

/**
 * __useCompleteOrderMutation__
 *
 * To run a mutation, you first call `useCompleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeOrderMutation, { data, loading, error }] = useCompleteOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useCompleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<CompleteOrderMutation, CompleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteOrderMutation, CompleteOrderMutationVariables>(CompleteOrderDocument, options);
      }
export type CompleteOrderMutationHookResult = ReturnType<typeof useCompleteOrderMutation>;
export type CompleteOrderMutationResult = Apollo.MutationResult<CompleteOrderMutation>;
export type CompleteOrderMutationOptions = Apollo.BaseMutationOptions<CompleteOrderMutation, CompleteOrderMutationVariables>;
export const EmployeeListDocument = gql`
    query EmployeeList {
  employees {
    id
    name
    email
  }
}
    `;

/**
 * __useEmployeeListQuery__
 *
 * To run a query within a React component, call `useEmployeeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeListQuery({
 *   variables: {
 *   },
 * });
 */
export function useEmployeeListQuery(baseOptions?: Apollo.QueryHookOptions<EmployeeListQuery, EmployeeListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeeListQuery, EmployeeListQueryVariables>(EmployeeListDocument, options);
      }
export function useEmployeeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeeListQuery, EmployeeListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeeListQuery, EmployeeListQueryVariables>(EmployeeListDocument, options);
        }
export type EmployeeListQueryHookResult = ReturnType<typeof useEmployeeListQuery>;
export type EmployeeListLazyQueryHookResult = ReturnType<typeof useEmployeeListLazyQuery>;
export type EmployeeListQueryResult = Apollo.QueryResult<EmployeeListQuery, EmployeeListQueryVariables>;
export const ItemListDocument = gql`
    query ItemList {
  items {
    id
    name
    price
  }
}
    `;

/**
 * __useItemListQuery__
 *
 * To run a query within a React component, call `useItemListQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemListQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemListQuery(baseOptions?: Apollo.QueryHookOptions<ItemListQuery, ItemListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemListQuery, ItemListQueryVariables>(ItemListDocument, options);
      }
export function useItemListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemListQuery, ItemListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemListQuery, ItemListQueryVariables>(ItemListDocument, options);
        }
export type ItemListQueryHookResult = ReturnType<typeof useItemListQuery>;
export type ItemListLazyQueryHookResult = ReturnType<typeof useItemListLazyQuery>;
export type ItemListQueryResult = Apollo.QueryResult<ItemListQuery, ItemListQueryVariables>;
export const OrderListDocument = gql`
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
export const OrderDocument = gql`
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

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;