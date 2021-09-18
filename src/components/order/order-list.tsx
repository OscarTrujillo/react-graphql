import { OrderListQuery } from '../../generated/graphql';
import * as React from 'react';

interface Props {
  data: OrderListQuery;
}

const className = 'LaunchList';

const OrderList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Orders</h3>
    <ol className={`${className}__list`}>
      {!!data.orders &&
        data.orders.map(
          (order, i) =>
            !!order && (
              <li key={i} className={`${className}__item`}>
                {order.id} ({order.customer.email})
              </li>
            ),
        )}
    </ol>
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
);

export default OrderList;
