import { useMutation } from '@apollo/client';
import * as React from 'react';
import { print } from 'graphql/language/printer';
import { Button } from '@mui/material';
import './query-detail.component.scss';
interface Props {
  selectedQuery: any;
  setQueryState: any;
}

const MutationDetail: React.FC<Props> = ({ selectedQuery, setQueryState }) => {
  const mutation = useMutation(selectedQuery.queryDoc, selectedQuery.options);
  const [loadMutation, { called, loading, data, error }] = mutation;

  React.useEffect(() => {
    setQueryState(mutation);
  }, [called, loading, data, error]);

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
      <Button onClick={() => loadMutation()} variant="outlined">
        Request
      </Button>
    </div>
  );
};

export default MutationDetail;
