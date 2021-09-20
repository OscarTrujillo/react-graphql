import * as React from 'react';
import QueryList from './components/query-viewer/query-list.component';
import ResponseContainer from './components/query-viewer/response-container.component';

import './App.scss';
import { Paper } from '@mui/material';
import { DocumentNode } from 'graphql/language/ast';
import {
  LazyQueryHookOptions,
  OperationVariables,
  QueryTuple,
} from '@apollo/client';

export interface IQueryList {
  name: string;
  type: string;
  queryDoc: DocumentNode;
  options?: LazyQueryHookOptions<any, OperationVariables>;
}

const App = () => {
  const [queryState, setQueryState] =
    React.useState<QueryTuple<any, OperationVariables>>(null);

  return (
    <div className="app">
      <h3> Welcome to React </h3>
      <div>
        <QueryList setQueryState={setQueryState} />
        <div className="response-container">
          <Paper elevation={3}>
            <ResponseContainer queryState={queryState} />
          </Paper>
        </div>
      </div>
    </div>
  );
};
export default App;
