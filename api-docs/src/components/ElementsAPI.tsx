import '@stoplight/elements-core/styles.css';

import { API } from '@stoplight/elements';
import { Box } from '@stoplight/mosaic';
import React from 'react';
// import API_YAML from '../api.yaml';

export const ElementsAPI: React.FC = () => {
  // https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml
  return (
    <Box flex={1} overflowY="hidden">
      <API apiDescriptionDocument={require('../apis/main.json')} router="hash" />
    </Box>
  );
};
