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
} from '../../generated/graphql';

import ResponseContainer from './response-container.component';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

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

  const className = 'query-list';

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={className}>
      {!!queryList &&
        queryList.map(
          (query, i) =>
            !!query && (
              <Accordion
                expanded={expanded === `panel_${i}`}
                onChange={handleChange(`panel_${i}`)}
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
                  <ResponseContainer
                    queryDoc={query.queryDoc}
                    options={query.options}
                  />
                </AccordionDetails>
              </Accordion>
            ),
        )}
    </div>
  );
}
