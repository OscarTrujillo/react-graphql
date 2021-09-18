import { LazyQueryHookOptions, useLazyQuery } from '@apollo/client';
import * as React from 'react';
import ResponseView from './response.component';
import { print } from 'graphql/language/printer';
import { DocumentNode } from 'graphql/language/ast';

interface Props {
  queryDoc: DocumentNode;
  options?: LazyQueryHookOptions;
}

const ResponseContainer: React.FC<Props> = ({ queryDoc, options }) => {
  // const { data, error, loading } = query();
  const [loadGreeting, { called, loading, data, error }] = useLazyQuery(
    queryDoc,
    options,
  );

  if (called && loading) return <p>Loading ...</p>;

  if (!called) {
    return (
      <div>
        {/* {JSON.stringify(print(queryDoc))} */}
        {/* <p>{print(queryDoc)}</p> */}
        {/* todo: style it */}
        <div>
          <p>document: </p>

          {print(queryDoc)}
        </div>
        <div>
          <p>Options: </p>

          {JSON.stringify(options)}
        </div>

        <button onClick={() => loadGreeting()}>Load greeting</button>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        ERROR
        <button onClick={() => loadGreeting()}>Try again</button>;
      </div>
    );
  }

  return <ResponseView data={data} />;
};

export default ResponseContainer;
