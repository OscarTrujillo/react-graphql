import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  EmployeeListDocument,
  ItemListDocument,
  OrderDocument,
  OrderListDocument,
} from './../../generated/graphql';
import QueryDetail from './query-detail.component';
import { IQueryList } from '../../App';
import { OperationVariables, QueryTuple } from '@apollo/client';

interface Props {
  setQueryState: React.Dispatch<QueryTuple<any, OperationVariables>>;
}
const QueryList: React.FC<Props> = ({ setQueryState }) => {
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

  const [expanded, setExpanded] = React.useState<number | false>(false);
  const [selectedQueryState, setSelectedQueryState] =
    React.useState<IQueryList>(null);

  const className = 'query-list';

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  React.useEffect(() => {
    setExpanded(expanded);
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
                  {expanded === i && selectedQueryState && (
                    <QueryDetail
                      setQueryState={setQueryState}
                      selectedQuery={selectedQueryState}
                      // queryDoc={queryDoc}
                      // options={options}
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
