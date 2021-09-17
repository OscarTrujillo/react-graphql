import * as React from 'react';
import { useOrderListQuery } from '../../generated/graphql';
import OrderList from './order-list';

const OrderContainer = () => {
  const { data, error, loading } = useOrderListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <OrderList data={data} />;
};

export default OrderContainer;
