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
                {order.id} ({order.customer.name})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default OrderList;
