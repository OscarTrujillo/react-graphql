import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { print } from 'graphql/language/printer';
import { Button } from '@mui/material';
import './query-detail.component.scss';
interface Props {
  selectedQuery: any;
  setQueryState: any;
}

const QueryDetail: React.FC<Props> = ({ selectedQuery, setQueryState }) => {
  const query = useLazyQuery(selectedQuery.queryDoc, selectedQuery.options);
  // const [loadGreeting, { called, loading, data, error }] = query;
  const loadGreeting = query[0];

  React.useEffect(() => {
    setQueryState(query);
  }, [query]);

  return (
    <div>
      <div>
        <p>Document: </p>

        {print(selectedQuery.queryDoc)}
      </div>
      <div>
        <p>Options: </p>

        {JSON.stringify(selectedQuery.options)}
      </div>
      <Button onClick={() => loadGreeting()} variant="outlined">
        Make request
      </Button>
    </div>
  );
};

export default QueryDetail;
