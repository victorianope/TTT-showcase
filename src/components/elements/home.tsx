import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

import { terroristList } from "../../assets/database";
import { Component } from "../base/fc";
import { CardList } from "./grid/cardList";
import { Header } from "./header";
import { ItemDetails } from "./itemDetails";
import { ItemList } from "./list/itemList";
import { TerroristType } from "../../types/";

export const Home: Component = () => {
  const { id } = useParams();
  const location = useLocation();

  const [showAsList, setShowAsList] = useState(true);
  const [query, setQuery] = useState(location.search.split("?")[1] || "");
  const [terroristFilteredList, setTerroristFilteredList] =
    useState<Array<TerroristType>>(terroristList);

  const searchBarColor = useColorModeValue("black", "white");

  useEffect(() => {
    setTerroristFilteredList(
      terroristList.filter((item) => {
        const descriptionCheck = item.description.some((descriptionItem) =>
          descriptionItem
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        );
        const nameCheck = item.name
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
        const groupCheck = item.group
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());

        return descriptionCheck || nameCheck || groupCheck;
      })
    );
  }, [query]);

  const bgColor = useColorModeValue("gray.200", "black");

  return (
    <Box background={bgColor} height={"100%"} minH={"100vh"}>
      <Center>
        <Box
          maxWidth={{ base: "990px", xl: "1440px" }}
          flex={"1 1 100%"}
          padding={"45px 25px"}
        >
          <AnimateSharedLayout>
            <Header />

            <Flex justifyContent={"center"} marginTop={6}>
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
                  Grid (WIP)
                </Button>
              </ButtonGroup>
            </Flex>

            <Center>
              <Input
                maxWidth={{ base: "80%", md: "70%", lg: "50%", xl: "40%" }}
                borderColor={searchBarColor}
                marginTop={6}
                type="text"
                value={query}
                placeholder={"¿Qué podrá hacer mi personaje?"}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                autoFocus
              />
            </Center>

            {showAsList ? (
              <>
                <ItemList
                  terroristFilteredList={
                    query.length !== 0 ? terroristFilteredList : terroristList
                  }
                />
                <AnimatePresence>
                  {id && <ItemDetails terroristId={id} />}
                </AnimatePresence>
              </>
            ) : (
              <>
                <CardList
                  terroristFilteredList={
                    query.length !== 0 ? terroristFilteredList : terroristList
                  }
                />
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
