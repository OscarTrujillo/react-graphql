import * as React from 'react';
import ControlledAccordions from './components/query-viewer/query-list.component';
import ResponseContainer from './components/query-viewer/response-container.component';
import {
  EmployeeListDocument,
  ItemListDocument,
  OrderDocument,
  OrderListDocument,
} from './generated/graphql';
import './App.scss';
import { Paper } from '@mui/material';

const App = () => {
  const queryList = [
    {
      name: 'EmployeeList',
      type: 'Query',
      queryDoc: EmployeeListDocument,
    },
    {
      name: 'ItemList',
      type: 'Query',
      queryDoc: ItemListDocument,
    },
    {
      name: 'OrderList',
      type: 'Query',
      queryDoc: OrderListDocument,
    },
    {
      name: 'Order',
      type: 'Query',
      queryDoc: OrderDocument,
      options: {
        variables: { id: 'ed8484ee-6384-4aa8-a2c5-dcfc5f6066fe' },
      },
    },
  ];

  const [queryState, setQueryState] = React.useState(null);
  const [optionsState, setOptionsState] = React.useState(null);
  const [queryDocState, setSueryDocState] = React.useState(null);

  const [selectedQueryIndex, setSelectedQueryIndex] = React.useState(null);

  React.useEffect(() => {
    if (selectedQueryIndex !== false) {
      const selectedQuery = queryList[selectedQueryIndex];

      setOptionsState(selectedQuery && selectedQuery.options);
      setSueryDocState(selectedQuery && selectedQuery?.queryDoc);
    }
  }, [selectedQueryIndex]);

  return (
    <div className="app">
      <h3> Welcome to React </h3>
      <div>
        <ControlledAccordions
          queryList={queryList}
          queryDoc={queryDocState}
          options={optionsState}
          setSelectedQuery={setSelectedQueryIndex}
          setQueryState={setQueryState}
        />
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
