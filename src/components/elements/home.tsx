import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { Component } from "../base/fc";
import { CardList } from "./grid/cardList";
import { ItemDetails } from "./itemDetails";
import { Header } from "./header";
import { useState } from "react";
import { ItemList } from "./list/itemList";

export const Home: Component = () => {
  const { id } = useParams();

  const [showAsList, setShowAsList] = useState(false);
  const bgColor = useColorModeValue("gray.200", "black");

  return (
    <Box background={bgColor}>
      <Center>
        <Box
          maxWidth={{ base: "990px", xl: "1440px" }}
          flex={"1 1 100%"}
          padding={"45px 25px"}
        >
          <AnimateSharedLayout>
            <Header />

            <Flex justifyContent={"center"}>
              <ButtonGroup spacing={0} size={"lg"}>
                <Button
                  borderRightRadius={0}
                  borderWidth={"1px"}
                  colorScheme={showAsList ? "teal" : "gray"}
                  onClick={() => {
                    setShowAsList(true);
                  }}
                >
                  List
                </Button>
                <Button
                  borderLeftRadius={0}
                  borderWidth={"1px"}
                  colorScheme={!showAsList ? "teal" : "gray"}
                  onClick={() => {
                    setShowAsList(false);
                  }}
                >
                  Grid
                </Button>
              </ButtonGroup>
            </Flex>

            {showAsList ? (
              <>
                <ItemList selectedId={id} />
                <AnimatePresence>
                  {id && <ItemDetails terroristId={id} />}
                </AnimatePresence>
              </>
            ) : (
              <>
                <CardList selectedId={id} />
                <AnimatePresence>
                  {id && <ItemDetails terroristId={id} />}
                </AnimatePresence>
              </>
            )}
          </AnimateSharedLayout>
        </Box>
      </Center>
    </Box>
  );
};
