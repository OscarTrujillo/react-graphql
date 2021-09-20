import { OperationVariables, QueryTuple } from '@apollo/client';
import * as React from 'react';
import ResponseView from './response.component';

interface Props {
  queryState: QueryTuple<any, OperationVariables>;
}
const ResponseContainer: React.FC<Props> = ({ queryState }) => {
  if (queryState) {
    const [_loadGreeting, { called, loading, data, error }] = queryState;

    if (called && loading) return <p>Loading ...</p>;

    if (!called) {
      return <div>call</div>;
    }

    if (error || !data) {
      return <div>ERROR</div>;
    }

    return <ResponseView data={data} />;
  }
  return <div>Select a query</div>;
};

export default ResponseContainer;
