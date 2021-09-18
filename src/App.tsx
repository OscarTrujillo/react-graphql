import * as React from 'react';
import OrderContainer from './components/order/order';
import ControlledAccordions from './components/query-viewer/query-list.component';
const App = () => {
  return (
    <div className="app">
      <h3> Welcome to React </h3>
      <OrderContainer />
      <ControlledAccordions />
    </div>
  );
};
export default App;
