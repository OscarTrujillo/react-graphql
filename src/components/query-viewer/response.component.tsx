import * as React from 'react';

interface Props {
  data: any;
}

const className = 'response';

const ResponseView: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Response:</h3>
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
);

export default ResponseView;
