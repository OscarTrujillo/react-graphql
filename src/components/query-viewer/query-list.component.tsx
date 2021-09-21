import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AssignOrderDocument,
  CompleteOrderDocument,
  CreateOrderDocument,
  EmployeeListDocument,
  ItemListDocument,
  OrderDocument,
  OrderListDocument,
} from './../../generated/graphql';
import QueryDetail from './query-detail.component';
import MutationDetail from './mutation-detail.component';
import { IQueryList } from '../../App';
import { OperationVariables, QueryTuple } from '@apollo/client';

enum queryType {
  Query = 'Query',
  Mutation = 'Mutation',
}

interface Props {
  setQueryState: React.Dispatch<QueryTuple<any, OperationVariables>>;
}
const QueryList: React.FC<Props> = ({ setQueryState }) => {
  const queryList = [
    {
      name: 'EmployeeList',
      type: queryType.Query,
      queryDoc: EmployeeListDocument,
    },
    {
      name: 'ItemList',
      type: queryType.Query,
      queryDoc: ItemListDocument,
    },
    {
      name: 'OrderList',
      type: queryType.Query,
      queryDoc: OrderListDocument,
    },
    {
      name: 'OrderById',
      type: queryType.Query,
      queryDoc: OrderDocument,
      options: {
        variables: { id: 'ed8484ee-6384-4aa8-a2c5-dcfc5f6066fe' },
      },
    },
    {
      name: 'CreateOrder',
      type: queryType.Mutation,
      queryDoc: CreateOrderDocument,
      options: {
        variables: {
          customerEmail: 'homer@mail.com',
          items: [{ id: 'c63330af-ce62-44c1-9393-f520df960e75', amount: 3 }],
        },
      },
    },
    {
      name: 'AssignOrder',
      type: queryType.Mutation,
      queryDoc: AssignOrderDocument,
      options: {
        variables: {
          orderId: 'ed8484ee-6384-4aa8-a2c5-dcfc5f6066fe',
          employeeEmail: 'alice@mail.com',
        },
      },
    },
    {
      name: 'CompleteOrder',
      type: queryType.Mutation,
      queryDoc: CompleteOrderDocument,
      options: {
        variables: {
          orderId: 'ed8484ee-6384-4aa8-a2c5-dcfc5f6066fe',
        },
      },
    },
  ];

  const [expanded, setExpanded] = React.useState<number | false>(false);
  const [selectedQueryState, setSelectedQueryState] =
    React.useState<IQueryList>(null);

  const className = 'query-list';

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  React.useEffect(() => {
    if (expanded >= 0) {
      const selectedQuery = queryList[expanded as number];
      setSelectedQueryState(selectedQuery);
    }
  }, [expanded]);

  return (
    <div className={className}>
      {!!queryList &&
        queryList.map(
          (query, i) =>
            !!query && (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {query.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {query.type}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* inject only when accordion is open */}
                  {expanded === i &&
                    selectedQueryState &&
                    selectedQueryState.type === queryType.Query && (
                      <QueryDetail
                        setQueryState={setQueryState}
                        selectedQuery={selectedQueryState}
                      />
                    )}
                  {expanded === i &&
                    selectedQueryState &&
                    selectedQueryState.type === queryType.Mutation && (
                      <MutationDetail
                        setQueryState={setQueryState}
                        selectedQuery={selectedQueryState}
                      />
                    )}
                </AccordionDetails>
              </Accordion>
            ),
        )}
    </div>
  );
};

export default QueryList;
