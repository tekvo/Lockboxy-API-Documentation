import { Flex, HStack, InvertTheme, Text } from '@stoplight/mosaic';
import React from 'react';

export const DemoNavbar = () => {
  return (
    <>
      <InvertTheme>
        <Flex h="2xl" shrink={0} px={5} alignItems="center" bg="canvas-pure">
          <HStack w="1/3" alignItems="center" spacing={4}>
            <Text fontSize="lg" fontWeight="semibold" lineHeight="none">
              LockBoxy API Documentation
            </Text>
          </HStack>
        </Flex>
      </InvertTheme>
    </>
  );
};
