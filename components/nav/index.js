import React from 'react';
import { Flex, Box } from 'blockstack-ui';

import Brand from '../brand';

export default class Nav extends React.Component {
  render() {
    return (
      <Flex mt={3}>
        <Box ml={6}>
          <Brand />
        </Box>
      </Flex>
    );
  }
}
