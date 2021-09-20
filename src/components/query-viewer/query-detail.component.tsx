import { LazyQueryHookOptions, useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { print } from 'graphql/language/printer';
import { DocumentNode } from 'graphql/language/ast';
import { Button } from '@mui/material';
import './query-detail.component.scss';
interface Props {
  queryDoc: DocumentNode;
  options?: LazyQueryHookOptions;
  setQueryState: any;
}

const QueryDetail: React.FC<Props> = ({ queryDoc, options, setQueryState }) => {
  const query = useLazyQuery(queryDoc, options);
  // const [loadGreeting, { called, loading, data, error }] = query;
  const loadGreeting = query[0];

  setQueryState(query);

  return (
    <div>
      {/* {JSON.stringify(print(queryDoc))} */}
      {/* <p>{print(queryDoc)}</p> */}
      {/* todo: style it */}
      <div>
        <p>Document: </p>

        {print(queryDoc)}
      </div>
      <div>
        <p>Options: </p>

        {JSON.stringify(options)}
      </div>
      <Button onClick={() => loadGreeting()} variant="outlined">
        Make request
      </Button>
    </div>
  );
};

export default QueryDetail;
