import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  const buttonBgColor = useColorModeValue('black', 'gray.200');
  const buttonTextColor = useColorModeValue('white', 'black');

  return (
    <header
      style={{
        borderBottom: '1px solid',
        position: 'relative',
      }}
    >
      <Grid templateColumns={'repeat(1, 10fr)'}>
        <GridItem colStart={1} colEnd={10} alignSelf={'center'}>
          <Text
            color={'var(--secondary)'}
            fontSize={'14px'}
            textTransform={'uppercase'}
          >
            v25.02.2022
          </Text>
          <Heading fontWeight={'bold'} margin={'6px 0 12px'}>
            Trouble in Terrorist Town
          </Heading>
        </GridItem>
        <GridItem colStart={10} alignSelf={'end'} marginBottom={'12px'}>
          <Box
            bgColor={buttonBgColor}
            width={'25px'}
            height={'25px'}
            textColor={buttonTextColor}
            onClick={toggleColorMode}
            borderRadius={'50px'}
            cursor={'pointer'}
          ></Box>
        </GridItem>
      </Grid>
    </header>
  );
};
