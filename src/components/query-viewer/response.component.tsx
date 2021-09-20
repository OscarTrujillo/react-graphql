import * as React from 'react';

interface Props {
  data: any;
}

const className = 'response';

const ResponseView: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <span>Response:</span>
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
);

export default ResponseView;
