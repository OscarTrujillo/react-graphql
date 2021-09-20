import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import QueryDetail from './query-detail.component';
import { LazyQueryHookOptions } from '@apollo/client';
import { DocumentNode } from 'graphql/language/ast';

interface Props {
  queryList: any[];
  queryDoc: DocumentNode;
  options?: LazyQueryHookOptions;
  setQueryState: any;
  setSelectedQuery?: React.Dispatch<number | false>;
}
const ControlledAccordions: React.FC<Props> = ({
  queryList,
  queryDoc,
  options,
  setQueryState,
  setSelectedQuery,
}) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const className = 'query-list';

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  React.useEffect(() => {
    setSelectedQuery(expanded);
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
                  {expanded === i && queryDoc && (
                    <QueryDetail
                      setQueryState={setQueryState}
                      queryDoc={queryDoc}
                      options={options}
                    />
                  )}
                </AccordionDetails>
              </Accordion>
            ),
        )}
    </div>
  );
};

export default ControlledAccordions;
