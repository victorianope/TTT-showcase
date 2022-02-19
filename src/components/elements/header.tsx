import { Button, Grid, GridItem, Text, useColorMode } from "@chakra-ui/react";
import * as React from "react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <header
      style={
        {
          // borderBottom: "2px solid",
          // borderColor: "cadetblue",
        }
      }
    >
      <Grid templateColumns={"repeat(1, 10fr)"}>
        <GridItem colStart={1} colEnd={10} alignSelf={"center"}>
          <Text
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            textTransform={"uppercase"}
            textAlign={"center"}
            fontFamily={"Adventure"}
          >
            Trouble in Terrorist Town
          </Text>
        </GridItem>
        <GridItem colStart={10} alignSelf={"center"}>
          <Button colorScheme={"teal"} onClick={toggleColorMode}>
            O
          </Button>
        </GridItem>
      </Grid>
    </header>
  );
};
